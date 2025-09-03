import React from 'react'
import ProgressCircle from './ProgressCircle'

export default function PomodoroImage({ImgSrc}) {
  return (
      <ProgressCircle>
        <img src={ImgSrc} className='PomodoroImage_img'/>
      </ProgressCircle>
  )
}
