import { useState } from 'react'
import './App.css'
import handleClick from './assets/component/function/function/test'
function App() {
 const [stateCount, setStateCount] = useState(0);
let count = 0;
 
const handleVariableCount =() =>{
  count = count +1
  console.log(count);
}
const handleStateCount =() =>{
  const sum = stateCount + 1;
  setStateCount(sum)
}


  return (
    <>
      
      <h1>Main App js</h1>
      {/* eta hocce variable count */}
      <h1>StateCount : {stateCount} </h1> 
      
      <h1 >VariableCount : {count} </h1>
   
   <button onClick={handleVariableCount}>VariableCount</button>
   <button onClick={handleStateCount}>StateCount</button>
    </>
  )
}

export default App
