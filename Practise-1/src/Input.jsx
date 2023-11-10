import React from 'react'
import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Type Color Name</label>
        <input
            id='input'
            type='text'
            placeholder='Type Color Name'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
                }
            }
            />

    </form>
  )
}

export default Input
