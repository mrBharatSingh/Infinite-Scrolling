import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[data,setData]=useState([])

  const makeData=()=>{
    var arr=[]
    for(var i=0; i<25; i++)
    {
      arr.push("Masai Student")
    }
    // console.log(arr)
    setData((oldData)=>[...oldData,...arr])
  }

  useEffect(()=>{
    makeData()
    var xx=document.getElementById("container")
    xx.addEventListener('scroll',(e)=>{
      var a=xx.scrollHeight
      var b=xx.scrollTop
      var c=xx.clientHeight
      if(Math.floor(a-b)<=c+10)
      {
        
        
        sxrollData()
      }
      // console.log(Math.floor(a-b))
      console.log(xx.clientHeight,"clien")
    })
  },[])
 
  const sxrollData=()=>{
    makeData()
  }
  return (
    <div className="App">
      <div id="container">
     { data.map((el,i)=>{
        return(<><h1>{el} {i+1}</h1></>)
      })}
     
      </div>
    </div>
  );
}

export default App;
