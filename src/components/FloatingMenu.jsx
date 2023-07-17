"use client";
//NEXTJS
import Image from "next/image";
import Link from "next/link";

export default function FloatingMenu() {
  const burgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <div className="fixed flex gap-10 py-5 px-8 bottom-10 left-1/2 transform -translate-x-1/2 h-[100px] w-[800px] max-w-[90%] bg-vision-gray rounded-[20px]">
      <div className="flex items-center justify-center">{burgerIcon}</div>
      <div className="flex gap-5 flex-1 h-full font-semibold">
        <Link
          className="flex-1 flex justify-center items-center rounded-[20px] bg-white text-vision-green border border-vision-green"
          href="#"
        >
          Home
        </Link>
        <Link
          className="flex-1 flex justify-center items-center rounded-[20px] bg-vision-dark-gray"
          href="#"
        >
          Product
        </Link>
        <Link
          className="flex-1 flex justify-center items-center rounded-[20px] bg-vision-dark-gray"
          href="#"
        >
          About Us
        </Link>
        <Link
          className="flex-1 flex justify-center items-center rounded-[20px] bg-vision-dark-gray"
          href="#"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
