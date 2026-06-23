import React from 'react'
import Video from '../components/Home/Video'
import HeroText from '../components/Home/HeroText'
import HeroBottom from '../components/Home/HeroBottom'
import Logo from '../components/Home/Logo'
import Menu from '../components/Home/Menu'
import Page from '../components/common/Page'

const Home = () => {
  return (

    <div className='h-screen relative overflow-hidden'>
        <div className='relative'>
             <Video/>
        </div>
        <div className='absolute top-10 font-Smooch text-center left-[28%]'>
            <HeroText/>
        </div>
        <div className='absolute top-4 left-5 font-Smooch text-center '>
            <Logo/>
        </div>
        <div className='absolute top-4 right-5 font-Smooch text-center'>
            <Menu/>
        </div>
        <div className='h-full absolute top-[90%] pt-2 overflow-hidden -mt-12 w-full bg-black'>
            <HeroBottom/>
        </div>
    </div>
  )
}

export default Home