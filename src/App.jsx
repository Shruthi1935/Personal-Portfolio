"use client";
import './index.css';
import './App.css';

import React from "react";
import { delay, motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";

import profile1 from '/src/assets/1.jpeg';
import resumeSY from '/src/assets/resume.pdf';
import contact from '/Users/yshru/WebsiteTailwindVite/my-project/src/assets/Contact5.png'
import coogify from '/Users/yshru/WebsiteTailwindVite/my-project/public/assets/CoogifyMusic.jpg'
import portfolio from '/Users/yshru/WebsiteTailwindVite/my-project/public/assets/PersonalPortfolio.jpg'
import Swal from 'sweetalert2'
//import logo from '/src/assets/SYLogo.svg';

import { SparklesCore } from '/Users/yshru/WebsiteTailwindVite/my-project/components/sparkles.jsx';
import { FlipWords } from "/Users/yshru/WebsiteTailwindVite/my-project/components/flip-words.jsx";
// import { LampContainer } from "/Users/yshru/WebsiteTailwindVite/my-project/components/lamp.jsx";
// import { FloatingNav } from "/Users/yshru/WebsiteTailwindVite/my-project/components/floating-navbar.jsx";
// import { Me } from "/Users/yshru/WebsiteTailwindVite/my-project/components/moreAboutMe.jsx";

import { FaGithub, FaLinkedin, FaFigma, FaPython, FaHtml5, FaReact, FaNodeJs, FaNpm, FaGit, FaEnvelope} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql, SiVite, SiCplusplus, SiJavascript, SiNotion } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// still need sql icon

import { cn } from "/Users/yshru/WebsiteTailwindVite/my-project/utils/cn5.js";
//import { BentoGrid, BentoGridItem } from "/Users/yshru/WebsiteTailwindVite/my-project/components/bento-grid.jsx";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn} from "@tabler/icons-react";



