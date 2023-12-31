import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-blue to-blue-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-pink-500">
            I'm a Web Developer
          </h2>
          <p className="text-pink-500 italic py-4 max-w-md">
            I am a full stack developer for about half a year of experience in building scalable products.
      
            I have participated in a number of tech programs where I acquired both technical and soft skills. 
            I have also acquired high level  <br />
            programming skills from online courses. I am a self-taught software developer with a strong discipline to learn, improve, and evolve.
      
            When I am not coding, I am either playing Video game, watching a movie, reading a book, at the gym or playing the guirtar. Other times
            I am reading or learning a new language or framework.  <br />
          
            Currently looking for entry level as Back-end or front-end position at the moment
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;