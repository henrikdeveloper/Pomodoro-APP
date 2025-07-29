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

  {/*we set a timeout to changeMode so the user won't do it on a loop */}
  function pressSpace(e){
    if (e.key === ' '){
      e.preventDefault()
      setTimeout(() => {setIsPlaying(isPlaying => !isPlaying)},150)
    }
  }
  function pressShift(e){
    if (e.key === 'Shift'){
      e.preventDefault()
      setTimeout(() => {changeMode(currentMode => !currentMode)},150)
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', pressSpace);
    return () => {
      window.removeEventListener('keypress', pressSpace)
    }},
    [isPlaying, setIsPlaying]
  )
  useEffect(() => {
    window.addEventListener('keydown', pressShift);
    return () => {
      window.removeEventListener('keydown', pressShift)
    }},
    [currentMode, changeMode]
  )
  return (
    <div className='Pomodoro'>
     <PomodoroImage ImgSrc={currentMode ? PomodoroIcon: SeedIcon}></PomodoroImage>
     <PomodoroControls></PomodoroControls>
    </div>
  )
}