export function App() 
{
  const words = ["Hello,", "Hola,", "नमस्ते,", "안녕하세요,", "హలో,"];
  const slides = [
   {
    url: coogify
   },
   {
    url: portfolio
   },
  ];

  const IconBG = ({ children }) => (
    <div className="flex p-4 w-[65px] h-[65px] items-center justify-center radial-gradient rounded-full transform hover:-translate-y-2 duration-300 shadow-xl shadow-[#ae7474]">
      {children}
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "23967d50-3be6-44b1-afb6-7971b65b89f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Pigeon Sent!",
        text: "Your email was sent to Shruthi sucessfully :)",
        icon: "success"
      });
    }
  };

  return (
    <>
      {/* Work here */}
      {/* Overall Page */}
      <div className="flex flex-col justify-center overflow-y-auto min-h-screen bg-[#FFE0DA]"> 

        {/* HEADER */}
        <section id="Header">
          <header className="sticky top-0 h-[80px] shadow-xl shadow-[#fff6f6] z-30 bg-[#ffe7e3] flex items-center">
            <div className="flex flex-row w-full justify-between items-center px-10">
              {/* Left side buttons */}
              <div className="flex flex-row items-center space-x-5 pl-[410px]">
                <a href="#Projects" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#421f18]">
                  Projects
                </a>
                <a href="#Skills" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#421f18]">
                  Skills
                </a>
              </div>
              {/* Website Name */}
              <a href="#Header" className="font-extrabold text-xl py-3 px-12 text-[#421f18] text-center">
                SHRUTHI <br /> YENAMAGANDLA
              </a>
              {/* Right side buttons */}
              <div className="flex flex-row items-center space-x-5">
                <a href="#About" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#421f18]">
                  About
                </a>
                <a href="#Contact" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#421f18]">
                  Socials
                </a>
              </div>
              {/* Contact button */}
              <a href="#Contact" className="font-extrabold py-2 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#421f18] border border-black rounded-3xl ml-auto shadow-2xl shadow-[#ffffff]">
                Contact
              </a>
            </div>
          </header>
        </section>
        {/* HEADER END */}

        {/* HERO */}
        <section id="Hero">
          <div className="relative">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={1.5}
                maxSize={3.0}
                particleDensity={100}
                className="w-[1510px] h-[750px]"
                particleColor="ffffff"
              />
          </div>
          <div className="absolute inset-0 mt-[80px] flex flex-col items-center justify-center min-w-full">
            <div className="flex flex-col space-y-28 pt-0">
              <motion.div
                className="tracking-wider text-[#6F3A32] text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 2.5, ease: "easeInOut" }}
              >
                <span className="relative text-[150px] right-[120px] text-shadow"> <FlipWords words={words}/></span> 
                <br />
                <span className="relative text-[90px] left-[120px] italic">nice to see you!</span>
              </motion.div>
            </div>
          </div>
        </section>
        {/* HERO END */}

        {/* ABOUT */}
        <section id="About">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 min-w-screen bg-gradient-to-tr from-[#ffc7bd] via-[#fde8e6] to-[#ffc7bd] shadow-2xl shadow-[#ffffff]"></div>
            </motion.div>

            <div className="flex flex-row justify-between space-x-8 h-screen">
              <div className="relative flex flex-col items-start justify-center space-y-1">
                <motion.span
                  className="font-medium text-[#421f18] text-[95px] text-shadow ml-[15%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I'm
                </motion.span>
                <motion.span
                  className="font-medium text-[#421f18] text-[95px] text-shadow ml-[25%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Shruthi
                </motion.span>
                <motion.span
                  className="font-medium text-[#421f18] text-[95px] text-shadow ml-[36%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Yenamagandla
                </motion.span>
                <motion.span
                  className="font-medium text-[#421f18] text-[25px] text-shadow ml-[38%] italic"
                  initial={{ opacity: 0, scale: 1 }}
                  transition={{ delay: 4, duration: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  Scroll down to view my work!
                </motion.span>
              </div>

              <div className="flex items-center justify-end pr-32 w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  transition={{ delay: 3.7, duration: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative flex flex-col space-y-6 bg-[#FFFFFF] p-14 rounded-md shadow-2xl shadow-[#b17a7a]">
                    <p className="text-lg text-[#421f18] font-semibold tracking-widest leading-wide h-[460px] w-[400px]">
                      <div className="">Hello,</div> <br/>
                      I'm a junior at the
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> University of Houston</span> majoring in
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> Computer Science</span> and minoring in
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> Mathematics</span>.
                      As you step into my world on this website, you will find my projects and other 
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> passion</span>
                      work evolved through my 
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> curiosity</span>.
                      I invite you to explore the projects I've dedicated my time and 
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> knowledge</span> 
                      to, each representing a token of my
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> growth</span> 
                      and 
                      <span className="hover:bg-[#ffe0de] p-1 rounded-md"> experience</span>  
                      fostered through hardwork and amazing professors.
                      Click down below to access my 
                      <span className="hover:bg-[#ffd7d4] p-1 rounded-md">resume</span> right here!
                    </p>
                    <a href={resumeSY} target="_blank" rel="noopener noreferrer" className="text-lg bg-gradient-to-tr from-[#ffc7bd] via-[#ffe1df] to-[#ffc7bd] py-3 px-16 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#421f18] font-bold shadow-2xl shadow-[#b17a7a] mx-auto text-center">
                      Download My Resume
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT END */}

        {/* SKILLS */}
        <section id="Skills">
          <div class="relative mt-[90px] w-full h-screen bg-cover bg-center bg-[url('/Users/yshru/WebsiteTailwindVite/my-project/src/assets/bg2.png')]">
            <div className="flex flex-col space-y-[500px]">
              <motion.span
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 5, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                <div className="font-medium text-[#421f18] text-[90px] text-center">SKILLS</div>
              </motion.span>
              
              <motion.span
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 5, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                <div className="font-medium text-[#421f18] text-[160px] text-center">PROJECTS</div>
              </motion.span>
            </div>
            
            <motion.span
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 5, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
              >
              <div className="flex flex-col">
                <div className="absolute inset-0 mt-[185px] flex flex-row space-x-8 text-[40px] justify-center text-[#FFF6F4]">
                  <IconBG> <FaPython className=""/> </IconBG>
                  <IconBG> <SiCplusplus className=""/> </IconBG>
                  <IconBG> <FaHtml5 className="" /> </IconBG>
                  <IconBG> <SiTailwindcss className=""/> </IconBG>
                  <IconBG> <SiJavascript className=""/></IconBG>
                  <IconBG> <SiTypescript className=""/> </IconBG>
                  <IconBG> <FaGit className=""/> </IconBG>
                  <IconBG> <SiMysql className=""/> </IconBG>
                  <IconBG> <FaReact className="" /> </IconBG>
                  <IconBG> <FaNodeJs className="" /> </IconBG>
                </div>
                <div className="absolute inset-0 top-1/4 mt-[60px] flex flex-row space-x-8 text-[40px] justify-center text-[#FFF6F4]">
                  <IconBG> <FaNpm className="" /> </IconBG>
                  <IconBG> <SiVite className=""/> </IconBG>
                  <IconBG> <FaGithub className="" /> </IconBG>
                  <IconBG> <FaFigma className="" /> </IconBG>
                  <IconBG> <SiNotion className=""/> </IconBG>
                </div>
              </div>
            </motion.span>
          </div>
        </section>
        {/* SKILLS END */}




        {/* PROJECTS */}
        <section id="Projects"> 
          <div className="flex flex-row items-center justify-center bg-[#FFF6F4] mb-32 mx-[185px]">
            <motion.span
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 5, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div 
                  style={{backgroundImage: `url(${slides[0].url})`, width: '750px', height: '500px'}} 
                  className="w-full h-full bg-center bg-cover duration-500">
                </div>
              </div>
            



            </motion.span>
          </div>        
        </section>
        {/* PROJECTS END */}




        {/* CONTACT */}
        <section id="Contact">
        <div className="flex flex-row space-x-4 min-w-screen min-h-screen bg-gradient-to-tr from-[#ffc7bd] via-[#ffe3e1] to-[#ffc7bd]">
          
          <form onSubmit={handleSubmit} className="min-h-screen flex flex-col bg-[#ffffff] p-32">
            <div className="flex flex-col space-y-24">
              <div className="text-[#6C372E] text-[25px]"> Send a pigeon! </div>
              <div className="flex flex-row space-x-32">
                <input required type="text" name="name" placeholder="Full Name" className="p-2 border-b border-[#6C372E]" />
                <input required type="tel" name="phone" placeholder="Phone Number" className="p-2 border-b border-[#6C372E]" />
              </div>
              <input required type="email" name="email" placeholder="Email" className="p-2 border-b border-[#6C372E]" />
              <textarea required name="message" placeholder="Your Message" className="p-2 border-b border-[#6C372E] h-10"></textarea>
              <button 
                type="submit" name="message"
                className="text-lg bg-gradient-to-tr from-[#ffc7bd] via-[#ffe1df] to-[#ffc7bd] py-3 px-16 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#6C372E] font-bold shadow-2xl shadow-[#935d5d] mx-auto text-center">
                Send! 
              </button>
            </div>
          </form>

          <div className="relative w-[800px] h-[800px] flex items-center justify-center">
            <img src={contact} alt="Profile Image 1" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex flex-col space-y-6 justify-center pl-36">
              <div className="text-[#6C372E] text-[75px]"> Just a <br/> Message Away </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4">
                  <FaPhone className="text-[20px] text-[#6C372E]" />
                  <span className="text-[#6C372E]"> 346 - 955 - 8255</span>
                </div>
                <div className="flex flex-row space-x-4">
                  <FaEnvelope className="text-[20px] text-[#6C372E]" />
                  <span className="text-[#6C372E]"> yshruthi.14@gmail.com </span>
                </div>
                <div className="flex flex-row space-x-4 text-[25px] text-[#6C372E]">
                  <a href="https://github.com/Shruthi1935" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-[#333] hover:-translate-y-1 duration-400 duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/shruthi-yenamagandla-23883428b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-[#0e76a8] hover:-translate-y-1 duration-400 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT END */}
      </div>
    </>
  );
}
export default App;
