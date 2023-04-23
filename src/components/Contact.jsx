import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { json } from "react-router-dom";
const Contact = () => {
const serviceid =import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateid = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const publickey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
  const [email, setEmail] = useState(" ");
  const [body, setBody] = useState(" ");
  const [name, setName] = useState(" ");
  const text = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceid, templateid, form.current, publickey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
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
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-full w-auto md:w-[512px] flex-col px-4 py-6 flex justify-start items-start ">
        <div>
          <p
            ref={text}
            data-value="Contact"
            className="text-xl text-neutral-400"
          >
            Contact
          </p>
        </div>
        <div className="py-14 md:py-16 flex flex-col gap-4">
          <p className="text-3xl text-neutral-400">Say hello</p>
          <p className="text-neutral-400 text-2xl">
            Looking to start a project and need that magical touch? Reach out.
          </p>
          <div className="flex gap-4 items-center">
            <div className="h-2 w-2 rounded-[999px] bg-green-500"></div>
            <div className="text-neutral-400">
              Avaliable for new opportunities
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-neutral-400"></div>
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className="w-full flex flex-col h-auto gap-2 py-4">
            <div className="w-full  flex gap-2">
              <div className="flex w-1/2">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border-none h-[50px] w-full px-2 bg-neutral-800 text-neutral-300 outline-none "
                />
              </div>
              <div className="flex w-1/2">
                <input
                  type="text"
                  name="user_email"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border-none h-[50px] w-full px-2 bg-neutral-800 text-neutral-300 outline-none "
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                type="text"
                required
                placeholder="Message"
                name="message"
                onChange={(e) => setBody(e.target.value)}
                className="rounded-xl border-none h-[200px] w-full p-2 bg-neutral-800 text-neutral-300 outline-none "
              />
            </div>
            <button className="w-full rounded-xl py-3 bg-neutral-100 text-neutral-900 font-semibold">
              Send
            </button>
          </div>
        </form>
        <div className="w-full flex items-center justify-between py-8">
          <div className="text-neutral-200">sumit saurav</div>
          <div className="text-neutral-200">&#169; 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
