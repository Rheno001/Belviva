import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#f9fafb] text-gray-700 border-t py-8 px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#7C9CA2] mb-1">Belviva</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        {/* Socials */}
        <div className="flex space-x-4 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C9CA2]">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C9CA2]">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C9CA2]">
            <FaLinkedin />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C9CA2]">
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Belviva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
