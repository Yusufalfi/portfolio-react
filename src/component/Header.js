import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import NavMobile from './NavMobile'
// import Social from './Social'
// import { Link } from 'react-router-dom'

// import Logo from '../assets/img/logo.svg'

const Header = () => {

    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ?  setBg(true) : setBg(false)
        })
    })

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
                <h5>Welcome</h5> 
         <div className='hidden lg:block'>
            <Navbar />
         </div>          
                  
         <div className='lg:hidden'>
            <NavMobile />
         </div>          
        </div>
    </header>
  )
}

export default Header