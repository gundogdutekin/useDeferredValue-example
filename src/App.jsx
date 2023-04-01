import { useState,useTransition } from 'react'
import './App.css'
import Characters from './Characters'

function App() {
  const [inputtext, setInputtext] = useState('')
  const [txtarray, setTxtarray] = useState([])  
  const [isPending,startTransition] = useTransition()

  const inputAdd = (e) => {
    setInputtext(e.target.value)  
  }
  return (
    <div className="App">
      <input type="text" value={inputtext} onChange={inputAdd} />
     <Characters input={inputtext}/>
    </div>
  )
}

export default App
