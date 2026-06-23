import React from 'react'
import video from '../../../public/intro.mp4'

const Video = () => {
  return (
    <div className='h-full w-full '>
        <video className='object-cover h-screen w-full -mt-7 pb-12' autoPlay muted loop src={video}></video>
    </div>
  )
}

export default Video