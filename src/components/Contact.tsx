import React from 'react'
import { useLanguage } from '@/context/LanguageContext';
import ContactFormEng from './ContactFormEng';
import ContactFormEsp from './ContactFormSpanish';
import ContactFormSpanish from './ContactFormSpanish';

function Contact() {
  const { t, lang } = useLanguage();

  return (
    <div id="contact" className='px-5'>
      {
        lang === 'en' ? (<>
          <ContactFormEng />
        </>) : (<>
       <ContactFormSpanish />
        </>)
      }
    
      
    </div>
  )
}

export default Contact
