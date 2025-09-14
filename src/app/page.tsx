'use client';

import Image from "next/image";
import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faHtml5, faCss3, faSquareJs, faPython, faJava, faReact, faGit, faNpm, faDocker, faNotion, faUbuntu, faFigma } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isShow, setIsShow] = React.useState(false);
  const [isSkills, setIsSkills] = React.useState({
    hpl: true,
    hfw: true,
    htl: true,
    htt: true,
    hdb: true,
    hss: true,
    pl: false,
    fw: false,
    tl: false,
    tt: false,
    db: false,
    ss: false
  })
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDetail, setIsDetail] = React.useState(false)
  const handleIsSkills = (check: string) => {
    if (check === "pl") {
      setIsSkills({
        hpl: false,
        hfw: true,
        htl: false,
        htt: false,
        hdb: false,
        hss: false,
        pl: true,
        fw: false,
        tl: false,
        tt: false,
        db: false,
        ss: false
      })
    } if (check === "fw") {
      setIsSkills({
        hpl: false,
        hfw: false,
        htl: true,
        htt: false,
        hdb: false,
        hss: false,
        pl: false,
        fw: true,
        tl: false,
        tt: false,
        db: false,
        ss: false
      })
    } if (check === "tl") {
      setIsSkills({
        hpl: false,
        hfw: false,
        htl: false,
        htt: true,
        hdb: false,
        hss: false,
        pl: false,
        fw: false,
        tl: true,
        tt: false,
        db: false,
        ss: false
      })
    } if (check === "tt") {
      setIsSkills({
        hpl: false,
        hfw: false,
        htl: false,
        htt: false,
        hdb: true,
        hss: false,
        pl: false,
        fw: false,
        tl: false,
        tt: true,
        db: false,
        ss: false
      })
    } if (check === "db") {
      setIsSkills({
        hpl: false,
        hfw: false,
        htl: false,
        htt: false,
        hdb: false,
        hss: true,
        pl: false,
        fw: false,
        tl: false,
        tt: false,
        db: true,
        ss: false
      })
    } if (check === "ss") {
      setIsSkills({
        hpl: true,
        hfw: false,
        htl: false,
        htt: false,
        hdb: false,
        hss: false,
        pl: false,
        fw: false,
        tl: false,
        tt: false,
        db: false,
        ss: true
      })
    }
  }
  const frontend = [
    { name: "Next.js" },
    { name: "React.js" },
    { name: "Vite.js" },
  ]
  const backend = [
    { name: "FastAPI" },
    { name: "Express.js" }
  ]
  const database = [
    {
      icon: faFontAwesome,
      name: "MongoDB",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "PostgreSQL",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "MySQL",
      level: "⭐⭐⭐"
    },
  ]
  const cloudflatform = [
    { name: "Render" },
    { name: "Vercel" }
  ]
  const programminglanguages = [
    {
      icon: faHtml5,
      name: "HTML5",
      level: "⭐⭐⭐⭐"
    },
    {
      icon: faCss3,
      name: "CSS3",
      level: "⭐⭐⭐⭐"
    },
    {
      icon: faSquareJs,
      name: "JavaScript",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "TypeScript",
      level: "⭐⭐⭐"
    },
    {
      icon: faPython,
      name: "Python",
      level: "⭐⭐⭐"
    },
    {
      icon: faJava,
      name: "Java",
      level: "⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "C/C++",
      level: "⭐⭐"
    }
  ]
  const frameworks = [
    {
      icon: faFontAwesome,
      name: "Next.js",
      level: "⭐⭐⭐⭐"
    },
    {
      icon: faReact,
      name: "React",
      level: "⭐⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Vite.js",
      level: "⭐⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "LangChain",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Express.js",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "FastAPI",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Tailwind CSS",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Bootstrap CSS",
      level: "⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "LangGraph",
      level: "⭐⭐"
    }
  ]
  const tools = [
    {
      icon: faFontAwesome,
      name: "Visual Studio Code",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Visual Studio Community",
      level: "⭐⭐⭐"
    },
    {
      icon: faNpm,
      name: "NPM",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "pip",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Conda",
      level: "⭐⭐⭐"
    },
    {
      icon: faNotion,
      name: "Notion",
      level: "⭐⭐⭐"
    },
    {
      icon: faFigma,
      name: "Figma",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Canva",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Obsidian",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Jupyter Notebook / JupyterLab",
      level: "⭐⭐⭐"
    },
    {
      icon: faGit,
      name: "Git",
      level: "⭐⭐⭐"
    },
    {
      icon: faGithub,
      name: "Github",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Vercel Cloud",
      level: "⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Render Cloud",
      level: "⭐⭐"
    },
    {
      icon: faDocker,
      name: "Docker",
      level: "⭐⭐"
    },
    {
      icon: faUbuntu,
      name: "Ubuntu",
      level: "⭐⭐"
    }
  ]
  const testingtools = [
    {
      icon: faFontAwesome,
      name: "Postman",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "PyTest",
      level: "⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Selenium",
      level: "⭐⭐"
    }
  ]
  const softskills = [
    {
      icon: faFontAwesome,
      name: "Communication",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Continuous Learning",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Teamwork",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Problem Solving",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Adaptability",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Creativity",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Time Management",
      level: "⭐⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Analytical Thinking",
      level: "⭐⭐"
    },
    {
      icon: faFontAwesome,
      name: "Stress Management",
      level: "⭐⭐"
    }
  ]

  const cards = [
    {
      title: "DPUCARE",
      name: "Web Chat Bot",
      img: "/imagespj/dpucare.png",

    }
  ]

  return (
    <Parallax pages={6} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} className="relative z-0" style={{ backgroundImage: `url('/images/bg_1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={1} className="relative z-1" style={{ backgroundImage: `url('/images/a1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={0.5} className="relative z-1" style={{ backgroundImage: `url('/images/a12.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-1} className="relative z-1" style={{ backgroundImage: `url('/images/b1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-0.5} className="relative z-1" style={{ backgroundImage: `url('/images/b12.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={2} className="relative z-1" style={{ backgroundImage: `url('/images/c1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={1.5} className="relative z-1" style={{ backgroundImage: `url('/images/c12.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-2} className="relative z-1" style={{ backgroundImage: `url('/images/d1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-1.5} className="relative z-1" style={{ backgroundImage: `url('/images/d12.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={1} className="relative z-1" style={{ backgroundImage: `url('/images/e1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={1.5} className="relative z-1" style={{ backgroundImage: `url('/images/f1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-1.5} className="relative z-1" style={{ backgroundImage: `url('/images/f12.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-1} className="relative z-1" style={{ backgroundImage: `url('/images/g1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={0} speed={-1} className="relative z-1 content-center text-center uppercase">
        <h1 className="text-[2rem] tracking-[0.1rem] text-[#ebd994]">MR.NU Developer</h1>
        <p className="text-[1rem] tracking-[0.1rem] text-white">Junior Developer & Web Explorer</p>
        <div className="w-full flex justify-center mt-2 text-white">
          <a href="https://github.com/AnupongPakee" target="_blank" className="mr-1 transition duration-200 ease-in-out hover:text-[#ebd994]">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/anupong-pakee-a02961378" target="_blank" className="mr-1 transition duration-200 ease-in-out hover:text-[#ebd994]">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:anuphong4407@gmail.com?subject=Ask for information&body=สวัสดีค่ะ/ครับ" target="_blank" className="mr-1 transition duration-200 ease-in-out hover:text-[#ebd994]">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} className="relative z-10" style={{ backgroundImage: `url('/images/bg_1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={1} speed={1} className="relative z-11">
        <h1 className="text-[1.6rem] text-center tracking-[0.1rem] text-[#ebd994]">What I Can Do</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} className="relative z-11 flex justify-center items-center">
        <div className="ourservices w-[95%] h-[80%] grid grid-cols-2 grid-rows-[50%_50%] gap-4">
          <div className="relative h-full overflow-hidden border-2 border-[#ebd994] p-2">
            <p className="text-[0.8rem] text-white">Frontend</p>
            <div className="flex items-center w-full h-[80%] animate-slide">
              {frontend.map((item, index) => {
                return <h1 className="text-[2rem] mr-[8rem] text-[#ebd994]" key={index}>{item.name}</h1>
              })}
            </div>
            <div className="w-full h-[15%] text-end content-end">
              <button className="text-[0.6rem] text-white uppercase hover:text-[#ebd994] duration-200 cursor-pointer" onClick={() => setIsShow(true)}>Read</button>
            </div>
            <div style={{ display: isShow ? "block" : "none" }} className="absolute bg-[#ebd994] top-0 left-0 w-full h-full p-3">
              <p className="h-[90%] text-[0.8rem] text-black leading-[1rem]">&quot;I can develop custom web pages based on your requirements, with responsive design using Next.js, React, Vite, and more.&quot;</p>
              <div className="w-full content-end text-end mt-2">
                <button className="text-[0.6rem] text-black uppercase hover:text-white duration-200 cursor-pointer" onClick={() => setIsShow(false)}>Back</button>
              </div>
            </div>
          </div>
          <div className="relative h-full overflow-hidden border-2 border-[#ebd994] p-2">
            <p className="text-[0.8rem] text-white">Backend</p>
            <div className="flex items-center w-full h-[80%] animate-slide">
              {backend.map((item, index) => {
                return <h1 className="text-[2rem] ml-[8rem] text-[#ebd994]" key={index}>{item.name}</h1>
              })}
            </div>
            <div className="w-full h-[15%] text-end content-end">
              <button className="text-[0.6rem] text-white uppercase hover:text-[#ebd994] duration-200 cursor-pointer" onClick={() => setIsShow(true)}>Read</button>
            </div>
            <div style={{ display: isShow ? "block" : "none" }} className="absolute bg-[#ebd994] top-0 left-0 w-full h-full p-3">
              <p className="h-[90%] text-[0.8rem] text-black leading-[1rem]">&quot;I build custom backend systems with a solid grasp of fundamental security, using FastAPI, Express.js, and more.&quot;</p>
              <div className="w-full content-end text-end mt-2">
                <button className="text-[0.6rem] text-black uppercase hover:text-white duration-200 cursor-pointer" onClick={() => setIsShow(false)}>Back</button>
              </div>
            </div>
          </div>
          <div className="relative h-full overflow-hidden border-2 border-[#ebd994] p-2">
            <p className="text-[0.8rem] text-white">Database</p>
            <div className="flex items-center w-full h-[80%] animate-slide-2">
              {database.map((item, index) => {
                return <h1 className="text-[2rem] mr-[8rem] text-[#ebd994]" key={index}>{item.name}</h1>
              })}
            </div>
            <div className="w-full h-[15%] text-end content-end">
              <button className="text-[0.6rem] text-white uppercase hover:text-[#ebd994] duration-200 cursor-pointer" onClick={() => setIsShow(true)}>Read</button>
            </div>
            <div style={{ display: isShow ? "block" : "none" }} className="absolute bg-[#ebd994] top-0 left-0 w-full h-full p-3">
              <p className="h-[90%] text-[0.8rem] text-black leading-[1rem]">&quot;I can design database structures and relationships, working with both SQL and NoSQL databases such as MongoDB, PostgreSQL, MySQL, and more.&quot;</p>
              <div className="w-full content-end text-end mt-2">
                <button className="text-[0.6rem] text-black uppercase hover:text-white duration-200 cursor-pointer" onClick={() => setIsShow(false)}>Back</button>
              </div>
            </div>
          </div>
          <div className="relative h-full overflow-hidden border-2 border-[#ebd994] p-2">
            <p className="text-[0.8rem] text-white">Cloud Platform</p>
            <div className="flex items-center w-full h-[80%] animate-slide-2">
              {cloudflatform.map((item, index) => {
                return <h1 className="text-[2rem] ml-[8rem] text-[#ebd994]" key={index}>{item.name}</h1>
              })}
            </div>
            <div className="w-full h-[15%] text-end content-end">
              <button className="text-[0.6rem] text-white uppercase hover:text-[#ebd994] duration-200 cursor-pointer" onClick={() => setIsShow(true)}>Read</button>
            </div>
            <div style={{ display: isShow ? "block" : "none" }} className="absolute bg-[#ebd994] top-0 left-0 w-full h-full p-3">
              <p className="h-[90%] text-[0.8rem] text-black leading-[1rem]">&quot;I can deploy production-ready applications to hosting platforms such as Vercel, Render, and more.&quot;</p>
              <div className="w-full content-end text-end mt-2">
                <button className="text-[0.6rem] text-black uppercase hover:text-white duration-200 cursor-pointer" onClick={() => setIsShow(false)}>Back</button>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} className="relative z-20" style={{ backgroundImage: `url('/images/bg_1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <ParallaxLayer offset={2} speed={1} className="relative z-21">
        <h1 className="text-[1.6rem] text-center tracking-[0.1rem] text-[#ebd994]">About Me</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} className="relative z-21 flex w-full">
        <div className="flex justify-center items-center w-[50%] h-full">
          <div className="w-[80%] h-[50%] relative rounded-full overflow-hidden border-4 border-[#ebd994] perspective-[1000px] group cursor-pointer">
            <div className="w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div className="absolute inset-0 backface-hidden">
                <Image src="/images/me.jpg" className="object-cover" alt="Image of me" fill />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#ebd994] text-black rounded-full rotate-y-180 backface-hidden">
                <p className="text-[0.8rem] font-bold">Age: 23</p>
                <p className="text-[0.8rem] font-bold">Gender: Male</p>
                <p className="text-[0.8rem] font-bold">Nationality: Thai</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center">
          <div className="w-[90%] h-[50%] overflow-auto">
            <h1 className="text-[1.4rem] text-[#ebd994] mb-2">Anupong Pakee</h1>
            <p className="text-[0.8rem] text-white leading-[1rem]">I graduated with a Bachelor&apos;s degree in Computer Engineering. I have a strong passion for programming — I truly enjoy it and sometimes get so immersed that I lose track of time. Although I don&apos;t have any formal work experience with a company, I have completed numerous simulated or personal projects. I am also adaptable, open to new challenges, and eager to learn new technologies. Below are my qualifications, which I hope meet your requirements. I look forward to the opportunity to work with you.</p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.99} speed={0.4} className="relative z-31">
        <div className="flex justify-around items-stretch w-full h-fit text-white">
          <div className="border-2 border-[#ebd994] p-2">
            <p className="text-[0.6rem]">Education</p>
            <h1 className="text-[1.1rem] text-[#ebd994] text-center mt-2 mb-1">Bachelor&apos;s Degree</h1>
            <p className="text-[0.6rem] text-center">Computer Engineering</p>
          </div>
          <div className="border-2 border-[#ebd994] p-2">
            <p className="text-[0.6rem]">Experiene</p>
            <h1 className="text-[1.1rem] text-center text-[#ebd994] mt-2">Fresh Graduate</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} className="relative z-30" style={{ backgroundImage: `url('/images/bg_2.png')`, backgroundSize: 'cover', backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} speed={1} className="relative z-31">
        <h1 className="text-[1.6rem] text-center tracking-[0.1rem] text-[#ebd994]">Skills</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={3} className="relative z-31" style={{ backgroundImage: `url('images/a2.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} className="relative z-31" style={{ backgroundImage: `url('images/a22.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} speed={0.5} className="relative z-31" style={{ backgroundImage: `url('images/b2.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} className="relative z-31" style={{ backgroundImage: `url('images/c2.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} className="relative z-31" style={{ backgroundImage: `url('images/c22.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} speed={0.9} className="relative z-31" style={{ backgroundImage: `url('images/d2.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} speed={0.8} className="relative z-31" style={{ backgroundImage: `url('images/d23.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={3} speed={1} className="relative z-41 w-full h-full flex justify-center items-center">
        <div className="w-[90%] h-[80%] overflow-hidden">
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.hpl ? "block" : "none" }} onClick={() => handleIsSkills("pl")}>Programming Languages</h1>
          <div className="h-[80%] grid-cols-2 auto-rows-[40%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.pl ? "grid" : "none" }} onClick={() => handleIsSkills("pl")}>
            {programminglanguages.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.hfw ? "block" : "none" }} onClick={() => handleIsSkills("fw")}>Frameworks</h1>
          <div className="grid-cols-2 auto-rows-[40%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.fw ? "grid" : "none" }} onClick={() => handleIsSkills("fw")}>
            {frameworks.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.htl ? "block" : "none" }} onClick={() => handleIsSkills("tl")}>Tools</h1>
          <div className="grid-cols-2 auto-rows-[40%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.tl ? "grid" : "none" }} onClick={() => handleIsSkills("tl")}>
            {tools.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.htt ? "block" : "none" }} onClick={() => handleIsSkills("tt")}>Testing Tools</h1>
          <div className="grid-cols-2 auto-rows-[60%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.tt ? "grid" : "none" }} onClick={() => handleIsSkills("tt")}>
            {testingtools.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.hdb ? "block" : "none" }} onClick={() => handleIsSkills("db")}>Databases</h1>
          <div className="grid-cols-2 auto-rows-[60%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.db ? "grid" : "none" }} onClick={() => handleIsSkills("db")}>
            {database.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
          <h1 className="text-white p-2 mb-4 border-2 border-[#ebd994] cursor-pointer hover:bg-[#ebd994] hover:text-black transition-all duration-600" style={{ display: isSkills.hss ? "block" : "none" }} onClick={() => handleIsSkills("ss")}>Soft Skills</h1>
          <div className="grid-cols-2 auto-rows-[40%] gap-4 text-white max-h-[80%] overflow-scroll overflow-x-hidden p-4 mb-4 border-2 border-[#ebd994] animate-fideIn" style={{ display: isSkills.ss ? "grid" : "none" }} onClick={() => handleIsSkills("ss")}>
            {softskills.map((item, index) => {
              return (
                <div className="text-center content-center border-2 border-[#ebd994]" key={index}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h1>{item.name}</h1>
                  <p>{item.level}</p>
                </div>
              )
            })}
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} className="relative z-40" style={{ backgroundImage: `url('/images/bg_2.png')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <ParallaxLayer offset={4} className="relative z-42 content-end p-4" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 20%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 20%, transparent 100%) ,url('/imagespj/dpucare.png')`, backgroundSize: "contain", backgroundPosition: "center" }}>
        <h1 className="text-white">Project</h1>
        <h1 className="text-[#ebd994] text-[2rem] mb-2">(Web) Chatbot</h1>
        <h3 className="text-white mb-2 capitalize">Name: Chatbot provides stress counseling</h3>
        <p className="text-white text-[0.8rem] mb-1">Technologies Used: <strong className="text-[#ebd994]">Vite</strong> <strong className="text-[#ebd994]">FastAPI</strong> <strong className="text-[#ebd994]">MongoDB</strong> </p>
        <p className="text-white text-[0.8rem] mb-4">Description: A stress counseling chatbot website that uses new technologies and concepts like Chain-of-thought (COT) and Retrieval-Augmented Generation (RAG) to improve the accuracy of answering questions.</p>
        <div className="relative z-42 w-full mb-2 flex justify-between">
          <div className="flex text-white">
            <button className="text-[2rem] cursor-pointer mr-4" style={{ display: cards.length === 1 ? "none" : "block" }} onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))} disabled={currentIndex === 0}>{"<"}</button>
            <button className="text-[2rem] cursor-pointer" style={{ display: cards.length === 1 ? "none" : "block" }} onClick={() => setCurrentIndex((i) => Math.min(i + 1, cards.length - 1))} disabled={currentIndex === cards.length - 1} >{">"}</button>
          </div>
          <div className="flex">
            <a className="text-[0.8rem] text-white mr-4 border-2 border-white p-2 cursor-pointer hover:bg-white hover:text-neutral-900 duration-800" onClick={() => setIsDetail(true)}>Details</a>
            <a className="text-[0.8rem] text-[#ebd994] border-2 border-[#ebd994] p-2 hover:text-neutral-900 hover:bg-[#ebd994] duration-800" href="https://dpu-care.vercel.app/" target="_blank">Demo</a>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-43 text-white w-full h-full bg-neutral-900 p-4" style={{ display: isDetail ? "block" : "none" }}>
          <div className="w-full h-[90%] text-[0.8rem] overflow-auto overflow-x-hidden">
            <table>
              <thead>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left content-start">Name:</th>
                  <td className="border-1 border-solid border-white p-2">Chatbot provides stress counseling</td>
                </tr>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left content-start">Description:</th>
                  <td className="border-1 border-solid border-white p-2">A preliminary mental health consultation website built for educational purposes and to explore new technologies such as LangChain and LangGraph. The core feature is a chatbot + agent system powered by OpenAI&apos;s GPT-4o model. It incorporates the concept of Retrieval-Augmented Generation (RAG) to enhance the accuracy of responses by retrieving relevant information from a vector database (Chroma). The system also applies Chain-of-Thought (CoT) reasoning to allow the chatbot to ask, analyze, and respond step-by-step using a custom Prompt Engine. Additionally, chat history is stored to help the chatbot maintain context throughout the conversation.</td>
                </tr>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left content-start">Tech Stack:</th>
                  <td className="border-1 border-solid border-white p-2">Frontend: Vite <br />Backend: FastAPI <br />Database: MongoDB <br />Security: JWT, Cookie, Token, Hash, Google Authenticator <br />Others: LangChain, LangGraph</td>
                </tr>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left content-start">Role:</th>
                  <td className="border-1 border-solid border-white p-2">I was responsible for the entire frontend development, including setting up routing, writing CSS, and implementing responsive web design. I also handled API integration to communicate with the server and managed deployment to the cloud. Additionally, I contributed to backend development by assisting with security implementations such as JWT, cookies, tokens, and Google Authenticator. <br /><br />I played a major role in developing the chatbot, working closely with my team on building features such as Chatbot flow, Retrieval-Augmented Generation (RAG), Chain-of-Thought (CoT), and context retention. I was also involved in designing parts of the prompt engine. Furthermore, I contributed to documentation tasks including writing reports, preparing presentation slides, and creating project plans.</td>
                </tr>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left content-start">Features:</th>
                  <td className="border-1 border-solid border-white p-2">- Core Chatbot System <br />LangChain Integration (OpenAI GPT-4o) <br />Chat Interface <br />Response Handling <br /><br />- User System <br />Email/Password Login & Registration <br />Google OAuth Login <br />Chat History
                    <br /><br />- Admin Panel <br />Admin Login <br />Prompt Engine Editor <br />Prompt Testing Tool <br /><br />- UI/UX Customization <br />Theme Selection <br />Language Selection (Thai / English) <br />Volume Control</td>
                </tr>
                <tr>
                  <th className="text-[#ebd994] border-1 border-solid border-white p-2 text-left">Links:</th>
                  <td className="border-1 border-solid border-white p-2">
                    <a className="hover:text-[#ebd994] duration-400" href="https://github.com/AnupongPakee/pj-dpu-dpucare" target="_blank">Project Repository (Github)</a> <br />
                    <a className="hover:text-[#ebd994] duration-400" href="https://dpu-care.vercel.app/" target="_blank">DPUCARE (DEMO)</a>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="w-full h-[10%] flex justify-end items-center">
            <button className="text-[0.8rem] border-2 border-white p-2 hover:bg-white hover:text-neutral-900 duration-800 cursor-pointer" onClick={() => setIsDetail(false)}>Back</button>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} className="relative z-50 bg-neutral-900" />
      <ParallaxLayer offset={5} speed={1} className="relative z-51 text-white text-center p-4">
        <div className="h-[90%]">
          <h1 className="text-[1.6rem]">Credit</h1>
          <p>Images and resources used in this website are sourced from free platforms under their respective free licenses:</p>
          <ul className="mt-4 mb-4">
            <li>[0] Images by <a className="text-[#ebd994]" href="https://www.freepik.com/free-vector/realistic-black-shimmer-background_36087851.htm" target="_blank">Freepik</a></li>
            <li>[1] Images by <a className="text-[#ebd994]" href="https://www.freepik.com/free-vector/realistic-black-shimmer-background_36087844.htm" target="_blank">Freepik</a></li>
            <li>[2] Icons by <a className="text-[#ebd994]" href="https://fontawesome.com/" target="_blank">Fontawesome</a></li>
          </ul>
          <p className="mb-4">All resources are used for non-commercial, educational or personal portfolio purposes only.</p>
        </div>
        <div className="h-[10%] content-end">
          <p>&copy; 2025 Anupong Pakee. All rights reserved.</p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
