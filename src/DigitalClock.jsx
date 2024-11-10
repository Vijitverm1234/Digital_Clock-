import React,{useState,useEffect, useCallback} from  'react'
import './Digital.css'
function DigitalClock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
     const intervalId=setInterval(()=>{
        setTime(new Date())
     },1000)
   return ()=>{
    clearInterval(intervalId)
   }
    },[])
  function formatTime(){
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    const meridem=hours>=12?'PM':'AM'
    hours=hours%12 || 12
    return `${pedZero(hours)}:${pedZero(minutes)}:${pedZero(seconds)} ${meridem}`
  }
  function pedZero(number){
   return (number<10?"0":"")+number
  }
return (
    <>
  <div className="clock-container">
    <div className="clock">
        <span>{formatTime()}</span>
    </div>
  </div>
    </>
)
}
export default DigitalClock;