import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl ">
            <p>Please take a look around.</p>
          </div>
          <div>
            <p className='text-2xl'>I was born and raised for 10 years in Paraguay. I have developed an appreciation for the country's culture and heritage. Being of Korean descent, I embrace my culture, which has allowed me to appreciate and respect the diverse backgrounds and cultures of others throughout my life.

            Beyond my cultural background, I have developed a love for anime. Some of my favorite shows recently include Hunter x Hunter, Blue Lock, and Haikyuu, among many others. Additionally, I have found interest in video games, with my current favorite being Call of Duty (Warzone 2.0).

            Apart from my indoor hobbies, I also enjoy traveling. I believe that traveling broadens one's perspective of the world and exposes us to the beautiful cultures of different countries and states. Lastly, I find great enjoyment in practicing volleyball with my friends at the ECU Rec Center.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


