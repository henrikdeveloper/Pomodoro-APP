import React, { useContext, useEffect, useState } from 'react'
import { TimerContext } from './TimerContext'

export default function Timer() {
  const {isPlaying, setIsPlaying, currentTimer, setTimer,
        incrementStreaks, isPomodoro, setPomodoro
  } = useContext(TimerContext)


  useEffect(() => {
    if (!isPlaying) return;
    if (currentTimer <= 0){
      setIsPlaying(false)
      setTimer(0)
      {isPomodoro ? incrementStreaks() : {}}
      setPomodoro(!isPomodoro)
      return;
    }

    const tick = setInterval(() => {
      setTimer(prev => prev - 1000)
    }, 1000);

    return () => clearInterval(tick);
  }, [isPlaying, setTimer, currentTimer, setPomodoro])

  function formatTimer(milliseconds){
    let totalseconds = Math.floor(milliseconds/1000)
    let totalminutes = Math.floor(totalseconds/60)

    let seconds = Math.floor(totalseconds % 60)
    let minutes = Math.floor(totalminutes % 60)

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;

  }
  return (
    <div className='Timer'>
      <div className='timerCount'>{formatTimer(currentTimer)}</div>
    </div>
  )
}
