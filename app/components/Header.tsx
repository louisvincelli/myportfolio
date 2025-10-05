import Image from 'next/image';
import React from 'react';
import handwave from '@/assets/images/handwave.png';
import gmail_icon from '@/assets/images/gmailicon.png';
import github_icon from '@/assets/images/githubicon.png';
import linkedin_icon from '@/assets/images/linkedinicon.png';
import vlogo from '@/assets/images/2.png';

// type Props = {
//     isDarkMode: boolean;
// };

const Header = () => {
//function Header({ isDarkMode }: Props) {
//const Header: React.FC<Props> = ({ isDarkMode }) => {

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <Image src={vlogo} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hello! <Image src={handwave} alt='handwave' className='w-6'/> I&apos;m Louis Vincelli
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
            Software Engineer based in North Carolina.
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
            I am a Fullstack web and mobile developer who has a passion for creating seamless applications!
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-1 mt-4'>
            {/* <a href="#contact" className='px-10 py-3 border border-white rounded-full
             bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 
            flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a> */}
            <a href="https://github.com/louisvincelli" download className='px-10 py-3 flex items-center gap-2'>
                <Image src={github_icon} alt='github' className='w-10'/>
            </a>
            <a href="https://www.linkedin.com/in/louis-vincelli-224940205/" download className='px-10 py-3 flex items-center gap-2'>
                <Image src={linkedin_icon} alt='linkedin' className='w-10'/>
            </a>
            <a href="#contact" download className='px-10 py-3 flex items-center gap-2'>
                <Image src={gmail_icon} alt='gmail' className='w-15'/>
            </a>
        </div>
    </div>
  );
};

export default Header;