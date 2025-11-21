import React from 'react'
import { useLanguage } from '@/context/LanguageContext';
import ContactFormEng from './ContactFormEng';

function Contact() {
  const { t, lang } = useLanguage();

  return (
    <div id="contact" className='px-5'>
      {
        lang === 'en' ? (<>
          <ContactFormEng />
        </>) : (<>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxjIPOzNKR6TBi84d4USURBb4lpMvPa_Bona3U0y2KyXhyLA/viewform?embedded=true" width="100%" height="3000"  >Loading…</iframe>
        </>)
      }
    
      
    </div>
  )
}

export default Contact
