import photo from "./../assets/photo.png";
import linkedin from "./../assets/linkedin.png";
import peerlist from "./../assets/peerlist.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll } from "motion/react";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div
      name="home"
      className="md:h-[670px] bg-gradient-to-b from-black via-gray-950 to-gray-900"
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="w-full h-3 bg-pink-600 fixed top-0 left-0"
      ></motion.div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-15 min-h-screen px-5">
        <div className="mt-20 md:mt-5 p-2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Hello!
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            I am{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 inline-block text-transparent bg-clip-text">
              Purvi Murkute,
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Backend Developer",
              1000,
              "React Js Developer",
              1000,
              "Programmer",
              1000,
            ]}
            wrapper="h3"
            repeat={Infinity}
            className="text-2xl md:text-3xl text-white"
          />
          <p className="text-gray-400 md:w-[450px] my-3 font-medium">
            Full Stack Developer driven by the challenge of building seamless,
            scalable web experiences. I enjoy turning ideas into reliable
            systems that not only work flawlessly but feel intuitive. From clean
            UI flow to solid backend logic - I bring it all together with
            clarity and purpose.
          </p>
          <div className="flex gap-2 my-3">
            <Link
              to="https://github.com/PurviMurkute"
              smooth={true}
              duration={200}
            >
              <FaGithub className="w-[50px] h-[50px] text-white p-2 rounded-full border-1 border-pink-500" />
            </Link>
            <Link to="https://www.linkedin.com/in/PurviMurkute">
              <img
                src={linkedin}
                alt="icon"
                className="w-[50px] p-2 rounded-full border-1 border-pink-500 "
              />
            </Link>
            <Link to="https://peerlist.io/purvimurkute">
              <img
                src={peerlist}
                alt="icon"
                className="w-[50px] p-2 rounded-full border-1 border-pink-500 "
              />
            </Link>
          </div>
          <div className="flex justify-start md:block gap-3">
            <button
              onClick={() => {
                window.open("/resume.pdf", "_blank");
              }}
              className="text-md md:text-xl text-pink-100 bg-gradient-to-b from-orange-950 to-transparent font-bold px-6 py-2 rounded-full my-3 md:me-2 border-1 border-pink-300 shadow-2xl cursor-pointer hover:scale-95 transition-transform duration-200"
            >
              Resume
            </button>
            <Link to="contact">
              <button className="text-md md:text-xl text-pink-100 bg-gradient-to-b from-orange-950 to-transparent font-bold px-6 py-2 rounded-full my-3 border-1 border-pink-300 shadow-2xl cursor-pointer hover:scale-95 transition-transform duration-200">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="my-5 md:mt-5">
            <img
              src={photo}
              alt="profile"
              className="object-cover rounded-full h-[290px] w-[270px] md:h-[400px] md:w-[400px] bg-gradient-to-b from-blue-950 to-pink-950 overflow-hidden"
              style={{ boxShadow: "0px 0px 10px 1px #ff80bf" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
