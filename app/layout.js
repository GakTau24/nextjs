"use client";
import { useState } from "react";
import "../styles/globals.css";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function RootLayout({ children }) {
  const [show, setShow] = useState(false);

  const handleNav = () => {
    setShow(!show);
  };
  return (
    <html>
      <head />
      <body>
        <nav className="p-3 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href={"/"}>
              <Image src={Logo} className="h-6 mr-3 sm:h-10" alt="logo" />
            </Link>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
              <div className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <Link href={"/"} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page">
                  Home
              </Link>
              <Link href={"/resep-makanan"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Resep Makanan
              </Link>
              <Link href={"/"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
              </Link>
              </div>
            </div>
            <div onClick={handleNav} className="block md:hidden">
            {show ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
            <div className={
                show
                  ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }>
                <div className="flex flex-col  mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <Link href={"/"} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
                    Home
                    </Link>
                    <Link href={"/resep-makanan"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Resep Makanan
                    </Link>
                    <Link href={"/"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                    </Link>
                </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
