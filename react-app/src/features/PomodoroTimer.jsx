import Timer from '../components/Timer'
import Task from '../components/Task'
import TimerControls from './TimerControls'
import MusicControls from './MusicControls'
import { useContext, useState } from 'react'
import { TimerContext } from '../components/TimerContext'

export default function PomodoroTimer() {
  const {isPlaying, ModesStyles} = useContext(TimerContext)
  return (
    <div className='Timer'>
      <Task style={{color: ModesStyles.buttons.background}} isActive = {isPlaying}></Task>
      <Timer></Timer>
      <TimerControls></TimerControls>
      <MusicControls></MusicControls>
    </div>
  )
}
