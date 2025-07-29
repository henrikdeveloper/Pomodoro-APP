import React, { useState } from 'react'

export default function EditingDiv({changecontent, content, divclass, style, maxlength, minlength, type}) {
    const [isEditing, setEditing] = useState(false)

    function editDiv(){
        setEditing(true)
    }
    function editStop(){
        setEditing(false)
    }
    function pressEnter(event){
        if (event.key === 'Enter'){
            editStop()
        }
    }
  return (
    isEditing ? <input className={divclass} autoFocus defaultValue={content} onBlur={editStop} 
    onChange={(e) => {changecontent(e.target.value)}} onKeyDown={pressEnter} maxLength={maxlength}
    style={style} type={type} minLength={minlength}
    ></input> :
    <div className={divclass} style={style} onDoubleClick={editDiv}>{content}</div>
  )
}
