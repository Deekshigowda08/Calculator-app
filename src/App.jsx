import { useState, useEffect } from 'react'
import { FaBackspace } from "react-icons/fa";

import './App.css'

function App() {
  const [Count, setCount] = useState('')

  const handleClick = (tb) => {
    setCount(prevCount=> prevCount + tb);
  }

  const solution=()=>{
    try {
      const result=eval(Count);
    setCount(result.toString())
    } catch (error) {
      
    setCount('Pleace Enter The Vaild Syntax')
    }
  }  
  const back = () => {
    setCount(Count.slice(0,-1));
  }
  const clear=()=>{
    setCount('');
  }


  return (
    <>
      <div className='bg-white md:rounded-xl md:shadow-2xl flex flex-col align-middle justify-center md:border-2 h-[100%] w-[100%] md:w-[50%] md:h-[80%] md:mx-auto md:m-8'>
        <input className='bg-slate-200 w-[90%] m-4  md:w-[97%] py-10 px-5 rounded-xl md:m-2 md:h-[30%] border-2  font-bold text-2xl' type="text" value={Count} readOnly />

        <div className='m-auto'>

          <div className="flex gap-2 m-6">
            <button onClick={clear} className="rounded-full py-4  px-12 md:py-6  md:px-24 font-extrabold md:text-2xl bg-lime-400 cursor-pointer">AC</button>
            <button onClick={() => handleClick('%')} className="rounded-full py-4 px-8 md:py-6 md:px-12  font-extrabold md:text-2xl text-center bg-lime-400 cursor-pointer ">%</button>
            <button onClick={() => handleClick('/')} className="rounded-full py-4 px-8 md:py-6 md:px-12  font-extrabold md:text-2xl bg-lime-400 cursor-pointer ">/</button></div>
          <div className="flex gap-2 m-6">
            <button onClick={() => handleClick('7')} className="rounded-full py-4 px-7 md:py-6 md:px-12  font-extrabold md:text-2xl bg-lime-100 cursor-pointer ">7</button>
            <button onClick={() => handleClick('8')} className="rounded-full py-4 px-7 md:py-6 md:px-12  font-extrabold md:text-2xl  bg-lime-100">8</button>
            <button onClick={() => handleClick('9')} className="rounded-full py-4 px-7 md:py-6 md:px-12   cursor-pointer font-extrabold md:text-2xl bg-lime-100">9</button>
            <button onClick={() => handleClick('*')} className="rounded-full py-4 px-7 md:py-6 md:px-12   cursor-pointer font-extrabold md:text-2xl bg-lime-400">*</button></div>
          <div className="flex gap-2 m-6">
          <button onClick={() => handleClick('4')} className="rounded-full py-4 px-7  cursor-pointer  md:py-6 md:px-12  font-extrabold md:text-2xl bg-lime-100">4</button>
            <button onClick={() => handleClick('5')} className="rounded-full py-4 px-7  cursor-pointer  md:py-6 md:px-12  font-extrabold md:text-2xl bg-lime-100">5</button>
            <button onClick={() => handleClick('6')} className="rounded-full py-4 px-7 md:py-6 md:px-12 cursor-pointer font-extrabold md:text-2xl bg-lime-100">6</button>
            <button onClick={() => handleClick('-')} className="rounded-full py-4 px-7 md:py-6 md:px-12   cursor-pointer font-extrabold md:text-2xl bg-lime-400">-</button></div>
          <div className="flex gap-2 m-6">
            <button onClick={() => handleClick('3')} className="rounded-full  py-4 px-7 cursor-pointer md:py-6 md:px-12  font-extrabold md:text-2xl bg-lime-100">3</button>
            < button onClick={() => handleClick('2')} className="rounded-full py-4 px-7 md:py-6 md:px-12  cursor-pointer font-extrabold md:text-2xl bg-lime-100">2</button>
            < button onClick={() => handleClick('1')} className="rounded-full py-4 px-7 md:py-6 md:px-12  cursor-pointer  font-extrabold md:text-2xl bg-lime-100">1</button>
            <button onClick={() => handleClick('+')} className="rounded-full py-4 px-6 md:py-6 md:px-12 cursor-pointer  font-extrabold md:text-2xl bg-lime-400">+</button></div>
          <div className="flex gap-2 m-6">
            <button onClick={() => handleClick('0')} className="rounded-full py-4 px-6 cursor-pointer  md:py-6 md:px-12 font-extrabold md:text-2xl bg-lime-100">0</button>
            <button onClick={() => handleClick('.')} className="rounded-full py-4 px-7 md:py-6 md:px-12 cursor-pointer  font-extrabold md:text-2xl bg-lime-100">.</button>
            <button onClick={back}  className="rounded-full  md:py-6 md:px-12 py-4 px-6 cursor-pointer  md:font-extrabold text-2xl bg-lime-200"><FaBackspace /></button>
            <button  onClick={solution}  className="rounded-full py-4 px-6  md:py-6 md:px-12  cursor-pointer  md:font-extrabold text-2xl bg-lime-400">=</button></div>

        </div>
      </div>
    </>
  )
}

export default App
