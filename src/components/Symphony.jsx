import React from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990481/bnhmo2qbmrt5si3d4dqi.png photo holder 4x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990525/yxvv8ozfhik0crgfaxsw.png photo holder 3x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990551/qdksamoucqvmpy04aart.png sherlock rightside 3x
// https://res.cloudinary.com/dooekcvv0/image/upload/v1770990608/mijzmvlbhkzwlfrkudyc.png sherlock leftside 3x

//Images
// https://ibb.co/whQt1bfv
// https://ibb.co/kgmT5yCz
// https://ibb.co/dw6VSLQb
// https://ibb.co/zMNQJrH
// https://ibb.co/MybKNsDX
// https://ibb.co/tFwFtvD


const images = [
  "https://ibb.co/whQt1bfv",
  "https://ibb.co/kgmT5yCz",
  "https://ibb.co/dw6VSLQb",
  "https://ibb.co/zMNQJrH",
  "https://ibb.co/MybKNsDX",
  "https://ibb.co/tFwFtvD",
];





function Symphony() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Slice 4.png')",
        aspectRatio: "1238 / 836",
      }}
    >

      {/* ===== MARQUEE ===== */}
      <div className="w-full overflow-hidden pt-10">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative w-[220px] h-[300px]">
              <img
                src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990481/bnhmo2qbmrt5si3d4dqi.png"
                alt="frame"
                className="absolute inset-0 w-full h-full object-contain z-10"
              />
              <img
                src={img}
                alt=""
                className="absolute top-[12%] left-[12%] w-[76%] h-[76%] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/*TITLE*/}
      <div className="relative z-10 w-full flex justify-center mt-16">
        <h1 className="font-heading text-white text-[7vw] leading-none whitespace-nowrap text-center relative">

          Symp
          <span className="relative inline-block">
            h
            <span className="absolute left-[45%] ">
              o
            </span>
          </span>
          ny of Experience

        </h1>
      </div>

      {/*STATS GRID*/}
      <motion.div
        className="relative z-10 grid grid-cols-3 gap-12 text-center mt-16 px-20 font-capture"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <Stat number="7+" label="Years" />
        <Stat number="35+" label="Events" />
        <Stat number="50+" label="Partners" />

        {/* center bottom row */}
        <div className="col-span-3 flex justify-center gap-54">
          <Stat number="7000+" label="Participants" />
          <Stat number="10000+" label="Footfall" />
        </div>

      </motion.div>

      {/*SHERLOCK LEFT*/}
      <img
        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990608/mijzmvlbhkzwlfrkudyc.png"
        className="absolute bottom-0 left-0 w-[220px] z-0"
        alt=""
      />

      {/*SHERLOCK RIGHT*/}
      <img
        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1770990551/qdksamoucqvmpy04aart.png"
        className="absolute bottom-0 right-0 w-[220px] z-0"
        alt=""
      />
    </div >
  );
}

function Stat({ number, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(1);

  const target = parseInt(number.replace("+", ""));

  useEffect(() => {
    if (!inView) return;

    let start = 1;
    const duration = 1000; // animation speed
    const stepTime = Math.max(10, duration / target);

    const counter = setInterval(() => {
      start += Math.ceil(target / 100);

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <h2 className="text-6xl font-bold">
        {count}+
      </h2>
      <p className="text-3xl mt-2 font-mokgech">{label}</p>
    </div>
  );
}

export default Symphony;
