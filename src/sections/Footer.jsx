import { navLinks, socialMedia } from '../constants';

const Footer = () => {

  return (
    <footer className="py-6 bg-[#f5f5f7] pt-16 flex justify-evenly">
        <div>
            <ul className='flex-1 flex justify-center items-center gap-8 max-lg:flex-col'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black' >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
        </div>
        <div>
            <ul className='flex-1 flex justify-center items-center gap-8 max-lg:flex-col'>
                {socialMedia.map((item) => (
                  <li key={item.icon}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'>
                      {item.icon}
                    </a>
                  </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer