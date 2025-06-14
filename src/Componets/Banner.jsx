import React from 'react';
import { motion } from "motion/react";
import team1 from '../assets/team/team1.jpg';
import team2 from '../assets/team/team2.jpg';
import { Typewriter, Cursor } from 'react-simple-typewriter';
const Banner = () => {
    return (
<div className="hero bg-[#c4d6ffe6] min-h-96">
<div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <motion.img
      src={team1}
      animate={{y: [100,150, 0]}}
     transition={{
        duration: 5,
        repeat: Infinity,     
     }}
      className="
      max-w-sm 
      rounded-t-[40px]
      rounded-br-[40px]
      border-s-8
      border-b-8
      border-[#f000b8]
      shadow-2xl"
    />
    <motion.img
      src={team2}
      animate={{x: [100,150, 0]}}
     transition={{
        duration: 5,
        delay:10,
        repeat: Infinity,     
     }}
      className="
      max-w-sm 
      rounded-t-[40px]
      rounded-br-[40px]
      border-s-8
      border-b-8
      border-[#AD56C4]
      shadow-2xl"
    />
   </div>
    <div className='flex-1'>

<h1 className='font-bold text-4xl text-[#AD56C4]' >
  Connecting learners through{' '}
  <span style={{ fontWeight: 'bold', color: 'green' }}>
    <Typewriter
      words={[
        'with friends, submit and succeed.',
        'virtual class where collaboration meets creativity.',
        'Proud Of Spirited.',
        'feedback and group study.'
      ]}
      loop={true}
      typeSpeed={100}
      deleteSpeed={70}
      delaySpeed={1500}
    />
  </span>
  <Cursor />
</h1>
 <p className="py-2 
 text-[#f000b8] text-xl font-normal">
        AssignMates is a modern web platform designed for collaborative learning through assignment-based interaction. Built using the MERN stack, it provides a seamless experience for users to create, attempt, and evaluate assignments within a trusted peer community. With secure authentication, intuitive UI, and real-time submission tracking, AssignMates promotes accountability, feedback, and skill development — all in one place.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;