import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:pt-12'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
          <img className='w-2/6 md:w-1/6' src="LOGODIPI.png" alt="" srcset="" />
          <div>
            <ul className='flex gap-2 md:gap-4 text-base font-normal'>
              <li>Tentang Kami</li>
              <li>Pusat Bantuan</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <ul className='flex gap-2'>
              <li><img src="Facebook.svg" alt="" srcset="" /></li>
              <li><img src="Facebook.svg" alt="" srcset="" /></li>
              <li><img src="Facebook.svg" alt="" srcset="" /></li>
              <li><img src="Facebook.svg" alt="" srcset="" /></li>
              <li><img src="Facebook.svg" alt="" srcset="" /></li>
            </ul>
          </div>
        </div>
        <div className='border-t-2 text-center pt-4'>
          <p className='text-sm font-thin'>
            Copyright © 2024 DukungInovasi | All Rights Reserved | &nbsp;
            <span className='font-normal underline'>Terms and Conditions</span> | &nbsp;
            <span className='font-normal underline'>Privacy Policy</span>
          </p>
        </div>

      </div>
    </>
  )
}

export default Footer