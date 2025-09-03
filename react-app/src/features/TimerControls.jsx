import React from 'react'
import Button from '../components/Button';
import { useContext } from 'react';
import { TimerContext } from '../components/TimerContext';

export default function TimerControls() {
  {/*We destructure the object useContext(ModeContext) pass back, aiming only the ModesStyles element*/}
  const {setPomodoro: setTheme,
         isPomodoro: currentTheme,
         forceLongBreak,
         ModesStyles,
         currentTimer,
         reverseForced,
         setIsPlaying
  } = useContext(TimerContext);

  function changeMode() {
    setTheme(!currentTheme)
  };

  function longBreakButton(){
    if(currentTheme){
      setTheme(!currentTheme)
    }
    forceLongBreak()
    setIsPlaying(false)
  };
  function breakButton(){
    if(currentTheme){
      setTheme(!currentTheme)
    }
    reverseForced()
    setIsPlaying(false)

  }
  console.log(currentTimer)
  return (
    <div className='timerControls_Pomodoro'>
      {/*We apply the logic of ModeContext here, accordin to the mode provided (either pomodoro or break),
      we pass the prop {style} down to the button component, that applies it to the button itself*/}
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {!currentTheme ? changeMode: null}>
        Timer
      </Button>
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {breakButton}>
        Break
      </Button>
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {longBreakButton}>
        Long Break
      </Button>
    </div>
  )
}
