import { useState, createContext, useMemo, useEffect, useContext} from "react";
import BreakStyle from "./BreakStyle";
import PomodoroStyle from './PomodoroStyle';
import useSound from 'use-sound';
import presssound from '../assets/sounds/buttonpress.mp3'
import alarmsound from '../assets/sounds/alarmclock.mp3'
import { SoundContext } from '../components/SoundContext'

export const TimerContext = createContext(null)
export const TimerProvider = ({children}) =>{
    const [streaks, setStreaks] = useState(0);
    const [isForced, setIsForced] = useState(false);
    const [minimumStreaks, setMinimumStreaks] = useState(3);
    const [normalBreakTime, setNormalBreakTime] = useState(300000);
    const [longBreakTime, setLongBreakTime] = useState (900000)
    const breaktime = (streaks === 3 ? longBreakTime : normalBreakTime)
    const [pomodoroTime, setPomodoroTime] = useState(1080000);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPomodoro, setPomodoro] = useState(true);
    const ModesStyles = isPomodoro ? PomodoroStyle: BreakStyle;
    const [currentTimer, setTimer] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [playPressSound] = useSound(presssound, {volume: 0.25})
    const [playAlarmSound] = useSound(alarmsound, {volume: 0.25})
    const {isSoundOn, setSoundOn} = useContext(SoundContext)

    if(currentTimer === 0){
        playAlarmSound()
    }

    //this sets the current timer and sets its dependencies
    useEffect(() => {
        resetPomodoro()
    }, [isPomodoro, pomodoroTime, breaktime, isForced])

    //this plays the button-press sound
    useEffect(() => {
      playPressSound()
    },
        [isPlaying]
  )
    //this sets the streaks and reset them if its above 3
    useEffect(() => {
        if(streaks > minimumStreaks){
            resetStreaks()
        }
    }, [streaks, minimumStreaks])

    //this useEffect ensures the timer stops if the user changes the Pomodoro Mode.
    useEffect(() => {
        setIsPlaying(false)
    }, [isPomodoro, pomodoroTime])

    function resetPomodoro(){
        setIsPlaying(false)
        if (isPomodoro){
            setTimer(pomodoroTime)
        }
        else if (!isPomodoro && isForced){
            setTimer(longBreakTime)
        }
        else{
            setTimer(breaktime)
        }
    }
    function incrementStreaks(){
        setStreaks(prev => prev + 1)
    }
    function resetStreaks(){
        setStreaks (0)
    }
    function forceLongBreak(){
        setIsForced(true)
    }
    function reverseForced(){
        setIsForced(false)
    }

    // useMemo just in case the user changes the mode without having increased their streaks counts.
    const isLongBreak = useMemo(() => {
        return streaks === 3
    }, [streaks]) // False or True

    // we don't pass streaks and setStreaks because incrementStreaks and resetStreaks properly does their jobs.
    const value = {currentTimer, setTimer, isPlaying, setIsPlaying, isLongBreak, incrementStreaks,
        resetStreaks, isPomodoro, setPomodoro, ModesStyles, forceLongBreak, reverseForced, isTyping, setIsTyping, pomodoroTime,
        normalBreakTime, longBreakTime, breaktime, resetPomodoro
    }
    return(
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    )
}