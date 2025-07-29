import Timer from '../components/Timer'
import Task from '../components/Task'
import TimerControls from './TimerControls'
import MusicControls from './MusicControls'
import { useContext, useState } from 'react'
import { TimerContext } from '../components/TimerContext'
import { useEffect } from 'react'

export default function PomodoroTimer() {
  const {ModesStyles,
         isPomodoro: currentMode,
         setPomodoro: changeMode,
         isPlaying,
         setIsPlaying,
         isTyping
  } = useContext(TimerContext)
  
  /*we set a timeout to changeMode so the user won't do it on a loop */
  function pressSpace(e){
    if (isTyping){
      return;
    }
    else{
    if (e.key === ' '){
      setTimeout(() => {setIsPlaying(isPlaying => !isPlaying)},150)
    }
  }
  }
  function pressShift(e){
    if (isTyping){
      return
    }
    else{
    if (e.key === 'Shift'){
      e.preventDefault()
      setTimeout(() => {changeMode(currentMode => !currentMode)},150)
    }
  }
  }

  useEffect(() => {
    window.addEventListener('keypress', pressSpace);
    return () => {
      window.removeEventListener('keypress', pressSpace)
    }},
    [isPlaying, setIsPlaying, isTyping]
  )
  useEffect(() => {
    window.addEventListener('keydown', pressShift);
    return () => {
      window.removeEventListener('keydown', pressShift)
    }},
    [currentMode, changeMode, isTyping]
  )
  return (
    <div className='Timer'>
      <Task style={{color: ModesStyles.buttons.background}}></Task>
      <Timer></Timer>
      <TimerControls></TimerControls>
      <MusicControls></MusicControls>
    </div>
  )
}
