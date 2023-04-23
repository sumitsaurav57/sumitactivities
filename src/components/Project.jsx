import React, { useRef, useEffect } from "react";
import coinRanking from "../assets/coinRanking.png";
import exercises from "../assets/exercises.png";
import githubuser from "../assets/githubuser.png";
import tiktik from "../assets/tiktik.png";
import tokenman from "../assets/tokenman.png";
import oin from '../assets/oin.svg';
const Project = () => {
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
  return (
    <div className="h-auto w-screen flex items-center justify-center pb-6 overflow-auto">
      <div className=" absolute top-0 w-auto md:w-[512px] flex-col px-4 py-6 flex justify-start items-start ">
        <div>
          <p
            ref={text}
            data-value="Project"
            className="text-xl text-neutral-400"
          >
            Project
          </p>
        </div>
        <div className="flex gap-2 py-6">
          <p className="text-neutral-500 text-3xl">Some of my</p>
          <p className="  text-white text-3xl">work</p>
        </div>
        <div className="w-full ">
          <div className="w-full gap-2 grid grid-cols-1 pb-24 box-content md:grid-cols-2">
            <div className="  py-2 rounded-xl">
              <div>
                <img src={tokenman} alt="" />
              </div>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://jovial-creponne-f73cbc.netlify.app/"> <p className="text-white font-medium flex justify-center items-center">Live demo</p><img src={oin} className="h-full" alt="" /></a>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github.com/sumitsaurav57/tokenMan3"> <p className="text-white font-medium flex justify-center items-center">Github repository</p><img src={oin} className="h-full" alt="" /></a>
            </div>
            <div className=" py-2 rounded-xl">
              <div>
                <img src={coinRanking} alt="" />
              </div>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://coin-ranking-jade.vercel.app/"> <p className="text-white font-medium flex justify-center items-center">Live demo</p><img src={oin} className="h-full" alt="" /></a>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github.com/sumitsaurav57/coinRanking"> <p className="text-white font-medium flex justify-center items-center">Github repository</p><img src={oin} className="h-full" alt="" /></a>
            </div>
            <div className=" py-2 rounded-xl">
              <div>
                <img src={tiktik} alt="" />
              </div>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://tiktik-clone1.vercel.app/"> <p className="text-white font-medium flex justify-center items-center">Live demo</p><img src={oin} className="h-full" alt="" /></a>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github.com/sumitsaurav57/tiktik-clone"> <p className="text-white font-medium flex justify-center items-center">Github repository</p><img src={oin} className="h-full" alt="" /></a>
              
            </div>
            <div className=" py-2 rounded-xl">
              <div>
                <img src={githubuser} alt="" />
              </div>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github-user-quem4c881-sumitsaurav57.vercel.app/"> <p className="text-white font-medium flex justify-center items-center">Live demo</p><img src={oin} className="h-full" alt="" /></a>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github.com/sumitsaurav57/github-user"> <p className="text-white font-medium flex justify-center items-center">Github repository</p><img src={oin} className="h-full" alt="" /></a>
            </div>
            <div className=" py-2 rounded-xl">
              <div>
                <img src={exercises} alt="" />
              </div>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://exercises-aox8s2ixp-sumitsaurav57.vercel.app/"> <p className="text-white font-medium flex justify-center items-center">Live demo</p><img src={oin} className="h-full" alt="" /></a>
              <a className="flex justify-start items-center py-1 gap-1" target="_blank" href="https://github.com/sumitsaurav57/exercises"> <p className="text-white font-medium flex justify-center items-center">Github repository</p><img src={oin} className="h-full" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
