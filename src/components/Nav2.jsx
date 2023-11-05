import Logo from '../assets/Logo1.jpg';
import { AiOutlineHome, AiOutlineGift } from 'react-icons/ai';
import { FaRecycle } from 'react-icons/fa6';
import { RiApps2Line } from 'react-icons/ri';

const Nav2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 fixed z-50">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              <img src={Logo} className="w-8" alt="" />
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              <li className="min-w-max">
                <a href="#home" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                  <AiOutlineHome className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Home</span>
                </a>
              </li>
              <li className="min-w-max">
                <a href="#beneficios" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                  <AiOutlineGift className="h-5 w-5" />
                  <span className="group-hover:text-gray-700">Categories</span>
                </a>
              </li>
              <li className="min-w-max">
                <a href="#carbono" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                  <FaRecycle className="h-5 w-5" /> 
                  <span className="group-hover:text-gray-700">Carbono</span>
                </a>
              </li>
              <li className="min-w-max">
                <a href="#" className="relative flex items-center space-x-4 bg-gradient-to-r from-amber-700 to-amber-300 px-4 py-3 text-white">
                  <RiApps2Line className="h-5 w-5" />
                  <span className="group-hover:text-gray-700">DAPP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav2