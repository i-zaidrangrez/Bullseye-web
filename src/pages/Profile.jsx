import React, { useRef } from "react";
import ProfileText from "../components/Profile/ProfileText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Profile = () => {

  const ImageDivRef = useRef()
  const ImageRef = useRef()
  const Images = [
    'https://i.pinimg.com/736x/12/20/57/1220573cb2d295b1ea6fa3fce540f85c.jpg',
    'https://i.pinimg.com/736x/44/ce/3b/44ce3b9e91c478c0374131028ae06636.jpg',
    'https://i.pinimg.com/736x/2a/c3/b1/2ac3b137467d20f25d20b9814024ee27.jpg',
    'https://i.pinimg.com/736x/1e/90/9c/1e909c7b0051c4ad90096cb659606bf6.jpg',
    'https://i.pinimg.com/736x/c5/15/e9/c515e9a367fd62d86be4844de9d75c7a.jpg',
    'https://i.pinimg.com/736x/48/89/97/488997d78b65fcfe75657709072004f9.jpg',
    'https://i.pinimg.com/736x/34/29/1a/34291a5eedf3fa7f6327192ac55a36c7.jpg',
    'https://i.pinimg.com/736x/56/c4/4d/56c44d512a9ae64f620adfeb02dad036.jpg',
    'https://i.pinimg.com/736x/c1/f2/ef/c1f2ef0936eda772b2e4b6005e94961e.jpg',
    'https://i.pinimg.com/736x/64/32/1a/64321ab0be90e0d54325f2b37899ef4b.jpg',
    'https://i.pinimg.com/736x/2f/18/4e/2f184e55fa6609f4f831af7b042d4cff.jpg',
    'https://i.pinimg.com/1200x/b0/c0/f5/b0c0f54c5d91e6494eb3d39491593043.jpg',
  ]
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to(ImageDivRef.current,{
      scrollTrigger:{
        trigger : ImageDivRef.current,
        start : 'top 32%',
        end : 'top -35%',
        pin : true,
        scrub :1,
        onUpdate:(elem)=>{
          const imageIndex = Math.round(elem.progress * (Images.length - 1))
          ImageRef.current.src = Images[imageIndex]
        }
      }
    })
  })

  return (
    <div className="h-[200vh] relative">
      <div className="z-40">
        <ProfileText/>
      </div>
      <div ref={ImageDivRef} className="bg-white h-70 w-70 absolute top-[16%] left-[10%] z-10 rounded-2xl overflow-hidden">
        <img ref={ImageRef} className="h-full w-full" src="https://i.pinimg.com/736x/12/20/57/1220573cb2d295b1ea6fa3fce540f85c.jpg" alt="" />
      </div>
    </div>
  );
};

export default Profile;
