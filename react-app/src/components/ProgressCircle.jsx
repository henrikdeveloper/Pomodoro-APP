import React, { Children, useContext, useEffect, useMemo, useState } from 'react'
import { TimerContext } from './TimerContext'

function ProgressCircle({children}) {
  const {ModesStyles, pomodoroTime, breaktime, currentTimer, isPomodoro} = useContext(TimerContext)
  const timeSet = isPomodoro ? pomodoroTime : breaktime
  const circleStroke = 2 * Math.PI * 95
  const [currentStroke, setCurrentStroke] = useState(circleStroke)
  const TimePercentage = useMemo(() => {
    return ((currentTimer * 100)/ timeSet)
  }, [currentTimer]) 

  useEffect(() => {
    setCurrentStroke((circleStroke * (100 - TimePercentage))/100)
  },[currentTimer, circleStroke, TimePercentage])

  console.log('Tempos padrão: ' + timeSet + ' Tempo Atual: ' + currentTimer + ' Porcentagem Atual: ' + TimePercentage 
    + ' Stroke Atual: ' + currentStroke
  )
  return (
    <div className='PomodoroIcon'>
      <svg width={200} height={200} style={{position: 'absolute', top: '0', left: '0'}}>
          <g transform='rotate(270 100 100)'>
              <circle r="95" fill='transparent' cx={100} cy={100} stroke = {ModesStyles.buttons.background} 
              strokeWidth={3.2} strokeDasharray={circleStroke} strokeDashoffset={currentStroke} rotate={50} ></circle>
          </g>
      </svg>
      {children}
    </div>
  )
}

export default ProgressCircle