import PomodoroControls from './PomodoroControls'
import PomodoroImage from '../components/PomodoroImage'
import SeedIcon from '../assets/icons/seed.png'
import PomodoroIcon from '../assets/icons/pomodoro.png'
import { useContext } from 'react'
import { useEffect } from 'react'
import { TimerContext } from '../components/TimerContext'

export default function Pomodoro() {
  const {ModesStyles: currentStyle,
         isPomodoro: currentMode,
         setPomodoro: changeMode,
         isPlaying,
         setIsPlaying
  } = useContext(TimerContext);

  return (
    <div className='Pomodoro'>
     <PomodoroImage ImgSrc={currentMode ? PomodoroIcon: SeedIcon}></PomodoroImage>
     <PomodoroControls></PomodoroControls>
    </div>
  )
}
