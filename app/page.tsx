'use client'
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from "./components/About";
import Services from "./components/Services";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import { useEffect, useState } from "react";

export default function Home() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(()=>{
  //   if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
  //     setIsDarkMode(true)
  //   }else{
  //     setIsDarkMode(false)
  //   }
  // },[])

  // useEffect(() => {
  //   const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   const theme = localStorage.theme;
  
  //   if (theme === 'dark' || (!('theme' in localStorage) && isSystemDark)) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);
  
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  //   if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);
  

  // useEffect(()=>{
  //   if(isDarkMode){
  //     //adds dark to html tag
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //   }else{
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = 'light';
  //   }
  // },[isDarkMode])

  return (
    <>
    <Navbar 
    // isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
    />
    <Header />
    <About />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
