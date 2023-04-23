import React, { useEffect, useRef, useState } from "react";
import reactIcon from "../assets/react.svg";
import rou from '../assets/react-router.svg';
import javascriptIcon from '../assets/javascript.svg';
import gitIcon from '../assets/git-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import htmlIcon from '../assets/html-5.svg';
import tailwindIcon from '../assets/tailwindcss-icon.svg';
import vercel from '../assets/vercel.svg';
import cssIcon from '../assets/css-3.svg';
import mailIcon from "../assets/mail.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const name = "sumitsaurav";
  const text = useRef();
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOP>/?{]@#$Y🔒🎈🎶🎂👀✔🎀🍘🥘🧆Z";
    let interval = null;
    console.log(text.current.dataset.value);
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      text.current.innerText = text.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text.current.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= 12) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }, []);
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const Arr = ["2", "3", "4", "5", "6"];
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function handleMove(e) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      Mx = e.clientX - rect.left,
      My = e.clientY - rect.top;
    setX(Mx);
    setY(My);
  }
  return (
    <div className=" h-auto w-screen flex  justify-center">
      <div className=" h-auto box-border w-auto md:w-[512px] flex-col px-4 py-6 pb-10 flex justify-start items-start ">
        <div className=" h-[10vh] w-full flex items-center gap-2 justify-start ">
          <img src={reactIcon} alt="" />
          <div className=" h-1/2 flex flex-col justify-center  ">
            <div
              ref={text}
              data-value="SUMIT SAURAV"
              className=" uppercase text-white whitespace-nowrap "
              style={{ fontFamily: " 'Inter', sans-serif" }}
            >
              sumit saurav
            </div>
            <p className="text-neutral-400"> B.2002</p>
          </div>
        </div>
        <div className="text-neutral-400 py-10 md:py-12 text-lg">
          I am a frontend developer with a background in react javascript My
          exepertise lies in developing user-friendly web applications, ensuring
          a great UX and user experience. I'm confident that i can bring your
          project to the next level, with my proficiency in React. Thank you for
          your consideration
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <div className="h-2 w-2 rounded-[999px] bg-green-500"></div>
            <div className="text-neutral-400">
              Avaliable for new opportunities
            </div>
          </div>
        </div>
        <div className="py-10">
          <button className="flex items-center rounded-xl gap-2 px-2  bg-neutral-600">
            <img className="" src={mailIcon} alt="" />
            <Link to="/contact">
              <p className="text-neutral-200 flex py-2 justify-center items-center">
                Contact me
              </p>
            </Link>
          </button>
        </div>
        <div className="w-full py-1 px-1  ">
          <p className="text-white text-xl font-medium pb-1">Tech Stack</p>
          <div className="w-full  gap-2 flex flex-wrap   justify-between   py-1">
            <img className="h-12 md:h-10 " src={reactIcon} alt="" />
            <img className="h-12 md:h-10" src={gitIcon} alt="" />
            <img className="h-12 md:h-10" src={javascriptIcon} alt="" />
            <img className="h-12 md:h-10" src={htmlIcon} alt="" />
            <img className="h-12 md:h-10" src={cssIcon} alt="" />
            <img className="h-12 md:h-10" src={githubIcon} alt="" />
            <img className="h-12 md:h-10" src={tailwindIcon} alt="" />
            <img className="h-12 md:h-10" src={vercel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
