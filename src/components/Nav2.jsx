import Logo from '../assets/LOGO.png';
import { AiOutlineHome, AiOutlineCodeSandbox } from 'react-icons/ai';
import { FaRecycle } from 'react-icons/fa6';
import { RiApps2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav2 = () => {

  const [ active1, setActive1 ] = useState(true)
  const [ active2, setActive2 ] = useState(false)
  const [ active3, setActive3 ] = useState(false)

  const activeStyle = 'relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white';
  const noActiveStyle = 'bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600'

  return (
    <div className="min-h-screen bg-gray-100 fixed z-50">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              <img src={Logo} className="w-10" alt="" />
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              <li className="min-w-max">
                <a href='/#home' aria-label="dashboard" onClick={() => {setActive1(true); setActive2(false); setActive3(false)}} className={(active1) ? activeStyle : noActiveStyle}>
                  <AiOutlineHome className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Home</span>
                </a>
              </li>
              <li className="min-w-max">
                <a href="/#beneficios" onClick={() => {setActive1(false); setActive2(true); setActive3(false)}} className={(active2) ? activeStyle : noActiveStyle}>
                  <AiOutlineCodeSandbox className="h-5 w-5" />
                  <span className="group-hover:text-gray-700">Beneficios</span>
                </a>
              </li>
              <li className="min-w-max">
                <a href="/#carbono" onClick={() => {setActive1(false); setActive2(false); setActive3(true)}} className={(active3) ? activeStyle : noActiveStyle}>
                  <FaRecycle className="h-5 w-5" /> 
                  <span className="group-hover:text-gray-700">Posidonia</span>
                </a>
              </li>
              <li className="min-w-max">
                <Link to='/dapp' onClick={() => {setActive1(false); setActive2(false); setActive3(false)}} className="relative flex items-center space-x-4 bg-gradient-to-r from-amber-700 to-amber-300 px-4 py-3 text-white">
                  <RiApps2Line className="h-5 w-5" />
                  <span className="group-hover:text-gray-700">DAPP</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav2