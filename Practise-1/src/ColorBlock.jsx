import React from 'react'

const ColorBlock = ({ colorValue, hexValue, isDarkMode }) => {
    let textColor = 'black';
    isDarkMode ? textColor = 'white' : 'black';
  return (
    <section
        className='colorBlock'
        style={{ 
            backgroundColor: colorValue,
            color: textColor
        }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      
    </section>
  )
}

ColorBlock.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorBlock
