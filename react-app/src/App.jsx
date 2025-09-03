import React,{useState} from 'react'
import PomodoroTimer from './features/PomodoroTimer'
import Pomodoro from './features/Pomodoro'
import { TaskProvider } from './components/TaskContext'
import { TimerProvider } from './components/TimerContext'
import { SoundProvider } from './components/SoundContext'


function App() {

  return (
    <SoundProvider>
    <TimerProvider>
    <TaskProvider>
      <div className='App_Container'>
        <Pomodoro></Pomodoro>
        <PomodoroTimer></PomodoroTimer>
       </div>
    </TaskProvider>
    </TimerProvider>
    </SoundProvider>
  )
}

export default App
