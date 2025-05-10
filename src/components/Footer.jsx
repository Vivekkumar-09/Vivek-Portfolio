import React from 'react'
import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="bg-[#ede7e1] text-green-900 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left Text */}
        <div className='text-center font-bold'>
          <p>No © copyright issues.</p>
          <p>Feel free to reach out to me.</p>
          <p>I'm here and ready to help, ping me!</p>
        </div>

        {/* Center Signature */}
        <div className='text-center'>
          <h1 className="text-5xl font-signature text-orange-500">Vivek Kumar Singh</h1>
          <p className="flex items-center justify-center gap-1">
            Designed and Built in <img src='/icons/India_Flag.png' alt='INDIA' className='w-6 h-4 object-cover inline-block rounded-sm shadow-sm'></img> with <span className="text-blue-800 font-semibold">Pride</span>.
          </p>
        </div>

        {/* Social Icons */}
        <div className='text-center'>
          <p className="font-semibold">You can find me <span className="text-red-700 animate-fade-right animate-infinite">everywhere</span>.</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer