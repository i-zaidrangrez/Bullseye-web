import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const HeroBottom = () => {
  const ButtonRef = useRef(null)
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    gsap.to(ButtonRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        navigate(path)
      }
    })
  }

  useGSAP(() => {
    gsap.from(ButtonRef.current.children[0], {
      x: -200,
      opacity: 0,
      duration: 0.5,
      delay: 3.5
    })

    gsap.from(ButtonRef.current.children[1], {
      x: 200,
      opacity: 0,
      duration: 0.5,
      delay: 3.5
    })
  })

  return (
    <div
      ref={ButtonRef}
      className='text-white items-center justify-center flex gap-5'
    >
      <button
        onClick={() => handleNavigate('/profile')}
        className='text-[8vh] border-2 border-white rounded-full px-10 py-2 hover:text-red-600 hover:border-red-600 font-Oops'
      >
        Profile
      </button>

      <button
        onClick={() => handleNavigate('/crimes')}
        className='text-[8vh] border-2 border-white rounded-full px-10 py-2 hover:text-red-600 hover:border-red-600 font-Oops'
      >
        Crimes
      </button>
    </div>
  )
}

export default HeroBottom