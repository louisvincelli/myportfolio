import { assets, webData, mobileData, moreWebData, moreMobileData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// type Props = {
//     isDarkMode: boolean;
// };

const Projects = () => {
//const Projects: React.FC<Props> = ({ isDarkMode }) => {
  const [isWeb, setIsWeb] = useState(true);
  const [showMoreWeb, setShowMoreWeb] = useState(false);
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  return (
    <div id='projects' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            Welcome to my web and mobile development portfolio! Explore my collection of projects showcasing my expertise in Fullstack development.
        </p>

        <div className="flex justify-center gap-4 mb-8">
            <button
                onClick={() => setIsWeb(true)}
                className={`px-6 py-2 rounded-full font-Outfit transition-colors hover:cursor-pointer ${
                    isWeb ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                }`}
            >
                Web Projects
            </button>
            <button
                onClick={() => setIsWeb(false)}
                className={`px-6 py-2 rounded-full font-Outfit transition-colors hover:cursor-pointer ${
                    !isWeb ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                }`}
            >
                Mobile Projects
            </button>
        </div>

        <div className='grid-auto-fit my-10 gap-5 font-Outfit'>
        {/* {projectsData.map((project, index)=>(
                <div key={index}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                //put img in bg folder whenever using style or css setting images 
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex
                         items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-400 transition'>
                            <Image src={assets.send_icon} alt='sendicon' className='w-5'/>
                        </div>
                    </div>
                </div> */}
            {(isWeb ? webData : mobileData).map((project, index) => (
                <Link 
                    key={index} 
                    href={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3"
                >
                    <div
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                        py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex
                            items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-400 transition'>
                                <Image src={assets.send_icon} alt='sendicon' className='w-5'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {project.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="w-8 h-8 relative">
                                <Image 
                                    src={tool} 
                                    alt="tool icon" 
                                    className="object-contain"
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                </Link>
            ))}
        </div>

        {/* Additional web projects in separate grid - above the button */}
        {isWeb && showMoreWeb && (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-Outfit mb-8'>
                {moreWebData.map((project, index) => (
                    <Link 
                        key={`more-${index}`} 
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3"
                    >
                        <div
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                            style={{backgroundImage: `url(${project.bgImage})`}}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                            py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex
                                items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-400 transition'>
                                    <Image src={assets.send_icon} alt='sendicon' className='w-5'/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {project.tools.map((tool, toolIndex) => (
                                <div key={toolIndex} className="w-8 h-8 relative">
                                    <Image 
                                        src={tool} 
                                        alt="tool icon" 
                                        className="object-contain"
                                        fill
                                    />
                                </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        )}

        {/* Additional mobile projects in separate grid - above the button */}
        {!isWeb && showMoreMobile && (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-Outfit mb-8'>
                {moreMobileData.map((project, index) => (
                    <Link 
                        key={`more-mobile-${index}`} 
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3"
                    >
                        <div
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                            style={{backgroundImage: `url(${project.bgImage})`}}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                            py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex
                                items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-400 transition'>
                                    <Image src={assets.send_icon} alt='sendicon' className='w-5'/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {project.tools.map((tool, toolIndex) => (
                                <div key={toolIndex} className="w-8 h-8 relative">
                                    <Image 
                                        src={tool} 
                                        alt="tool icon" 
                                        className="object-contain"
                                        fill
                                    />
                                </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        )}

        {/* View More/Hide More button for web projects */}
        {isWeb && (
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowMoreWeb(!showMoreWeb)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-Outfit transition-colors hover:cursor-pointer text-sm sm:text-base ${
                        showMoreWeb 
                            ? 'bg-white text-black border-2 border-black' 
                            : 'bg-black text-white'
                    }`}
                >
                    {showMoreWeb ? 'Hide More' : 'View More'}
                </button>
            </div>
        )}

        {/* View More/Hide More button for mobile projects */}
        {!isWeb && (
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowMoreMobile(!showMoreMobile)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-Outfit transition-colors hover:cursor-pointer text-sm sm:text-base ${
                        showMoreMobile 
                            ? 'bg-white text-black border-2 border-black' 
                            : 'bg-black text-white'
                    }`}
                >
                    {showMoreMobile ? 'Hide More' : 'View More'}
                </button>
            </div>
        )}

        {/* <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
         border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 font-Outfit'>
            Show more 
            <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
        </a> */}

    </div>
  );
};

export default Projects;