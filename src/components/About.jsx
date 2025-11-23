import React from 'react'

const About = () => {
  return <div name="about" className="w-full h-screen bg-gradient-to-b from-blue-800 to-black via-blue text-white"
  >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8 ">
                <p className="text-4xl font-bold text-pink-400 inline border-b-4 border-white-500">
                About
                </p>
            </div>

            <p className="text-xl mt-20">
              I am a full stack developer for about half a year of experience in building scalable products.
                    
                          I have participated in a number of tech programs where I acquired both technical and soft skills. 
                          I have also acquired high level  <br />
                          programming skills from online courses. I am a self-taught software developer with a strong discipline to learn, improve, and evolve.
                    
                          When I am not coding, I am either playing Video game, watching a movie, reading a book, at the gym or playing the guirtar. Other times
                          I am reading or learning a new language or framework.  <br />
                        
                          Currently looking for entry level as Back-end or front-end position at the moment
            </p>

            <br />
        </div>

    </div>;
}

export default About