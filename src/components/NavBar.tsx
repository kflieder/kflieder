import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext';

function NavBar({setActiveTab, activeTab}: {setActiveTab?: (tab: 'projects' | 'prices' | 'about' | 'contact') => void, activeTab: 'projects' | 'prices' | 'about' | 'contact'}) {
    // const [activeLocalTab, setLocalActiveTab] = useState<'projects' | 'prices' | 'about' | 'contact'>('projects');
    const activeLocalTab = activeTab
    const { lang, t } = useLanguage();
    function handleTabClick(tab: 'projects' | 'prices' | 'about' | 'contact') {
        
        setActiveTab?.(tab);
    }

    const activeTabStyles = "text-white font-bold underline underline-offset-4";

    const inactiveTabStyles = "block rounded opacity-80 hover:opacity-100 transform hover:scale-105 active:scale-110 transition duration-200 cursor-pointer w-full text-right ";

  return (
      <nav className="h-full w-full flex pb-4" aria-label="Primary">
         <ul className="flex gap-6 justify-center w-full">
          <li>
            <button
              onClick={() => {handleTabClick('projects')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'projects' ? activeTabStyles : ''}`}
            >
              {t('projects', lang)}
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('prices')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'prices' ? activeTabStyles : ''}`}
            >
              {t('prices', lang)}
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('about')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'about' ? activeTabStyles : ''}`}
            >
              {t('about', lang)}
            </button>
          </li>
          <li>
            <button
              onClick={() => {handleTabClick('contact')}}
              className={`${inactiveTabStyles} ${activeLocalTab === 'contact' ? activeTabStyles : ''}`}
            >
              {t('contact', lang)}
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar
