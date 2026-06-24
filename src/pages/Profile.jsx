import React, { useRef } from "react";
import ProfileText from "../components/Profile/ProfileText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Profile = () => {

  const ImageRef = useRef()
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to(ImageRef.current,{
      scrollTrigger:{
        trigger : ImageRef.current,
        markers:true,
        start : 'top 32%',
        end : 'top -100%',
        pin : true
      }
    })
  })

  return (
    <div className="h-[200vh] relative">
      <div className="z-40">
        <ProfileText/>
      </div>
      <div ref={ImageRef} className="bg-white h-70 w-70 absolute top-[16%] left-[10%] z-10 rounded-2xl overflow-hidden">
        <img className="h-full w-full" src="https://i.pinimg.com/736x/12/20/57/1220573cb2d295b1ea6fa3fce540f85c.jpg" alt="" />
      </div>
    </div>
  );
};

export default Profile;
