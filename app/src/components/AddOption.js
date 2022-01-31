import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error: false
  }

  onSubmit = e => {
    e.preventDefault()

    const input = e.target.elements.option
    const value = input.value.trim()

    if (!value) {
      this.setState(() => ({ error: 'Option can not be blank' }))

      return
    }

    if (this.props.options.includes(value)) {
      this.setState(() => ({ error: 'Option already exists' }))

      return
    }

    this.setState(() => ({ error: false }))
    this.props.add(value)

    input.value = ''
    input.focus()
  }

  render () {
    return (
      <div>
        {
          this.state.error &&
          <p>{this.state.error}</p>
        }

        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />

          <button>Add option</button>
        </form>
      </div>
    )
  }
}
