import React,{useState} from 'react'
import PomodoroTimer from './features/PomodoroTimer'
import Pomodoro from './features/Pomodoro'
import { TaskProvider } from './components/TaskContext'
import { TimerProvider } from './components/TimerContext'

function App() {

  return (
    <TimerProvider>
    <TaskProvider>
      <div className='App_Container'>
        <Pomodoro></Pomodoro>
        <PomodoroTimer></PomodoroTimer>
       </div>
    </TaskProvider>
    </TimerProvider>
  )
}

export default App
