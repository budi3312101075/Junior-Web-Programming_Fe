import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="lg:flex  px-10 bg-tertiary text-base-content ">
        <aside className="ml-5 mr-10">
          <img className="w-20 mx-auto -mb-4" src="./osis.png" alt="logo" />
          <p className="w-72 mt-16">
            Bida Asri 3, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau
            29466
          </p>
        </aside>
        <div className="grid lg:grid-cols-4 gap-20 mt-10 sm:mt-0">
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              Program
            </h1>
            <a className="link link-hover">Course</a>
            <a className="link link-hover">Bootcamp</a>
            <a className="link link-hover">Event</a>
            <a className="link link-hover">MSIB</a>
            <a className="link link-hover">Internship</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              Community
            </h1>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">News</a>
          </nav>
          <nav className="flex flex-col">
            <h1 className="lg:text-3xl text-xl text-white font-semibold">
              About
            </h1>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Career</a>
          </nav>
          <div className="text-center">
            <h1 className="lg:text-2xl text-xl text-white font-semibold">
              Our Social Media
            </h1>
            <div className="flex justify-between mt-5 ">
              <FaInstagram size={50} />
              <FaLinkedin size={50} />
              <FaTiktok size={50} />
            </div>
            <p className="text-end mt-10">089519113444</p>
            <p className="text-end">budiprayoga@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="py-3 text-xs text-center bg-[#212130] tracking-wide sm:text-xs">
        <h1>Copyright © 2024 | Budi Prayoga </h1>
      </div>
    </>
  );
};

export default Footer;
