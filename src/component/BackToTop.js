import React, {useState, useEffect} from 'react'

import {animateScroll as scroll} from 'react-scroll'
import {ChevronUpIcon} from '@heroicons/react/outline'


const BackToTop = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        });
    });

    const scrollTop = () => {
        scroll.scrollToTop();
    }
  return show && <button onClick={() => scrollTop()} className='bg-accent w-12 h-12 text-white rounded-full fixed right-5 bottom-14 cursor-pointer flex justify-center items-center transition-all z-50  '><ChevronUpIcon className='w-6 h-6'/></button>
}

export default BackToTop