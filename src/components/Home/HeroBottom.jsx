import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const HeroBottom = () => {
    const ButtonRef = useRef()
    console.log(ButtonRef)

    useGSAP(function(){
        gsap.from(ButtonRef.current.children[0],{
            x: -200,
            opacity: 0,
            duration : 0.5,
            delay : 3.2,
            stagger : 1
        })
        gsap.from(ButtonRef.current.children[1],{
            x: 200,
            opacity: 0,
            duration : 0.5,
            delay : 3.2,
            stagger : 1
        })
    })

  return (
    <div ref={ButtonRef} className='text-white items-center justify-center flex gap-5'>
        <Link className='text-[8vh] border-2 border-white rounded-full px-10 py-2 hover:text-red-600 hover:border-red-600 hover:text-[9vh] font-Oops' to='/profile'>Profile</Link>
        <Link className='text-[8vh] border-2 border-white rounded-full px-10 py-2 hover:text-red-600 hover:border-red-600 hover:text-[9vh] font-Oops' to='/crimes'>Crimes</Link>
    </div>
  )
}

export default HeroBottom