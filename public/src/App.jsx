import './index.css'

import Input from './components/Input'
import { useState, createContext } from 'react'

export const CheckContext = createContext()

function App() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <section>
      <div>
        <CheckContext.Provider value={[isChecked, setIsChecked]}>
          <Input />
        </CheckContext.Provider>
      </div>
    </section>
  )
}

export default App
