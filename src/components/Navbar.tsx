import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {Login} from "../features/auth/login"
import {Register} from "../features/auth/register"

import LOGO from "../assets/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
    <div className="relative flex items-center justify-between px-15 py-7">
      <div className="flex-shrink">
        <img className="w-24 h-24" src={LOGO} alt="" />
      </div>

      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 font-semibold text-white gap-10">
        <li>HOME</li>
        <li>CLASSES</li>
        <li>MEMBERSHIPS</li>
        <li>ABOUT</li>
      </ul>

      <div className="flex-shrink-0 flex items-center gap-5 text-white">
        <ul className="hidden md:flex font-semibold gap-6">
          <li className='cursor-pointer' onClick={() => setOpenModalLogin(true)}>LOGIN</li>
          <li className='cursor-pointer' onClick={() => setOpenModalRegister(true)}>SIGN UP</li>
          {openModalLogin && <Login onClose={() => setOpenModalLogin(false)} />}
          {openModalRegister && <Register onClose={() => setOpenModalRegister(false)} />}
        </ul>
    
   
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>
      </div>
    </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-5 pb-5 font-semibold text-white">
          <ul className="space-y-4 pt-4">
            <li>HOME</li>
            <li>CLASSES</li>
            <li>MEMBERSHIPS</li>
            <li>ABOUT</li>

            <li className="pt-4 border-t border-white/20 cursor-pointer" onClick={() => setOpenModalLogin(true)}>LOGIN
            
            </li>
            <li className='cursor-pointer'  onClick={() => setOpenModalRegister(true)}>SIGN UP</li>
            {openModalLogin && <Login onClose={() => setOpenModalLogin(false)} />}
            {openModalRegister && <Register onClose={() => setOpenModalRegister(false)} />}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
