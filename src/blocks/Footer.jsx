/* eslint-disable react/prop-types */
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import pint from "../assets/images/icon-pinterest.svg";
import tt from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo.svg";


function Link({text}) {
    return (
        <div className="">
            <a
                href="#"
                className="flex flex-col items-center group gap-1"
            >
                {text}
                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
            </a>
        </div>
    )
}

function IconLink({img}) {
    return (
        <span>
            <img
                src={img}
                alt=""
                className="border-b-white py-2 hover:border-b-2"
            />
        </span>
    )
}

function Footer() {
  return (
    <footer className="bg-black w-full p-5 flex flex-col justify-between items-center sm:flex-row md:px-32">
        <div className="py-5">
            <img
                src={logo}
                alt=""
                className="w-32 m-auto py-5 sm:ml-0"
            />
            <div className="flex flex-col sm:flex-row gap-5 capitalize font-fontAlata text-sm text-white justify-center items-center">
                {
                    [
                        "About",
                        "Careers",
                        "Events",
                        "Products",
                        "Support"
                    ].map(el=><Link text={el} key={el} />)
                }
            </div>
        </div>
        <div>
            <div className="flex justify-center sm:justify-end gap-5 py-5">
                {[fb, tt, pint, insta].map(el=><IconLink img={el} key={el} />)}
            </div>
            <div className="text-darkGray text-sm text-center">
                © 2021 Loopstudios. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer