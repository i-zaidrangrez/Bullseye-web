import React from 'react'
import video from '../../../public/intro.mp4'

const Video = () => {
  return (
    <div className='h-full w-full '>
        <video className='object-fill h-full w-full -mt-7 pb-12' autoPlay muted loop src={video}></video>
    </div>
  )
}

export default Video