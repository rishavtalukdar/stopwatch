import { useEffect, useState } from "react";

function App() {

  const [time, settime] =useState(0)
  const [isRunning, setIsRunning] =useState(false)

  useEffect (()=>{
    let interval
    if(isRunning){
      interval =setInterval(() => {
        settime(time + 1)
      }, 1000);
    }
   return ()=>clearInterval(interval)
  },[isRunning ,time])

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset =()=>{
    settime(0)
  }

  const minute =Math.floor(time/60)
  const second =Math.floor(time%60)

  return (
    <div>
      <h1>Stopwatch</h1>
      <h3>Time: {minute.toString().padStart(2, "0")}: {second.toString().padStart(2, "0")}</h3>
      <div>
        <button onClick={startAndStop}>
          {isRunning?"Stop":"Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
