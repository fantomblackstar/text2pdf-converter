import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import BurgerIcon from "../../assets/icons/BurgerIcon";
import { HEADER_NAV_ITEMS } from "../../constants/layouts";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Container from "../Container/Container";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useOutsideClick(() => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md relative">
      <Container className="flex justify-end items-center py-4 relative">
        <div className="text-3xl font-bold text-gray-700 z-30 absolute left-4 top-1/2 -translate-y-1/2">
          Text2Pdf
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-800 text-xl">
          {HEADER_NAV_ITEMS.map((navItem, index) => (
            <a
              key={`NavItem ${index}`}
              href={navItem.href}
              className="hover:text-gray-600">
              {navItem.title}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none">
            <BurgerIcon />
          </button>
        </div>
      </Container>
      <nav
        ref={mobileNavRef}
        className={twMerge(
          "md:hidden w-full -top-20 ease-in duration-300 absolute z-10 bg-white shadow-md flex flex-col items-center text-gray-800 text-xl pb-4 gap-2",
          isOpen && "top-[calc(100%-5px)]",
        )}>
        {HEADER_NAV_ITEMS.map((navItem, index) => (
          <a
            key={`MobileNavItem ${index}`}
            href={navItem.href}
            className="hover:text-gray-600"
            onClick={toggleMenu}>
            {navItem.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
