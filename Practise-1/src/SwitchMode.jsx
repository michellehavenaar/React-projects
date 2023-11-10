import React from 'react'

const SwitchMode = ({ isDarkMode, setisDarkMode }) => {
    
  return (
    <div>
        <button onClick={() => setisDarkMode(!isDarkMode)}>
            Make text {isDarkMode ? "dark" : "light"}
        </button>
      
    </div>
  )
}

export default SwitchMode
