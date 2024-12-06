"use client";
import { SERVICES } from "./config";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 fixed h-24 flex items-center flex-col">
      <div className="max-w-screen-xl flex lg:flex-row items-center justify-between mx-auto p-4 w-full">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={231}
          height={58}
          className="mr-3 w-auto h-auto"
          priority={true}
        />

        <div
          id="targetEl"
          className="items-center justify-between hidden md:hidden lg:order-1 lg:flex"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:space-x-5 md:space-x-4 md:mt-0 md:border-0 md:bg-white">
            {SERVICES.map((item, index) => (
              <span
                key={index}
                className={
                  index
                    ? "block py-2 pl-3 pr-4 text-[#222222] text-[13px] uppercase"
                    : "flex flex-center items-center py-2 pl-3 pr-4 text-white text-[13px] rounded-full uppercase bg-primary "
                }
                aria-current="page"
              >
                {item}
              </span>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
