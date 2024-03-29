import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ title, desc, imgSrc, btnText, btnShow }) {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-x-20 gap-y-10 bg-green-900 p-6 md:px-20 lg:px-40 lg:py-20'>
        <div className='md:w-3/4'>
          <h1 className='text-3xl font-extrabold mb-6 text-white'>{title}</h1>
          <p className='text-base font-normal mb-8 text-white'>{desc}</p>
          {btnShow && (
            <Link to={'/inovasi'}>
            <button className='bg-orange-600 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center gap-3'>
              <p>{btnText}</p>
              <img src="Arrow-right.svg" alt="" />
            </button>
            </Link>
          )}
        </div>
        <div className='flex items-center justify-center self-stretch md:w-3/4'>
          <img className='rounded' src={imgSrc} alt="" srcset="" />
        </div>
      </div>
    </>
  )
}

export default Hero