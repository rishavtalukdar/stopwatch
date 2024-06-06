import { useEffect, useState } from "react";

function App() {

  const [time, settime] =useState(0)
  const [isRunning, setIsRunning] =useState(false)

//  Generally speaking, using setState inside useEffect will create an infinite loop that most likely you don't want to cause. 
// There are a couple of exceptions to that rule which I will get into later.
  useEffect (()=>{
    let intervalId
    if(isRunning){
      intervalId =setInterval(()=>{
        settime (time+1)
      },100)
    }
    return()=>clearInterval(intervalId)
  },[time,isRunning])


  const startAndStop =() =>{
    setIsRunning (!isRunning)
  }
  const reset =() =>{
    settime (0)
  }

  const minute = Math.floor(time/60)
  const second = Math.floor(time%60)

  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>Time: {minute.toString()}:{second.toString().padStart(2,"0")} </h3>
      <div>
        <button onClick={startAndStop}>Start</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
