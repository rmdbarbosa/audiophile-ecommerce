import React from 'react'

const links = ["home","headphone","speakers","earphones"]

export default function DesktopMenu() {
  return (
    <ul className='hidden lg:flex lg:gap-6 text-white z-30 uppercase text-xs font-bold'>
        {links.map(link => <li className='cursor-pointer hover:text-orange-400 transition-colors' key={link}>{link}</li>)}
    </ul>
  )
}
