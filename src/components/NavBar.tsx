import React, { useState } from 'react'

function NavBar({setActiveTab}: {setActiveTab?: (tab: 'projects' | 'prices' | 'about' | 'contact') => void}) {
    const [activeLocalTab, setLocalActiveTab] = useState<'projects' | 'prices' | 'about' | 'contact'>('projects');

    function handleTabClick(tab: 'projects' | 'prices' | 'about' | 'contact') {
        setLocalActiveTab(tab);
        setActiveTab?.(tab);
    }

    const activeTabStyles = "text-white font-bold underline underline-offset-4";

    const inactiveTabStyles = "block rounded opacity-80 hover:opacity-100 transform hover:scale-105 active:scale-110 transition duration-200 cursor-pointer w-full text-right ";

  return (
    <div className="flex justify-center text-white sm:py-4 sm:w-34 pr-4 sm:order-2 order-1">
      <nav className="h-full flex sm:flex-col" aria-label="Primary">
         <ul className="flex sm:flex-col gap-2 justify-end">
          <li>
            <button
              onClick={() => {handleTabClick('projects')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'projects' ? activeTabStyles : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('prices')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'prices' ? activeTabStyles : ''}`}
            >
              Prices
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('about')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'about' ? activeTabStyles : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('contact')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'contact' ? activeTabStyles : ''}`}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
