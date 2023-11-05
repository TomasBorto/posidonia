import headerLogo from '../assets/LOGO-POSIDONIA.png';
import { navLinks } from '../constants';
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("max-lg:translate-y-0")
  }

  const checkNavbar = () =>{
      if(navRef.current.classList.contains('max-lg:translate-y-0')){
          navRef.current.classList.toggle("max-lg:translate-y-0")
      }
  }
  
  return (
    <header className='bg-[#f5f5f7] flex padding-x py-8 max-lg:py-1 w-full max-lg:justify-between max-lg:fixed z-30 lg:h-[25vh]'>
        <a href='/' className='mr-6 pb-2 lg:hidden'>
          <img 
           src={headerLogo}
           alt='Logo'
           width={200}
           height={40}
          />
        </a>
        
        <nav className='max-lg:bg-white max-w-[1072px] flex justify-between max-lg:fixed items-center max-container top-0 max-lg:h-full max-lg:w-full max-lg:-translate-x-[8%] max-lg:items-center max-lg:justify-center max-lg:flex-col-reverse max-lg:gap-4 z-50 max-lg:-translate-y-full ease-in-out duration-1000' ref={navRef}>
            <a href='/' className='mr-6 pb-2 max-lg:hidden'>
              <img 
               src={headerLogo}
               alt='Logo'
               width={260}
               height={60}
              />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:flex-col'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={checkNavbar} className='font-montserrat leading-normal text-lg text-slate-gray' >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            <button className="text-[40px] max-lg:pt-20 lg:hidden absolute top-0 right-8 mr-2" onClick={showNavbar}>
                    <FaTimes />
            </button>
        </nav>
        <button className=" lg:absolute top-6 right-3 lg:hidden text-[40px] mr-2" onClick={showNavbar}>
                <FaAlignRight />
        </button>
    </header>
  )
}

export default Nav