import React, { useContext, useState } from 'react'
import { TimerContext } from './TimerContext'

export default function EditingDiv({changecontent, content, divclass, style, maxlength, minlength, type}) {
    const {isTyping, setIsTyping} = useContext(TimerContext);

    //yes, i know, 'why not pass these functions as arrow function inside the return component' you may ask me,
    //the reason is that, if we do so, the same arrow function will be reloaded over and over again on every
    //load of the component.

    function editDiv(){
        setIsTyping(true)
        console.log('typing')
    }
    function editStop(){
        setIsTyping(false)
        console.log('not typing')
    }
    function pressEnter(event){
        if (event.key === 'Enter'){
            setIsTyping(false)
        }
    }
  return (
    isTyping ? <input className={divclass} autoFocus defaultValue={content} onBlur={editStop} 
    onChange={(e) => {changecontent(e.target.value)}} onKeyDown={pressEnter} maxLength={maxlength}
    style={style} type={type} minLength={minlength}
    ></input> :
    <div className={divclass} style={style} onDoubleClick={editDiv}>{content}</div>
  )
}
