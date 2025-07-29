import React from 'react'
import Button from '../components/Button'
import RefreshArrowIcon from '../assets/icons/refresh-arrow.svg'
import PlayIcon from '../assets/icons/play.svg'
import StopIcon from '../assets/icons/stop.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import { useContext } from 'react'
import { useEffect } from 'react'
import { TimerContext } from '../components/TimerContext'

export default function PomodoroControls() {

  const {isPlaying, setIsPlaying,
    ModesStyles: currentStyle, ispomodoro: currentMode
  } = useContext(TimerContext);

  function StopStart(){
    setIsPlaying(!isPlaying)
  }
  useEffect(() => {
    setIsPlaying(false)
  }, [currentMode, setIsPlaying])
  return (
    <div className='PomodoroControls'>
      <Button buttonClass='PomodoroControlsbutton' style={{background: currentStyle.buttons.background}}>
        <img src={RefreshArrowIcon} alt="refresh pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button buttonClass='PomodoroControlsbutton' specifId='middleButton' style={{background: currentStyle.buttons.background}}
      onClick={StopStart}>
        <img src={isPlaying ? StopIcon : PlayIcon} alt="start pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button buttonClass='PomodoroControlsbutton' style={{background: currentStyle.buttons.background}}>
        <img src={SettingsIcon} alt="pomodoro settings" className='PomodoroControlsImg'/>
      </Button>
    </div>
  )
}
