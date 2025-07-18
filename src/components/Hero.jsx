import photo from "./../assets/photo.png";
import github from "./../assets/github.png";
import linkedin from "./../assets/linkedin.png";
import peerlist from "./../assets/peerlist.png";
import { Sparkle } from "lucide-react";
import Header from "./Header";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-pink-900 to-rose-900">
      <Header />
      <div className="flex justify-center items-center">
        <div className="mt-10">
          <h1 className="text-5xl font-extrabold text-white">Hello!</h1>
          <h2 className="text-5xl font-extrabold text-white mb-4">
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
            className="text-3xl text-white"
          />
          <p className="text-gray-400 w-[350px] my-3 font-medium">
            Full Stack Developer driven by the challenge of building seamless,
            scalable web experiences. I enjoy turning ideas into reliable
            systems that not only work flawlessly but feel intuitive. From clean
            UI flow to solid backend logic — I bring it all together with
            clarity and purpose.
          </p>
          <div className="flex gap-2 my-3">
            <Link to="https://github.com/PurviMurkute">
              <img
                src={github}
                alt="icon"
                className="w-[50px] p-2 rounded-full border-1 border-pink-500 "
              />
            </Link>
            <Link to="https://www.linkedin.com/in/purvi-murkute-72b914234/">
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
        </div>
        <div>
          <div>
            <img
              src={photo}
              alt=""
              className="object-cover min-h-screen w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
