import React from 'react'
import Option from './Option'

const Options = props => (
  <div>
    {props.options.map((option, index) => (
      <Option
        key={'option-' + index}
        title={option}
        removeOption={props.removeOption} />
    ))}

    {props.options.length === 0 &&
      <p>No options yet</p>}

    <button
      onClick={props.removeOptions}
      disabled={props.options.length === 0}
    >Remove all</button>
  </div>
)

export default Options
