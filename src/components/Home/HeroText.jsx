import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


const HeroText = () => {
    const TextRef = useRef()

    useGSAP(function(){

        const tl = gsap.timeline()
        tl.from(TextRef.current.children , {
            opacity:0,
            stagger:1.5,
            duration:3,
            delay : 3
        })
    })
  return (
    <div ref={TextRef} className='text-[20vh] leading-[20vh] flex flex-col items-center justify-center text-white font-bold uppercase'>
        <div>No conscience <br />guides me,</div>
        <div>only <span className='text-red-600'>precision</span></div>
    </div>
  )
}

export default HeroText