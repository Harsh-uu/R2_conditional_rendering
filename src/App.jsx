import { useState } from 'react'
import C1 from './C1'
import C2 from './C2'
function App() {
  const [isOpen, setIsOpen] = useState(true)
console.log("hello")
  return (
    <div className="App">
    <div style={{textAlign:'center'}}>
     {isOpen?<C1/>:<C2/>}
    </div>
     <button onClick={()=>{setIsOpen(!isOpen)}}>toogle</button>
     
    </div>
  )
}

export default App
