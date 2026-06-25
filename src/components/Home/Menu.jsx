import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Menu = () => {
    const MenuRef = useRef()
    useGSAP(function(){
        gsap.from(MenuRef.current , {
            opacity:0,
            duration :1,
            delay:3.8
        })
    })
  return (
    
    <div>
      <div ref={MenuRef} onMouseEnter={(e)=>{e.target.style.backgroundColor = "red"}} onMouseLeave={(e)=>{e.target.style.backgroundColor = ""}} className='text-white text-xl font-bold px-2 rounded-2xl cursor-pointer'>Menu</div>
    </div>
  )
}

export default Menu