
import React, { useEffect, useState } from 'react'
import Break from './Break';

const TimeOut = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isPoused, setIsPoused] = useState(true);

  const [isBreak, setIsBreak] = useState(false);

  var timer;

useEffect(() => {
    if (isPoused) {
      timer = setInterval(() => {
        setSeconds(seconds - 1)
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);

        }

      }, 1000)
    }

    if (minutes == 0 && seconds === 0) {
      clearInterval(timer)
      setIsBreak(true);
      console.log("time out.....");
    }
    return () => clearInterval(timer);
  })

  return (
    <>
      <h4>Your timer</h4>
      <h5>{minutes}:{seconds}</h5>
      {
        isBreak? <Break />:null
      }

      <div className="buttons">
        <button className='btn btn-outline-primary me-2 my-2 btn-lg' onClick={() => { setMinutes(25); setSeconds(0); setIsBreak(false) }}>Reset</button>

        <button className='btn btn-primary my-2 btn-lg' onClick={() => setIsPoused(!isPoused)}>{isPoused ? "Pouse" : "Resume"}</button>
      </div>
    </>
  )
}

export default TimeOut
