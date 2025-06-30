import Image from 'next/image';
import React from 'react';
import vlogo from '@/assets/images/2.png';
import { infoList, toolsData } from '@/assets/assets';

// type Props = {
//     isDarkMode: boolean;
// };

const About = () => {
//const About: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <div id='about' className="w-full px-4 sm:px-8 lg:px-[12%] py-8 sm:py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">Introduction</h4>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo">About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20 my-12 sm:my-16 lg:my-20'>
            <div className='w-48 sm:w-64 lg:w-80 rounded-3xl max-w-none'>
                <Image src={vlogo} alt='user' className="w-full rounded-3xl" />
            </div>
            <div className="flex-1">
                <p className='mb-8 sm:mb-10 max-w-2xl font-Ovo text-sm sm:text-base'> 
                    I am Fullstack Web and Mobile Developer with a passion in creating seamless applications. 
                    I have collaborated with teams to create and contribute to their success and growth.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl font-Outfit'>
                    {infoList.map(({icon, title, description}, index)=>(
                        <li className='transform transition border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-[#fcf4ff]
                        hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]' key={index}>
                            <Image src={icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3'/>
                            <h3 className='my-3 sm:my-4 font-semibold text-gray-700 text-sm sm:text-base'>{title}</h3>
                            <p className='text-gray-600 text-xs sm:text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
            

                <h4 className="my-4 sm:my-6 text-gray-700 font-Ovo text-base sm:text-lg">Tools I Use</h4>

                <ul className="flex items-center gap-2 sm:gap-3 lg:gap-5 flex-wrap">
                    {toolsData.map((tool, index)=>(
                        <li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border
                         border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                        key={index}>
                            <Image src={tool} alt='Tool' className='w-4 sm:w-5 lg:w-7' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default About;