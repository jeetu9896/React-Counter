import logo from './logo.svg';
import './App.css';
import React, { cloneElement } from 'react'

function App() {

  const [count, setcount] = React.useState(0);
  const valueadd = () => {

    setcount(count + 1);
  }
  const valueremove  =()=>{
    if(count<=0){
      setcount(0)
    }
    else{

      setcount(count - 1); 
    }
  }
  const valuedouble=()=>{
    setcount(count * 2);
  }
  //  console.log(count)
  return (
    <div className="App">

      <h1>Counter</h1>
      <h2>{count}</h2>
      {count%2==0?<h2 style={{color:"green"}}>EVEN</h2>:<h2 style={{color:"red"}}>ODD</h2>}
      <button onClick={valueadd} style={{margin:"5px"}}>Add</button>
      <button onClick={valueremove} style={{margin:"5px"}}>Reduce</button>
      <button onClick={valuedouble} style={{margin:"5px"}}>Dobule</button>



    </div>
  );
}

export default App;
