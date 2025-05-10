import React from 'react'

function SocialLinks() {

  const links = [
    { href: "https://wa.me/+91-7447330710?text=Hello,%20Buddy.", icon: '/icons/whatsapp.png', alt: 'WhatsApp' },
    { href: "https://www.linkedin.com/in/vivekkumarsingh09/", icon: '/icons/linkedin.png', alt: 'LinkedIn' },
    { href: "https://x.com/VivekSingh__09", icon: '/icons/twitter.png', alt: 'Twitter' },
    { href: "https://github.com/Vivekkumar-09", icon: '/icons/github.png', alt: 'GitHub' },
  ];
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition"
        >
          <img
            src={link.icon}
            alt={link.alt}
            className="w-10 h-10 rounded-none transition-all duration-700 ease-in-out hover:rounded-full"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks