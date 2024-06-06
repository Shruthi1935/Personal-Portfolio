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
import { LampContainer } from "/Users/yshru/WebsiteTailwindVite/my-project/components/lamp.jsx";
import { FloatingNav } from "/Users/yshru/WebsiteTailwindVite/my-project/components/floating-navbar.jsx";
import { Me } from "/Users/yshru/WebsiteTailwindVite/my-project/components/moreAboutMe.jsx";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaGithub, FaLinkedin, FaFigma, FaPython, FaHtml5, FaReact, FaNodeJs, FaNpm} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql, SiVite, SiCplusplus, SiJavascript, SiNotion } from 'react-icons/si'; // still need sql icon
import { FaPhone } from 'react-icons/fa';

function App() {
  {/* Any usestates here */}
  //const navigate = useNavigate();

  return (
    <>
      {/* Work here */}
      {/* Overall Page */}
      <div className="flex flex-col justify-center overflow-y-auto min-h-screen bg-gradient-to-b from-white to-[#FFD0C8]"> 

        {/* HEADER */}
        <header className="sticky top-0 h-[80px] shadow-xl z-30 bg-white flex items-center">
          <div className="flex items-center justify-between w-full px-10">
            <img src={logo} alt="Logo" className="h-16" />
            <div className="flex space-x-6 ">
              <button className="font-serif font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">About Me</button>
              <button className="font-serif font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">Skills</button>
              <button className="font-serif font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">Projects</button>
              <button className="font-serif font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">Contact</button>
              <button className="font-serif font-bold py-3 px-5 cursor-pointer transform hover:-translate-y-1 duration-100 text-[#6C372E]">Socials</button>
            </div>
          </div>
        </header>
        {/* HEADER END */}
        
        {/* INTRO */}
        <div className="flex flex-col items-center justify-center min-w-full bg-gradient-to-b from-[#f7aa9e]">
          <div className="">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={2.0}
              maxSize={3.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="ffffff"
            />
          </div>
          <div className="flex flex-col space-y-28 pt-0">
            <div className="text-8xl text-[#6C372E] font-medium text-center"> Hello there! </div> 
          </div>
        </div>
        {/* INTRO END */}

        {/* ABOUT ME */}
        <div className="pt-16 mt-[320px]">
          <div className="flex flex-row space-x-12 min-w-screen bg-gradient-to-b from-[#ffffff] to-[#FFD0C8] shadow-lg">
            <div className="p-16 flex flex-col space-y-10">
              <div className="text-2xl text-[#6C372E] font-serif font-bold"> About Me </div> 
              <div className="font-serif text-xl text-[#6C372E] font-medium"> 
                Hey there! I'm a junior at the University of Houston majoring in Computer Science and minoring in Mathematics. 
                As you step into my world on this website, you will find my projects and other passion work evolved from my very first programming class. 
                I invite you to explore the projects I've dedicated my time and knowledge to, 
                each representing a token of my growth and experience fostered through teamwork, amazing professors, and close friends.
                Click down below if you'd like to learn more about me, or you can access my resume right here!
              </div> 
              {/* Buttons */}
              <div className="flex flex-row space-x-12 pt-8 justify-center">
                <a href={ Me } target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#ffccc3] via-[#ffddda] to-[#ffccc3] py-6 px-20 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-1 duration-400 rounded-tr-[100px] rounded-bl-[100px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                    More About Me
                </a>
                
                <a href={ resumeSY } target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#ffccc3] via-[#ffddda] to-[#ffccc3] py-6 px-20 cursor-pointer hover:bg-[#ffd2ca] transform hover:-translate-y-1 duration-400 rounded-tl-[100px] rounded-br-[100px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                    Download My Resume
                </a>
              </div>
              {/* Buttons End*/}
            </div>
            <img src={ profile1 } alt="Profile Image 1" className="flex w-[700px] h-[580px]"/>
          </div>
        </div>
        {/* ABOUT ME END */}

        {/* Skills */}
        <div className="pt-8 mt-[150px]">
          <div className="flex flex-col space-y-16 pl-24">
            <div className="font-serif text-7xl text-[#6C372E] ">Skills</div>

            <div className="flex flex-row space-x-[80px]">
              <div className="bg-gradient-to-br from-[#ffcfcf] to-[#ffc4ba] shadow-xl p-16 rounded-tr-[130px] rounded-bl-[130px]">
                <div className="flex flex-col space-y-10 text-white text-7xl">
                  <div className="flex flex-row space-x-10">
                    <FaPython className="transform hover:-translate-y-2 duration-100" />
                    <SiCplusplus className="transform hover:-translate-y-2 duration-100"/>
                    <FaHtml5 className="transform hover:-translate-y-2 duration-100" />
                    <SiTailwindcss className="transform hover:-translate-y-2 duration-100"/>
                    <SiJavascript className="transform hover:-translate-y-2 duration-100"/>
                  </div>
                  <div className="flex flex-row space-x-10">
                    <SiTypescript className="transform hover:-translate-y-2 duration-100"/>
                    <SiMysql className="transform hover:-translate-y-2 duration-100"/>
                    <FaReact className="transform hover:-translate-y-2 duration-100" />
                    <FaNodeJs className="transform hover:-translate-y-2 duration-100" />
                    <FaNpm className="transform hover:-translate-y-2 duration-100" />
                  </div>
                  <div className="flex flex-row space-x-10">
                    <SiVite className="transform hover:-translate-y-2 duration-100"/>
                    <FaGithub className="transform hover:-translate-y-2 duration-100" />
                    <FaFigma className="transform hover:-translate-y-2 duration-100" />
                    <SiNotion className="transform hover:-translate-y-2 duration-100"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-10 pr-10 text-[#6C372E]">
                <div className="text-3xl font-serif"> "An investment in knowledge pays the best interest." </div>
                <div className="text-2xl "> - Benjamin Franklin </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills End */}

        {/* Contact Form */}
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-[150px]">
          <input type="hidden" name="access_key" value="23967d50-3be6-44b1-afb6-7971b65b89f8" />
          <div className="pt-16 flex justify-center">
            <div className="flex flex-col space-y-14">
                <div className="text-center text-4xl text-[#6C372E]">Let's Get In Touch!</div>
                <div className="p-16 flex flex-col space-y-10 bg-gradient-to-tr from-[#ffcfcf] to-[#ffc4ba] shadow-xl rounded-tl-[150px] rounded-br-[150px]">
                  <div className="text-center text-2xl text-[#6C372E] font-serif">Contact Form</div>
                  <div className="flex flex-col space-y-5 items-center">
                    <input
                      placeholder="Name"
                      name="name"
                      className="bg-white w-[900px] px-8 py-3 text-[#6C372E] font-serif rounded-[60px] hover:bg-[#f9f5f5]"
                      type="text"
                      required
                    />
                    <input
                      placeholder="Email"
                      name="email"
                      className="bg-white w-[900px] px-8 py-3 text-[#6C372E] font-serif rounded-[60px] hover:bg-[#f9f5f5]"
                      type="email"
                      required
                    />
                    <input
                      placeholder="Message"
                      name="message"
                      className="bg-white w-[900px] h-[200px] px-8 py-3 text-[#6C372E] font-serif rounded-[30px] hover:bg-[#f9f5f5]"
                      type="text"
                      required
                    />
                    <button
                      type="submit"
                      className="px-12 py-3 text-[#6C372E] rounded-[60px] bg-white transform hover:-translate-y-1 duration-400 duration-200 shadow-2xl shadow-[#ffffff]"
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
        <div className="flex flex-col font-serif font-medium text-[#6C372E] mt-[150px]">
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
