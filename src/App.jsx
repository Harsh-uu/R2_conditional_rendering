import { useEffect, useState } from 'react'
import C1 from './C1'
import C2 from './C2'
function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [test,setTest]=useState(1);
  useEffect(()=>{
    console.log('app')
  },[test])

  return (
    <div className="App">
    <div style={{textAlign:'center'}}>
     {isOpen?<C1/>:<C2/>}
    </div>
     <button onClick={()=>{setIsOpen(!isOpen)}}>toogle</button>
     <button onClick={()=>{setTest(test+1)}}>test</button>
    </div>
  )
}

export default App
