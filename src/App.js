import { useEffect, useState } from "react";

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div >
        <h1>Stopwatch</h1>
        <div >Time: {formatTime()}</div>
        <div >
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
