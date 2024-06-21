import React, { useEffect, useState } from "react";
import NumberSegmentComponent from "./NumberSegmentComponent";

const HoursSegmentComponent = () => {
  const [hours, setHours] = useState({ dig1: 0, dig2: 0 });
  const [minutes, setMinutes] = useState({ dig1: 0, dig2: 0 });
  const [seconds, setSeconds] = useState({ dig1: 0, dig2: 0 });
  const [pointer, setPointer] = useState(false)

  const getDigits = (number) => {
    if (number > 9) {
      const dig1 = Math.floor(number / 10);
      const dig2 = number % 10;
      return { dig1, dig2 };
    } else {
      return { dig1: 0, dig2: number };
    }
  };

  useEffect(() => {
    const updateTime = () => {
      let date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setHours(getDigits(hours));
      setMinutes(getDigits(minutes));
      setSeconds(getDigits(seconds));
      
    };
    
    
    updateTime();
    const intervalId = setInterval(()=>{
        updateTime()
        setPointer((prevPointer) => !prevPointer);
    }, 1000);
    
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="flex">
    <section className="flex ">
        <article >
          <NumberSegmentComponent number={hours.dig1} />
        </article>
        <article className="">
          <NumberSegmentComponent number={hours.dig2} />
        </article>
      </section>
      <section className="flex z-50  bg-black  py-20 px-14 ">
        <div className={` ${pointer ?"bg-white" : "bg-gray-800" } w-3 h-3 absolute `}></div>
        <div className={`${pointer ?"bg-white" : "bg-gray-800" } w-3 h-3 mt-8 absolute `}></div>
      </section>
      <section className="flex">
        <article>
          <NumberSegmentComponent number={minutes.dig1} />
        </article>
        <article className="">
          <NumberSegmentComponent number={minutes.dig2} />
        </article>
      </section>
      <section className="flex z-50  bg-black  py-20 px-14">
        <div className={` ${pointer ?"bg-white" : "bg-gray-800" }  w-3 h-3 absolute `}></div>
        <div className={`${pointer ?"bg-white" : "bg-gray-800" } w-3 h-3 mt-8 absolute `}></div>
      </section>
      <section className="flex">
        <article>
          <NumberSegmentComponent number={seconds.dig1} />
        </article>
        <article className="">
          <NumberSegmentComponent number={seconds.dig2} />
        </article>
      </section>

 
     
    </div>
      
    </>
  );
};

export default HoursSegmentComponent;