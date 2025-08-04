import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="fixed top-0 w-[95%] md:w-2/3 border-1 border-pink-500 bg-gray-800/50 rounded-full shadow-lg my-3">
        <div className="flex justify-between px-5 py-2">
          <Link
            to="home"
            smooth={true}
            duration={200}
            className="cursor-pointer"
          >
            <div className="flex justify-center items-center gap-2">
              <FaCode className="inline text-pink-200 text-2xl" />
              <h3 className="text-white font-bold text-2xl">Purvi</h3>
            </div>
          </Link>

          <IoMdMenu
            className="text-white fixed right-6 top-5.5 text-3xl flex md:hidden"
            onClick={toggleMenu}
          />
          <div className="hidden md:flex justify-evenly text-white font-bold gap-5 pt-1">
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="cursor-pointer hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={200}
              className="cursor-pointer hover:text-pink-500"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={200}
              className="cursor-pointer hover:text-pink-500"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="cursor-pointer hover:text-pink-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden text-white font-bold w-[80%] h-screen fixed right-0 px-7  bg-pink-900 ${
          isMenuOpen ? "flex flex-col gap-5 pt-15 z-10" : "hidden"
        }`}
      >
        {isMenuOpen ? (
          <RxCross2
            onClick={toggleMenu}
            className="fixed right-4 top-3 text-2xl"
          />
        ) : null}
        <Link
          to="home"
          smooth={true}
          duration={200}
          className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={200}
          className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={200}
          className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={200}
          className="cursor-pointer p-3 rounded-md bg-gray-900/40 hover:bg-black transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
