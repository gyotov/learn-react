import React from 'react'

export default class CounterApp extends React.Component {
  state = {
    visible: false,
    count: 0
  }

  toggleVisible = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }

  add = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  remove = () => {
    this.setState((prevState) => (
      {
        count: prevState.count <= 0
          ? 0
          : prevState.count - 1
      }
    ))
  }

  reset = () => {
    if (this.state.count === 0) {
      return
    }

    this.setState(() => ({ count: 0 }))
  }

  componentDidMount() {
    try {
      const parsedJson = JSON.parse(localStorage.getItem('counter-state'))

      if (!parsedJson) {
        return
      }

      this.setState(() => (parsedJson))
    } catch (e) {
      alert('Invalid JSON')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.count === this.state.count) && (prevState.visible === this.state.visible)) {
      return
    }

    localStorage.setItem('counter-state', JSON.stringify(this.state))
  }

  render() {
    return (
      <div>
        <hr />

        <button onClick={this.toggleVisible}>
          {
            this.state.visible ? 'Hide' : 'Show'
          }
        </button>

        {
          this.state.visible &&
          <div>
            <h1>Count: {this.state.count}</h1>

            <button onClick={this.add}>+1</button>

            <button onClick={this.remove}>-1</button>

            <button onClick={this.reset}>reset</button>
          </div>
        }
      </div>
    )
  }
}
