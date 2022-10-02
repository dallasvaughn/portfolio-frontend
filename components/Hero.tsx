import { NextPage } from 'next';
import Image from 'next/image';
import crow from '../public/crow-fly.svg';

const Hero: NextPage = () => {
  return (
    <div className="relative top-0 mb-20">
      <div className="h-10 sm:h-20"></div>
      <div className="md:animate-fade-in relative opacity-0 min-h-[450px] sm:min-h-[500px] crow">
        <Image src={crow} alt="crow" layout="fill" />
      </div>
      <div className="absolute w-full h-full top-0 flex align-center justify-center">
        <div className="absolute w-full h-full z-0 backdrop-blur-sm"></div>
        <div className="my-auto z-10 font-['Kanit'] text-5xl sm:text-8xl font-black uppercase flex flex-col lg:animate-fade-in-right">
          <span className="sm:text-right">Frontend</span>
          <span className="bg-neutral-300/60 border border-black py-3 sm:py-5 px-5 sm:px-10">
            Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
