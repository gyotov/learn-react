import React from 'react'

const Option = props => (
  <div>
    {props.title}
    <button
      onClick={(e) => {
        props.removeOption(props.title)
      } }
    >
      Remove
    </button>
  </div>
)

export default Option
