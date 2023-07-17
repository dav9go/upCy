"use client";
//Hooks
import { useEffect, useRef } from "react";
//GSAP
import { gsap } from "gsap";
//Components
import FloatingMenu from "@/components/FloatingMenu";
import Subheader from "@/components/Subheader";

export default function Home() {
  return (
    <div className="h-screen">
      <header>
        <div className="flex items-center justify-center font-bold">
          <h1 className="flex leading-none text-[15.35vw]">
            <span>Vision</span>
            <span>Design</span>
          </h1>
        </div>
        <Subheader />
      </header>
      <main></main>
      <footer>
        <FloatingMenu />
      </footer>
    </div>
  );
}
