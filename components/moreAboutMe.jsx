import React from "react";
import profile1 from '/src/assets/1.jpeg';

export const Me = (props) => {
  return (
    <>
      <div className="pt-16">
          <div className="flex flex-row space-x-12 min-w-screen bg-gradient-to-b from-[#ffffff] to-[#FFD0C8]">
            <div className="p-16 flex flex-col space-y-10">
              <div className="text-2xl text-[#6C372E] font-serif font-bold"> About Me </div> 
              <div className="font-serif text-xl text-[#6C372E] font-medium"> 
                Hey there! I'm a junior at the University of Houston majoring in Computer Science and minoring in Mathematics. 
                As you step into my world on this website, you will find my projects and other passion work evolved from my very first programming class. 
                I invite you to explore the projects I've dedicated my time and knowledge to, 
                each representing a token of my growth and experience in the IT domain gained through teamwork, amazing professors, and close friends.
                Click down below if you'd like to learn more about me, or you can access my resume right here!
              </div> 
              {/* Buttons */}
              <div className="flex flex-row space-x-12 pt-8 justify-center">
                <button className="bg-[#ffbeb1] py-3 px-10 cursor-pointer hover:bg-[#fbc9c1] transform hover:-translate-y-1 duration-400 rounded-[48px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                  More  About  Me
                </button>
                <a href={ resumeSY } target="_blank" rel="noopener noreferrer" className="bg-[#ffbeb1] py-3 px-10 cursor-pointer hover:bg-[#fbc9c1] transform hover:-translate-y-1 duration-400 rounded-[48px] duration-200 text-[#6C372E] shadow-2xl shadow-[#ffffff]">
                    Download My Resume
                </a>
              </div>
              {/* Buttons End*/}
            </div>
            <img src={ profile1 } alt="Profile Image 1" className="flex w-[700px] h-[580px]"/>
          </div>
        </div>
        {/* Intro End */}
    </>
  )
}
