import { useEffect, useState } from 'react'
import './App.css'
import handleClick from './assets/component/function/function/test'
function App() {

const [name, setName] = useState("Gias");
const [products, setProduct] = useState([]);
let control = false;


useEffect(() => {
// console.log("hello boss");
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data =>{
setProduct(data);
})
},[]);

console.log(products);


const handleChange = () => {
  // control = true;
  // console.log(control);
  setName("hero alalm")
};













//  const [stateCount, setStateCount] = useState(0);

// useEffect(()=>{
//   console.log("hello boss");
// })

// const handleChange = ()=>{
//   setName("hero alom");
// };



// let count = 0;
 
// const handleVariableCount =() =>{
//   count = count +1
//   console.log(count);
// }
// const handleStateCount =() =>{
//   const sum = stateCount + 1;
//   setStateCount(sum)
// }


  return (
    <>
      {/* <button onClick={handleChange}>Handle name change</button> */}


      <h1>Main App js</h1>
      {/* eta hocce variable count */}
      {/* <h1>StateCount : {stateCount} </h1> 
      
      <h1 >VariableCount : {count} </h1>
   
   <button onClick={handleVariableCount}>VariableCount</button>
   <button onClick={handleStateCount}>StateCount</button> */}


   {
products.map((item) => {

})}
    </>
  );
}

export default App
