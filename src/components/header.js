import { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/logo.svg";

const Header = ({ visibility, setNavbar }) => {
  console.log(visibility);
  return (
    <div className="flex flex-col">
      <div className="w-screen flex flex-row justify-between h-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center h-[62px] sm:h-[92px] px-5 py-2.5 sm:py-5">
            <img src={Logo} alt="logo" className="w-[34px] h-[42px]" />
            <button className="anim-button" onClick={setNavbar}>
              <div className={`${visibility ? "invisible" : ""}`}></div>
              <div></div>
              <div className={`${visibility ? "invisible" : ""}`}></div>
            </button>
          </div>
          <div
            className={`flex flex-grow flex-col pl-[250px] overflow-y-auto header${
              visibility ? "-expanded" : ""
            }`}
          >
            <div className="flex flex-col pt-5">
              <a href="#" className="nav-text-item">
                About
              </a>
              <div className="h-[1px] bg-white opacity-10"></div>
            </div>
            <div className="flex flex-col pt-5">
              <a href="#" className="nav-text-item">
                Marketplace
              </a>
              <div className="h-[1px] bg-white opacity-10"></div>
            </div>
            <div className="flex flex-col pt-5">
              <a href="#" className="nav-text-item">
                Features
              </a>
              <div className="h-[1px] bg-white opacity-10"></div>
            </div>
            <div className="flex flex-col pt-5">
              <a href="#" className="nav-text-item">
                Contact Us
              </a>
              <div className="h-[1px] bg-white opacity-10"></div>
            </div>
            <div className="flex flex-row pt-11 justify-between items-center font-sfui">
              <span className="font-semiold text-2xl text-gold leading-[28.8px]">
                Subscribe for News, Updates and Articles
              </span>
              <div className="flex flex-row"></div>
              <div className="flex flex-row p-1 border-solid border-[1px] border-hint-text rounded-md justify-between">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="text-xl leading-6 p-4 text-white placeholder:text-hint-text"
                />
                <button className="bg-white font-bold text-base leading-4 px-6 py-4 text-black rounded">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col shrink-0 gap-5 items-center px-5 py-2.5 sm:py-5">
          <button className="bg-gold h-full font-sfui font-bold text-sm leading-[14px] px-6 rounded text-dark-text">
            VIEW PRESENTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
