"use client";
import React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";

import profile1 from '/src/assets/1.jpeg';
import resumeSY from '/src/assets/resume.pdf';
import logo from '/src/assets/SYLogo.svg';

import { SparklesCore } from '/Users/yshru/WebsiteTailwindVite/my-project/components/sparkles.jsx';
import { FlipWords } from "/Users/yshru/WebsiteTailwindVite/my-project/components/flip-words.jsx";
import { LampContainer } from "/Users/yshru/WebsiteTailwindVite/my-project/components/lamp.jsx";
import { FloatingNav } from "/Users/yshru/WebsiteTailwindVite/my-project/components/floating-navbar.jsx";
import { Me } from "/Users/yshru/WebsiteTailwindVite/my-project/components/moreAboutMe.jsx";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaGithub, FaLinkedin, FaFigma, FaPython, FaHtml5, FaReact, FaNodeJs, FaNpm, FaGit} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql, SiVite, SiCplusplus, SiJavascript, SiNotion, SiR } from 'react-icons/si'; // still need sql icon
import { FaPhone } from 'react-icons/fa';

export function App() {
  {/* Any usestates or arrays here */}
  const words = ["Hello,", "Hola,", "नमस्ते,", "안녕하세요,", "హలో,", "こんにちは," ];
  const words_2 = ["University of Houston", "Computer Science", "Mathematics"];

  return (
    <>
      {/* Work here */}
      {/* Overall Page */}
      <div className="flex flex-col justify-center overflow-y-auto min-h-screen bg-gradient-to-b from-[#ffd2ca] via-[#ffdcd6] to-[#fff1f1]"> 

        {/* HEADER */}
        <header className="sticky top-0 h-[80px] shadow-xl shadow-[#fff6f6] z-30 bg-[#ffe7e3] flex items-center">
          <div className="flex flex-row w-full justify-between items-center px-10">
            {/* Left side buttons */}
            <div className="flex flex-row items-center space-x-5 pl-[390px]">
              <button className="font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">
                Projects
              </button>
              <button className="font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">
                Skills
              </button>
            </div>
            {/* Website Name */}
            <div className=" text-xl py-3 px-12 text-[#6C372E] text-center">
              SHRUTHI <br /> YENAMAGANDLA
            </div>
            {/* Right side buttons */}
            <div className="flex flex-row items-center space-x-5">
              <button className="font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">
                About Me
              </button>
              <button className="font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">
                Socials
              </button>
            </div>
            {/* Contact button */}
            <button className="font-bold py-1 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E] border border-[#6C372E] rounded-3xl ml-auto">
              Contact
            </button>
          </div>
        </header>
        {/* HEADER END */}

        
        {/* INTRO */}
        <div className="relative">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={1.5}
              maxSize={3.0}
              particleDensity={100}
              className="w-[1530px] h-[750px]"
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
        {/* INTRO END */}
        

        {/* ABOUT ME */}
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        > 
          <div className="flex flex-col pt-16 space-y-1 mt-[180px]">
            <div className="flex flex-row items-center">
              {/* <div className="pl-16 text-[100px] text-[#6C372E]">About Me | <FlipWords words={words_2} className="items-center text-[40px]"/> </div> */}
              <div className="pl-16 text-[100px] text-[#6C372E]">About Me </div>
              </div>

            <div className="mt-64 flex flex-row space-x-24 min-w-screen bg-gradient-to-b from-[#ffffff] to-[#FFD0C8]">
              <div className="pt-20 pl-24 flex flex-col space-y-10">
                <div className="text-2xl text-[#6C372E] font-extrabold"> Hey There! </div>
                <p className="text-xl text-[#6C372E] tracking-widest leading-wide"> 
                  I'm a junior at the <span className="hover:bg-[#ffe0de] p-1 rounded-md"> University of Houston</span> majoring in <span className="hover:bg-[#ffe0de] p-1 rounded-md"> Computer Science</span> and minoring in <span className="hover:bg-[#ffe0de] p-1 rounded-md"> Mathematics</span>. 
                  As you step into my world on this website, you will find my projects and other passion work evolved through my curiosity. 
                  I invite you to explore the projects I've dedicated my time and knowledge to, 
                  each representing a token of my growth and experience fostered through hardwork and amazing professors.
                  Click down below to access my <span className="hover:bg-[#ffd7d4] p-1 rounded-md">resume</span> right here!
                </p> 
                {/* Buttons */}
                <div className="flex flex-row space-x-12 pt-8 justify-center">
                  {/*<a href={ Me } target="_blank" rel="noopener noreferrer" className="text-lg bg-gradient-to-br from-[#ffc7bd] via-[#ffdad7] to-[#ffc7bd] py-6 px-20 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tr-[100px] rounded-bl-[100px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                      More About Me
                    </a>*/}
                  <a href={ resumeSY } target="_blank" rel="noopener noreferrer" className="text-lg bg-gradient-to-tr from-[#ffc7bd] via-[#ffdad7] to-[#ffc7bd] py-6 px-20 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-2 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                      Download My Resume
                  </a>
                </div>
                {/* Buttons End*/}
              </div>
              <img src={ profile1 } alt="Profile Image 1" className="flex w-[700px] h-[580px]"/>
            </div>
          </div>
        </motion.div>
        {/* ABOUT ME END */}


        {/* Skills */}
        <div className="flex pt-8 mt-[150px] items-center justify-center">
          <motion.div
            className="tracking-wider text-8xl text-[#6C372E] font-medium text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 2.5,
            }}>
              <div className="flex p-16 bg-gradient-to-br from-[#ffcfcf] to-[#ffc4ba] shadow-xl rounded-[50px]">
                <div className="flex flex-col space-y-12 text-white text-7xl">
                  <div className="flex flex-row space-x-12">
                    <FaPython className="transform hover:-translate-y-1 duration-100" />
                    <SiCplusplus className="transform hover:-translate-y-1 duration-100"/>
                    <FaHtml5 className="transform hover:-translate-y-1 duration-100" />
                    <SiTailwindcss className="transform hover:-translate-y-1 duration-100"/>
                    <SiJavascript className="transform hover:-translate-y-1 duration-100"/>
                  </div>
                  <div className="flex flex-row space-x-12">
                    <SiTypescript className="transform hover:-translate-y-1 duration-100"/>
                    <FaGit className="transform hover:-translate-y-1 duration-100"/>
                    <SiMysql className="transform hover:-translate-y-1 duration-100"/>
                    <FaReact className="transform hover:-translate-y-1 duration-100" />
                    <FaNodeJs className="transform hover:-translate-y-1 duration-100" />
                  </div>
                  <div className="flex flex-row space-x-12">
                    <FaNpm className="transform hover:-translate-y-1 duration-100" />
                    <SiVite className="transform hover:-translate-y-1 duration-100"/>
                    <FaGithub className="transform hover:-translate-y-1 duration-100" />
                    <FaFigma className="transform hover:-translate-y-1 duration-100" />
                    <SiNotion className="transform hover:-translate-y-1 duration-100"/>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
        {/* Skills End */}

        {/* Contact Form */}
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-[150px]">
          <input type="hidden" name="access_key" value="23967d50-3be6-44b1-afb6-7971b65b89f8" />
          <div className="pt-16 flex justify-center">
            <div className="flex flex-col space-y-14">
                <div className="pl-16 text-[80px] text-[#6C372E] text-center">Let's Get In Touch!</div>
                <div className="p-16 flex flex-col space-y-10 bg-gradient-to-tr from-[#ffcfcf] to-[#ffc4ba] shadow-xl rounded-tl-[150px] rounded-br-[150px]">
                  <div className="text-center text-2xl text-[#6C372E]">Contact Form</div>
                  <div className="flex flex-col space-y-5 items-center">
                    <input
                      placeholder="Name"
                      name="name"
                      className="bg-white w-[900px] px-8 py-3 text-[#6C372E] rounded-[60px] hover:bg-[#f9f5f5]"
                      type="text"
                      required
                    />
                    <input
                      placeholder="Email"
                      name="email"
                      className="bg-white w-[900px] px-8 py-3 text-[#6C372E] rounded-[60px] hover:bg-[#f9f5f5]"
                      type="email"
                      required
                    />
                    <input
                      placeholder="Message"
                      name="message"
                      className="bg-white w-[900px] h-[200px] px-8 py-3 text-[#6C372E] rounded-[30px] hover:bg-[#f9f5f5]"
                      type="text"
                      required
                    />
                    <button
                      type="submit"
                      className="px-12 py-3 text-[#6C372E] rounded-[60px] bg-white transform hover:-translate-y-1 duration-400 duration-200 shadow-[0_0_30px_white]"
                    >
                      Send!
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </form>
        {/* Contact Form End */}

        {/* Socials */}
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
        {/* Socials End */}

      </div>
    </>
  );
}

export default App;
