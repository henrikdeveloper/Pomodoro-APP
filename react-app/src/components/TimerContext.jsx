import { useState, createContext, useMemo, useEffect} from "react";
import BreakStyle from "./BreakStyle";
import PomodoroStyle from './PomodoroStyle';

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


    //this sets the current timer and sets its dependencies
    useEffect(() => {
        if (isPomodoro){
            setTimer(pomodoroTime)
        }
        else if (!isPomodoro && isForced){
            setTimer(longBreakTime)
        }
        else{
            setTimer(breaktime)
        }
    }, [isPomodoro, pomodoroTime, breaktime, isForced])

    //this sets the streaks and reset them if its above 3
    useEffect(() => {
        if(streaks > minimumStreaks){
            resetStreaks()
        }
    }, [streaks, minimumStreaks])

    //this useEffect ensures the timer stops if the user changes the Pomodoro Mode.
    useEffect(() => {
        setIsPlaying(false)
    }, [isPomodoro])

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
        resetStreaks, isPomodoro, setPomodoro, ModesStyles, forceLongBreak, reverseForced
    }
    return(
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    )
}