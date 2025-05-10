import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const sections = ["home", "about", "journey", "projects", "certificates", "contact"];

function SectionNavbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // section is active when it's near the center
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const linkClass = (id) =>
    `hover:text-green-600 ${
      activeSection === id ? "text-green-600 font-bold" : "text-gray-700"
    }`;

  return (
    <nav className="fixed mb-0 top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
       {/* Logo Image */}
        <Link to={"/"}>
          <div>
            <img src="/img/vslogo.png" alt="vs-logo" className='h-16 w-auto' />
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 font-bold font-3xl">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={linkClass(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-gray-700">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={linkClass(section)}
              aria-current={activeSection === section ? "page" : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default SectionNavbar;
