import { useState } from 'react'
import ColorBlock from './ColorBlock'
import Input from './Input'
import SwitchMode from './SwitchMode'

function App() {
    const [colorValue, setColorValue] = useState('')
    const [hexValue, setHexValue] = useState('')
    const [isDarkMode, setisDarkMode] = useState(false)

      

  return (
    <div className='App'>
        <SwitchMode 
            isDarkMode={isDarkMode}
            setisDarkMode={setisDarkMode}
        />
        <ColorBlock
            colorValue={colorValue}
            hexValue={hexValue} 
            isDarkMode={isDarkMode}
        />
        <Input 
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue} 
        />
    </div>
  )
}

export default App
