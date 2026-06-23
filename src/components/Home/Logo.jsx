import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Logo = () => {
    const LogoRef = useRef()
    useGSAP(function(){
        gsap.from(LogoRef.current.children , {
            opacity:0,
            duration :1,
            delay:3.8
        })
    })
  return (
    <div ref={LogoRef} className='text-5xl'>
        <img className='h-15 rounded-full' src="https://i.pinimg.com/1200x/2c/ec/ad/2cecad10b05f50d519e7b7400d228d84.jpg" alt="Logo" />
    </div>
  )
}

export default Logo