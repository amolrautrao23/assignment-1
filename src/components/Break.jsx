import React, { useEffect, useState } from 'react'

const Break = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(5);
    
var timer 
    useEffect(() => {
          timer = setInterval(() => {
            setSeconds(seconds - 1)
            if (seconds === 0) {
              setMinutes(minutes - 1);
              setSeconds(59);
    
            }
    
          }, 1000)
        
    
        if (minutes == 0 && seconds === 0) {
          clearInterval(timer)
          console.log("time out.....");
        }
        return () => clearInterval(timer);
      })

  return (
    <>
      <div className="border border-secondary my-1" style={{width:"50%",margin:"auto",borderRadius:"5px"}}>
      <p className='m-0'>Your break timer</p>
      <small>{minutes}:{seconds}</small>
      </div>
    </>
  )
}

export default Break
