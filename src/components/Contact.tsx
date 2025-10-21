import React from 'react'
import { useLanguage } from '@/context/LanguageContext';

function Contact() {
  const { t, lang } = useLanguage();

  return (
    <div id="contact" className='sm:h-[1995px] h-[2500px] md:h-[2300px] overflow-hidden'>
      {
        lang === 'en' ? (<>
          <iframe className='scrollbar-hide' src="https://docs.google.com/forms/d/e/1FAIpQLSdqmqK2Sk-t2ilyrWpacRPmC4BRedSOWOaxq_-5ACrnoY7cKw/viewform?embedded=true" width="100%" height="3000">Loading…</iframe>
        </>) : (<>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxjIPOzNKR6TBi84d4USURBb4lpMvPa_Bona3U0y2KyXhyLA/viewform?embedded=true" width="100%" height="3000"  >Loading…</iframe>
        </>)
      }
    
      
    </div>
  )
}

export default Contact
