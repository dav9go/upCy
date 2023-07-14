"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const word = useRef(null);
  const word2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(word.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(word2.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.to(word.current, { y: "70.5%", duration: 2, delay: 1, ease: "expo" });
    gsap.to(word2.current, {
      y: "-69.5%",
      duration: 2,
      delay: 1,
      ease: "expo",
    });
  }, []);

  return (
    <main>
      <div className="h-screen bg-black">
        <div className="">
          <div className="flex items-center justify-center text-white text-[14vw] leading-none h-[300px] pb-10 overflow-hidden font-bold">
            <h1
              ref={word}
              className="flex flex-col self-end gap-10 transform translate-y-[5px]"
            >
              <span>Vision</span>
              <span>Vision</span>
              <span>Vision</span>
            </h1>
            <h2 ref={word2} className="flex flex-col self-start gap-10 ">
              <span>Design</span>
              <span>Design</span>
              <span>Design</span>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
