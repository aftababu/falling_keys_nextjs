import Image from "next/image";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggler";

const Header = () => {
  return (
    <header className="p-5 bg-[#DAD3C7] dark:bg-[#2A2A2A] font-semibold text-gray-600 dark:text-gray-200">
      <nav className="flex justify-between items-center gap-5 ">
        <Link href="/" className="text-3xl">
          Home
        </Link>
        <div className="flex gap-5 items-center justify-between">
          <Link href="/about">Log in</Link>
          <Link href="https://github.com/" target="_blank">
           <Image src={"/github.svg"} alt="GitHub" width={30} height={30} />
          </Link>
        <DarkModeToggle/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
