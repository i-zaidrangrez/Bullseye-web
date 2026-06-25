import React, { useRef, useState } from "react";
import Video from "../components/Home/Video";
import HeroText from "../components/Home/HeroText";
import HeroBottom from "../components/Home/HeroBottom";
import Logo from "../components/Home/Logo";
import Menu from "../components/Home/Menu";
import Page from "../components/common/Page";
import { Cross, X } from "lucide";
import { RiCloseLargeLine } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [menuPanel, setMenuPanel] = useState(false);
  const [animatedProfilePanel, setAnimatedProfilePanel] = useState(false);
  const [animatedCrimesPanel, setAnimatedCrimesPanel] = useState(false);
  const [animatedAboutPanel, setAnimatedAboutPanel] = useState(false);
  const [animatedContactPanel, setAnimatedContactPanel] = useState(false);
  const animationRef = useRef()

  useGSAP(()=>{
    gsap.from(animationRef.current,{
        opacity:0,
        x:200,
        repeat : 6,
        duration:3,
        delay:3,
    })
  })

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="relative z-10">
        <Video />
      </div>
      <div
        className={`absolute h-screen bg-black w-full top-0 left-0 z-30  ${menuPanel ? "translate-x-0" : "translate-x-[100%]"} duration-500`}
      >
        <div>
          <div
            onClick={() => {
              setMenuPanel(false);
            }}
            className="cursor-pointer fixed top-5 right-5 px-5 text-[15vh] text-white "
          >
            <RiCloseLargeLine size={80} />
          </div>
          <div className="flex items-center h-screen w-full justify-center">
            <div className="h-6/10 w-full text-white">
              <div
                onMouseEnter={(e) => {
                  setAnimatedProfilePanel(true);
                }}
                onMouseLeave={(e) => {
                  setAnimatedProfilePanel(false);
                }}
                className="w-full h-1/4  flex items-center justify-center border-2"
              >
                {animatedProfilePanel ? (
                  <div className="h-full w-full bg-green-500">
                    <h1 ref={animationRef} className="text-[10vh] flex items-center justify-center gap-5">I AM ONE OF THE GOOD GUYS <span className="h-full w-1/5 flex items-center justify-center gap-5"><img className="h-20 w-20 rounded-2xl"  src="https://i.pinimg.com/736x/6a/3c/f1/6a3cf111d10b1a8fa3c00d9f264ac24a.jpg" alt="" />POSER</span></h1>
                  </div>
                ) : (
                  <h1 className="text-[10vh]">PROFILE</h1>
                )}
              </div>
              <div
                onMouseEnter={(e) => {
                  setAnimatedCrimesPanel(true);
                }}
                onMouseLeave={(e) => {
                  setAnimatedCrimesPanel(false);
                }}
                className="w-full h-1/4  flex items-center justify-center border-2"
              >
                {animatedCrimesPanel ? (
                  <div className="h-full w-full bg-red-500"></div>
                ) : (
                  <h1 className="text-[10vh]">CRIMES</h1>
                )}
              </div>
              <div
                onMouseEnter={(e) => {
                  setAnimatedAboutPanel(true);
                }}
                onMouseLeave={(e) => {
                  setAnimatedAboutPanel(false);
                }}
                className="w-full h-1/4  flex items-center justify-center border-2"
              >
                {animatedAboutPanel ? (
                  <div className="h-full w-full bg-blue-500"></div>
                ) : (
                  <h1 className="text-[10vh]">ABOUT</h1>
                )}
              </div>
              <div
                onMouseEnter={(e) => {
                  setAnimatedContactPanel(true);
                }}
                onMouseLeave={(e) => {
                  setAnimatedContactPanel(false);
                }}
                className="w-full h-1/4  flex items-center justify-center border-2"
              >
                {animatedContactPanel ? (
                  <div className="h-full w-full bg-yellow-500"></div>
                ) : (
                  <h1 className="text-[10vh]">CONTACT</h1>
                )}
              </div>
              <div className="absolute bottom-2 right-[45%] text-red-500">
                DON'T BE A POSER
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-15 font-Smooch text-center left-[28%] z-20">
        <HeroText />
      </div>
      <div className="absolute top-4  left-5 font-Smooch text-center z-20 ">
        <Logo />
      </div>
      <div
        className="absolute top-4  right-5 font-Smooch text-center z-20"
        onClick={() => {
          setMenuPanel(true);
          console.log(menuPanel);
        }}
      >
        <Menu />
      </div>
      <div className="h-full absolute top-[90%] pt-2 overflow-hidden -mt-12 w-full bg-black z-20">
        <HeroBottom />
      </div>
    </div>
  );
};

export default Home;
