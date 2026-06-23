import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Menu = () => {
    const MenuRef = useRef()
    useGSAP(function(){
        gsap.from(MenuRef.current , {
            opacity:0,
            duration :1,
            delay:3.5
        })
    })
  return (
    <div ref={MenuRef} className='text-white text-xl font-bold px-2 rounded-2xl cursor-pointer hover:bg-red-600'>Menu</div>
  )
}

export default Menu