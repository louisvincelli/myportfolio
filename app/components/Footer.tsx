import Image from 'next/image';
import React from 'react';
import logoname from '@/assets/images/logoname.png';
import mail_icon from '@/assets/images/mail_icon.png';

// type Props = {
//     isDarkMode: boolean;
// };

const Footer = () => {
//const Footer: React.FC<Props> = ({ isDarkMode }) => {
    //target='_blank' opens link in new tab
  return (
    <div className='mt-20 font-Outfit'>
        <div className='text-center'>
            <Image src={logoname} alt='logoname' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto font-Outfit'>
                <Image src={mail_icon} alt='mail' className='w-6'/>
                louisvincelli@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© {new Date().getFullYear()} Louis Vincelli. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/louisvincelli">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/louis-vincelli-224940205/">LinkedIn</a></li>
                <li><a href="#contact">Gmail</a></li>
            </ul>
        </div>

    </div>
  );
};

export default Footer;