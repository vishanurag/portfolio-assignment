import React from 'react'

const Header = () => {
  return (
    <nav className='w-[90%] pt-5 flex justify-between'>
      <div className='comforter-regular text-5xl z-10'><span className='text-red-500 '>A</span>nurag</div>
      <div className='desk-nav flex gap-8 mx-[-55px]'>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Home'>Home</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#About'>About</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Education'>Education</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Skills'>Skills</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Projects'>Projects</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Experience'>Experience</a>
        <a className='hover:pr-1 active:pr-0 hover:pt-1 transition-all duration-[0.3s] hover:text-purple-400 ' href='#Contact'>Contact</a>

      </div>
    </nav>
  )
}

export default Header
