import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router'

function Navbar() {

  const [open, setOpen] = useState(false); 
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Image */}
        <Link to={"/"}>
          <div>
            <img src="/img/vslogo.png" alt="vs-logo" className='h-16 w-auto' />
          </div>
        </Link>

        {/* <div className="hidden md:flex space-x-6 font-bold font-3xl">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
          <Link to="/certificates" className="text-gray-700 hover:text-blue-600">Certificates</Link>
          <Link to="/skills" className="text-gray-700 hover:text-blue-600">Skills</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div> */}

        <div className="hidden md:flex space-x-6 font-bold font-3xl">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('timeline')}>Services</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar