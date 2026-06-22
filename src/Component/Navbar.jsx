import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {
  useGSAP(()=>{
    gsap.from("#logo",{
      x:200,
      opacity:0,
      duration:0.5
    })
    gsap.from('nav h4',{
      y:80,
      opacity:0,
      duration : 0.4,
      stagger:0.3
    },[])
  })

  return (
    <div className='h-1/10 w-full  flex items-cente place-content-between py-5 px-10 bg-black text-white'>
        <h1 id='logo'  className=' font-Oops text-4xl flex hover:text-[rgb(8,_0,_250)] duration-500 hover:cursor-crosshair hover:scale-105'>
            <img src="https://i.pinimg.com/736x/5e/da/59/5eda5970d2cba59bb492112bcd05b34a.jpg" className='w-10 h-9 object-cover' alt="" /> 
            Bullseye
        </h1>
        <nav className='flex font-Smooch text-3xl gap-10 font-bold'>
            <h4 className='hover:text-red-500 hover:-mt-1 duration-200 cursor-pointer '>Profil</h4>
            <h4 className='hover:text-red-500 hover:-mt-1 duration-200 cursor-pointer '>Crimes</h4>
            <h4 className='hover:text-red-500 hover:-mt-1 duration-200 cursor-pointer '>Ability</h4>
            <h4 className='hover:text-red-500 hover:-mt-1 duration-200 cursor-pointer '>Intrest</h4>
        </nav>
    </div>
  )
}

export default Navbar