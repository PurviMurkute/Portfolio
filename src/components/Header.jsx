import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function ScrollHandler() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex justify-center">
      <div className="fixed top-0 w-[95%] md:w-2/3 border-1 border-pink-500 rounded-full shadow-lg my-2">
        <div className="flex justify-between px-5 py-2">
          <Link to="#home">
            <h3 className="text-white font-bold text-2xl">Purvi ❤️</h3>
          </Link>
          <IoMdMenu className="text-white fixed right-5 top-4 text-3xl" onClick={toggleMenu}/>
          <div className="hidden md:flex justify-evenly text-white font-bold gap-5 pt-1">
            <ScrollHandler />
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Pojects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className={`md:hidden text-white font-bold w-[80%] h-screen fixed right-0 px-7  bg-pink-900 ${isMenuOpen? 'flex flex-col gap-5 pt-15 z-10': "hidden"}`}>
        {isMenuOpen? <RxCross2 onClick={toggleMenu} className="fixed right-4 top-3 text-2xl"/>: null}
            <ScrollHandler />
            <a href="#home" className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black transition-all duration-300" onClick={()=>setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#skills" className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black" onClick={()=>setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black" onClick={()=>setIsMenuOpen(false)}>
              Pojects
            </a>
            <a href="#contact" className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black" onClick={()=>setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
    </div>
  );
};

export default Header;
