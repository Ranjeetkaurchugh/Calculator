import React,{useState} from 'react'


import './App.css'

function App() {
  const[value,setvalue]=useState('0') 
  function handle(e){
    setvalue(value+e.target.innerHTML)
  }
  function equal(){
    setvalue(eval(value))
  }
  function AC(){
    setvalue(" ")
  }
  function del(){
    setvalue( value.toString().slice(0,-1))
  }

  return (
    <>
    
        <div className='Calculator'>
         
            <div>
              <input type='text' placeholder='0' value={value}/>
            </div>
            <div>
             <button onClick={AC}>AC</button>
             <button onClick={del}>DEL</button>
             <button>%</button>
             <button>/</button>
            </div>
            <div>
             <button onClick={handle}>7</button>
             <button onClick={handle}>8</button>
             <button onClick={handle}>9</button>
             <button onClick={handle}>*</button>
            </div>
            <div>
             <button onClick={handle}>4</button>
             <button onClick={handle}>5</button>
             <button onClick={handle}>6</button>
             <button onClick={handle}>-</button>
            </div>
            <div>
             <button onClick={handle}>1</button>
             <button onClick={handle}>2</button>
             <button onClick={handle}>3</button>
             <button onClick={handle}>+</button>
            </div>
            <div>
             <button onClick={handle}>00</button>
             <button onClick={handle}>0</button>
             <button onClick={handle}>0</button>
             <button className='equal' onClick={equal}>=</button>
            </div>
        
        </div>
      
    </>
  )
}

export default App
