import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import logoname from '@/assets/images/logoname.png';
import moon_icon from '@/assets/images/moon_icon.png';
import hamburger from '@/assets/images/hamburger.png';
import cross from '@/assets/images/cross.png';
import crosswhite from '@/assets/images/crosswhite.png';
import crosswhite2 from '@/assets/images/crosswhite2.png';
import newmoon from '@/assets/images/newmoon.png';

// type NavbarProps = {
//     isDarkMode: boolean;
//     setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Navbar = () => {
//const Navbar: React.FC<NavbarProps>=({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
        // sideMenuRef.current?.style.transform = 'translateX(-16rem)'
    }
    const closeMenu =() => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

    //if scroll past change bg effect.
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    {/* <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div> */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 ${isScroll ? "bg-white/50 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={logoname} alt=""  className='w-28 cursor-pointer mr-14' />
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm bg-opactiy-50"}`}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                <li><a className='font-Ovo' href="#services">Services</a></li>
                <li><a className='font-Ovo' href="#projects">Projects</a></li>
                <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
            </ul>

            <div className="flex items-center gap-4">

                {/* <button 
                // onClick={()=> setIsDarkMode(prev => !prev)}
                >
                    <Image src={newmoon} alt="moon" className="w-10" />
                </button> */}

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 
                py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact 
                    {/* <Image src={getAssetAsBlob.arrow_icon} */}
                    {/* alt ="" className='w-3' />  */}
                </a>
                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={hamburger} alt="" className='w-6' />
                </button>
            </div>

            {/* ------------- mobile menu ------------- */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
            w-64 z-50 h-screen bg-black text-white transition duration-500'>

                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={crosswhite2} alt="close" className="w-5 cursor-pointer" />
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </>
  );
};

export default Navbar;