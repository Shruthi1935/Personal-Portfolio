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
//import logo from '/src/assets/SYLogo.svg';

import { SparklesCore } from '/Users/yshru/WebsiteTailwindVite/my-project/components/sparkles.jsx';
import { FlipWords } from "/Users/yshru/WebsiteTailwindVite/my-project/components/flip-words.jsx";
// import { LampContainer } from "/Users/yshru/WebsiteTailwindVite/my-project/components/lamp.jsx";
// import { FloatingNav } from "/Users/yshru/WebsiteTailwindVite/my-project/components/floating-navbar.jsx";
// import { Me } from "/Users/yshru/WebsiteTailwindVite/my-project/components/moreAboutMe.jsx";

import { FaGithub, FaLinkedin, FaFigma, FaPython, FaHtml5, FaReact, FaNodeJs, FaNpm, FaGit} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql, SiVite, SiCplusplus, SiJavascript, SiNotion } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// still need sql icon

import { cn } from "/Users/yshru/WebsiteTailwindVite/my-project/utils/cn5.js";
//import { BentoGrid, BentoGridItem } from "/Users/yshru/WebsiteTailwindVite/my-project/components/bento-grid.jsx";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn} from "@tabler/icons-react";



export function App() {
  {/* Any usestates or arrays here */}
  const words = ["Hello,", "Hola,", "नमस्ते,", "안녕하세요,", "హలో,"];
  const words_2 = ["University of Houston", "Computer Science", "Mathematics"];

  const Skeleton = () => (
    <div className="flex w-full h-full rounded-xl border border-transparent bg-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const IconBG = ({ children }) => (
    <div className="flex p-4 w-[65px] h-[65px] items-center justify-center radial-gradient rounded-full transform hover:-translate-y-2 duration-300 shadow-2xl shadow-[#ce9090]">
      {children}
    </div>
  );

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
                <a href="#Skills" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-black">
                  Projects
                </a>
                <a href="#Skills" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-black">
                  Skills
                </a>
              </div>
              {/* Website Name */}
              <a href="#Hero" className="font-extrabold text-xl py-3 px-12 text-black text-center">
                SHRUTHI <br /> YENAMAGANDLA
              </a>
              {/* Right side buttons */}
              <div className="flex flex-row items-center space-x-5">
                <a href="#About" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-black">
                  About
                </a>
                <a href="#Socials" className="py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-black">
                  Socials
                </a>
              </div>
              {/* Contact button */}
              <a href="#Contact" className="font-extrabold py-2 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-black border border-black rounded-3xl ml-auto shadow-2xl shadow-[#ffffff]">
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
                className="tracking-wider text-[#6C372E] text-center"
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

        <section id="About">
          <div className="relative mt-[100px]">
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
                  className="font-medium text-[#6C372E] text-[95px] text-shadow ml-[15%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I'm
                </motion.span>
                <motion.span
                  className="font-medium text-[#6C372E] text-[95px] text-shadow ml-[25%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Shruthi
                </motion.span>
                <motion.span
                  className="font-medium text-[#6C372E] text-[95px] text-shadow ml-[36%]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Yenamagandla
                </motion.span>
                <motion.span
                  className="font-medium text-[#6C372E] text-[25px] text-shadow ml-[38%] italic"
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
                    <p className="text-lg text-[#6C372E] font-semibold tracking-widest leading-wide h-[460px] w-[400px]">
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
                      to, each representing a token of my growth and experience fostered through hardwork and amazing professors.
                      Click down below to access my 
                      <span className="hover:bg-[#ffd7d4] p-1 rounded-md">resume</span> right here!
                    </p>
                    <a href={resumeSY} target="_blank" rel="noopener noreferrer" className="text-lg bg-gradient-to-tr from-[#ffc7bd] via-[#ffe1df] to-[#ffc7bd] py-3 px-16 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#6C372E] font-bold shadow-2xl shadow-[#b17a7a] mx-auto text-center">
                      Download My Resume
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>



        <section id="Skills">
          <div class="relative mt-[150px] w-full h-screen bg-cover bg-center bg-[url('/Users/yshru/WebsiteTailwindVite/my-project/src/assets/bg2.png')]">
            <div className="flex flex-col space-y-[440px]">
              <motion.span
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 5, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                <div className="font-medium text-black text-[90px] text-center">SKILLS</div>
              </motion.span>
              
              <motion.span
                  initial={{ y: 250, opacity: 0 }}
                  whileInView={{ y: 5, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                <div className="font-medium text-black text-[160px] text-center">PROJECTS</div>
              </motion.span>
            </div>
            
            <motion.span
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 5, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
              <div className="flex flex-col">
                <div className="absolute inset-0 mt-[185px] flex flex-row space-x-8 text-[40px] justify-center text-[#FFE0DA]">
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
                <div className="absolute inset-0 top-1/4 mt-[60px] flex flex-row space-x-8 text-[40px] justify-center text-[#FFE0DA]">
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


        <section id="Projects"> 
          <div className="flex h-screen w-full items-center justify-center mt-12 pl-44 pr-44">
            <div className="grid h-full w-full grid-cols-7 grid-rows-10 gap-5">
              <div className="bg-[#FFF6F4] col-span-4 row-span-5 flex justify-center items-center">1

              </div>
              <div className="bg-[#FFF6F4] col-span-3 row-span-3 flex justify-center items-center">2

              </div>

              <div className="bg-[#FFF6F4] col-span-2 row-span-2 flex justify-center items-center">
                <div className="flex flex-row space-x-3 pr-16">
                  <a href="https://github.com/Shruthi1935" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-6xl text-[#000000] hover:text-[#333] hover:-translate-y-1 duration-400 duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/shruthi-yenamagandla-23883428b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-6xl text-[#000000] hover:text-[#0e76a8] hover:-translate-y-1 duration-400 duration-200" />
                  </a>
                </div>
              </div>

              <div className="bg-[#FFF6F4] col-span-1 row-span-2 flex justify-center items-center">4

              </div>

              <div className="bg-[#FFF6F4] col-span-3 row-span-2 flex justify-center items-center">3
              </div>
              <div className="bg-[#FFF6F4] col-span-4 row-span-5 flex justify-center items-center">2
              </div>
              <div className="bg-[#FFF6F4] col-span-3 row-span-3 flex justify-center items-center">1
              </div>

            </div>
          </div>
        </section>


        {/* CONTACT */}
        <section id="Contact">
          <div className="flex flex-row space-x-16 mt-[150px] pb-16 min-w-screen bg-gradient-to-tr from-[#ffc7bd] via-[#ffe3e1] to-[#ffc7bd] items-center justify-center">
            
            <div className="flex-col space-y-16">
              <div className="mt-16 font-medium text-[#6C372E] text-[60px] text-center"> Let's Get in Touch! </div>
              <form className="flex flex-col bg-[#ffffff] p-14">
                <div className="flex flex-col space-y-8">
                  <div className="flex flex-row space-x-16">
                    <input type="text" name="name" placeholder="Full Name" className="p-2 border-b border-[#6C372E]" />
                    <input type="tel" name="phone" placeholder="Phone Number" className="p-2 border-b border-[#6C372E]" />
                  </div>
                  <input type="email" name="email" placeholder="Email" className="p-2 border-b border-[#6C372E]" />
                  <textarea name="message" placeholder="Your Message" className="p-2 border border-[#6C372E]"></textarea>
                  <button 
                    type="submit" 
                    className="text-md bg-gradient-to-tr from-[#ffc7bd] via-[#ffe1df] to-[#ffc7bd] py-2 px-12 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#6C372E] font-bold shadow-2xl shadow-[#b17a7a] mx-auto text-center">
                    Send! 
                  </button>
                </div>
              </form>
            </div>

            <div className="font-medium text-[#6C372E] text-[60px] text-center"> hii

            </div>

          </div>
        </section>
        {/* CONTACT END */}



        {/* SOCIALS */}
        <section id="Socials">
          <div className="flex flex-col font-medium text-[#6C372E] mt-[150px]">
            <div className="flex pl-16 pt-4 pb-4 min-w-screen bg-gradient-to-b from-[#ffffff] to-[#FFD0C8] justify-between">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-2xl text-[#6C372E]" />
                <span className="text-[#6C372E]"> | 346 - 955 - 8255</span>
              </div>

              <div className="flex flex-row space-x-3 pr-16">
                <a href="https://github.com/Shruthi1935" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-4xl text-[#6C372E] hover:text-[#333] hover:-translate-y-1 duration-400 duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/shruthi-yenamagandla-23883428b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl text-[#6C372E] hover:text-[#0e76a8] hover:-translate-y-1 duration-400 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* SOCIALS END */}

      </div>
    </>
  );
}

export default App;
