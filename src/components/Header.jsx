import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-[17vh] flex justify-between items-center z-40 border border-red-500'>
        <div className=' ml-[15vw] text-2xl'>
            Bahae Eddine Mhamdi
        </div>
        <nav className='flex justify-center gap-8 w-[50%] text-2xl'>
            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a> 
        </nav>
    </header>
  )
}

export default Header