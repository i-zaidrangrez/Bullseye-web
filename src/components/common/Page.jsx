import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Page = () => {
  const BlockRef = useRef();
  const BlockRef2 = useRef();
  const Location = useLocation().pathname;
  console.log(Location);

  useGSAP(() => {
    gsap.set(BlockRef.current.parentElement, {
    opacity: 1
  });
    gsap.set(BlockRef.current.children, {
      yPercent: 0,
    });

    gsap.set(BlockRef2.current.children, {
      yPercent: 0,
    });
    const tl = gsap.timeline();

    tl.from(
      BlockRef.current.children,
      {
        yPercent: -100,
        duration: 1,
        stagger: -0.15,
        ease: "power4.inOut",
      },
      0,
    )

      .from(
        BlockRef2.current.children,
        {
          yPercent: 100,
          duration: 1,
          stagger: -0.15,
          ease: "power4.inOut",
        },
        0,
      )

      .to(
        BlockRef.current.children,
        {
          yPercent: -100,
          duration: 1,
          stagger: 0.15,
          ease: "power4.inOut",
        },
        "+=0.5",
      )

      .to(
        BlockRef2.current.children,
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.15,
          ease: "power4.inOut",
        },
        "<",
      );
  }, [Location]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden pointer-events-none">
      {/* // <div className='fixed inset-0 z-40 bg-red-500 flex flex-col overflow-hidden'> */}
      <div ref={BlockRef} className="flex flex-wrap z-20 h-[50%]">
        <div className="bg-black h-full w-[20%] border"></div>
        <div className="bg-black h-full w-[20%] border"></div>
        <div className="bg-black h-full w-[20%] border"></div>
        <div className="bg-black h-full w-[20%] border"></div>
        <div className="bg-black h-full w-[20%] border"></div>
      </div>
      <div ref={BlockRef2} className="flex flex-wrap h-[50%] z-20">
        <div className="bg-black h-full w-[20%]  border"></div>
        <div className="bg-black h-full w-[20%]  border"></div>
        <div className="bg-black h-full w-[20%]  border"></div>
        <div className="bg-black h-full w-[20%]  border"></div>
        <div className="bg-black h-full w-[20%]  border"></div>
      </div>
    </div>
    // {/* // </div> */}
  );
};

export default Page;
