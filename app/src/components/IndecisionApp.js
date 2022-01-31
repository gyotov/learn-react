import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: false
  }

  removeOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  removeOption = option => {
    this.setState((prevState) => ({
      options: prevState.options.filter(
        (prevStateOption) => prevStateOption !== option
      )
    }))
  }

  getRandomOption = () => {
    const option = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ]

    this.setState(() => ({ selectedOption: option }))
  }

  add = option => {
    if (!option) {
      return
    }

    this.setState((prevState) => ({ options: [...prevState.options, option] }))
  }

  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: false }))
  }

  componentDidMount() {
    try {
      const options = JSON.parse(
        localStorage.getItem('options')
      )

      if (!options) {
        return
      }

      this.setState(() => ({ options }))
    } catch (e) {
      alert('Invalid JSON')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length === this.state.options.length) {
      return
    }

    const jsonString = JSON.stringify(this.state.options)

    localStorage.setItem('options', jsonString)
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  render () {
    return (
      <div>
        <Header title="Title" subtitle="Subtitle" />

        <Action
          hasOptions={this.state.options.length > 0}
          getRandomOption={this.getRandomOption}
        />

        <Options
          options={this.state.options}
          removeOptions={this.removeOptions}
          removeOption={this.removeOption}
        />

        <AddOption
          add={this.add}
          options={this.state.options}
        />

        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    )
  }
}
