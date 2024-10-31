/* eslint-disable react/prop-types */
import { useState } from "react";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import setBackground from "../utils/setBackground";

function Link({text, isClicked}) {
    return (
        <div className="">
            <a
                href="#"
                className={`${ // 
                    isClicked ? "items-start" : ""
                }flex flex-col items-center group mb-1`}
                // This makes a single class, 'items-startflex', when isClicked===true.
                // Seems unintentional, but works fine anyway.
            >
                {text}
                {!isClicked && (
                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                )}
            </a>
        </div>
    )
}

function Heading() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <header
            className={setBackground("image-hero") + " bg-cover bg-no-repeat p-5 md:px-32"}
            style={{}}
        >
            <nav
                className={`${
                    isClicked
                        ? "absolute bg-black sm:bg-transparent inset-0 px-5 py-[44px] w-full h-full z-[9999]"
                        : ""
                } py-6 flex justify-between items-start`}
            >
                <img src={logo} alt="" className={`w-32`} />
                <button
                    className={`sm:hidden`}
                    onClick={() => {
                        setIsClicked((prev) => !prev);
                    }}
                >
                    {isClicked ? (
                        <img src={close} alt="" />
                    ) : (
                        <img src={hamburger} alt="" />
                    )}
                </button>
                <div
                    className={`${
                        isClicked ? "flex" : "hidden"
                    } sm:flex sm:flex-row sm:justify-end sm:top-10 sm:text-lg sm:right-5 md:right-32 sm:capitalize gap-5 flex-col text-white uppercase absolute left-8 top-56 z-50 text-3xl font-bold font-fontJosefin`}
                >
                    {
                        [
                            "About", 
                            "Careers", 
                            "Events", 
                            "Products", 
                            "Support"
                        ].map(el=>(
                            <Link
                                isClicked={isClicked}
                                text={el}
                                key={el}
                            />
                        ))
                    }
                </div>
            </nav>
            <div className="ring-2 px-7 py-5 ring-white font-fontJosefin uppercase text-4xl lg:text-6xl lg:w-1/2 2xl:w-1/3 text-start text-white my-40">
                Immersive experiences that deliver
            </div>
        </header>
    )
}

export default Heading