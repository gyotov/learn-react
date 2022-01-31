import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import CounterApp from './components/CounterApp'

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'))
ReactDOM.render(<CounterApp count={42} />, document.querySelector('#counter-app'))
