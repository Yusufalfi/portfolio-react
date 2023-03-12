import React from 'react'
import { social } from '../data'

const Social = () => {
  return <ul className='flex space-x-6'>
    {social.map((item, index) => {
        return <li className='flex justify-center items-center text-accent' key={index}>
            <a className='text-xl' href={item.href}  target="_blank"  rel="noreferrer">
                {item.icon}
            </a>
        </li>
    })}
  </ul>
}

export default Social