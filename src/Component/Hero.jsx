import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Hero = () => {
  
  useGSAP(()=>{
    gsap.from('#here',{
      opacity:-2,
      duration : 2,
    })
    gsap.from('#aimImage',{
      scale : 4,
      duration : 1.5,
      opacity :-5,
    })
    gsap.from('#aim',{
      x:-100,
      duration:1.5
    })
    gsap.from('#about',{
      opacity:-5,
      y:20,
      duration : 3,
      stagger:0.5,
    })
    gsap.from('#goodguy',{
      y:100,
      opacity:-5,
      duration :4,
    })
  },[])

  const [isGoodGuy, setIsGoodGuy] = useState(true)

  return (
    <div className="bg-[rgb(0, 19, 224)] h-9/10 flex items-center justify-center">
      <div className=" w-6/10 h-full flex flex-col  p-10 font-semibold gap-3">
        <div className="display flex relative">
          <h1 className="font-Smooch text-9xl" id="aim">AIM RIGHT</h1>
          <img
          id="aimImage"
            className="w-50 absolute left-55/100 top-2/10 hover:scale-110 duration-300 hover:rounded-2xl"
            src="https://i.pinimg.com/736x/c6/b6/f0/c6b6f0c36981c25a7cc57c617eaa8d78.jpg"
            alt=""
          />
        </div>
        <span className="font-Oops text-9xl text-red-600 hover:text-blue-950 duration-200 w-120" id="here">HERE !</span>

        <p className="text-3xl font-Smooch mt-10" id="about">
          Unlike many Marvel villains, Bullseye has no superhuman powers. His
          greatest strengths come from years of combat training, exceptional
          reflexes, incredible hand-eye coordination, and a ruthless mindset. He
          is highly intelligent, manipulative, and completely willing to kill
          without hesitation if it helps him achieve his goals.
        </p>
        <button id="goodguy" className="text-5xl mt-15 rounded-2xl duration-500 bg-blue-950  hover:text-black hover:bg-red-600 text-white py-3 font-Oops" >Absolutely a GOOD GUY</button>
      </div>
      <div className=" w-4/10 h-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/80/91/b3/8091b3bafa46fb03b1a72b0823eec160.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
