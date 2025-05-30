import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-[#181c24] text-white py-6 px-4'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
				<p className='text-center text-sm md:text-base font-light'>
					© {year} <span className='font-semibold'>Sarthak Dubey</span>. All rights reserved.
				</p>

				<div className='flex space-x-4 text-xl'>
					<a
						href='mailto:dubeysarthak47@gmail.com'
						aria-label='Email'
						className='hover:text-red-400 transition transform hover:scale-110'
					>
						<FiMail />
					</a>
					<a
						href='https://www.linkedin.com/in/sarthak-dubey-1b63ab250/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className='hover:text-blue-500 transition transform hover:scale-110'
					>
						<AiFillLinkedin />
					</a>
					<a
						href='https://github.com/sarthakdubeyy12'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className='hover:text-gray-400 transition transform hover:scale-110'
					>
						<FaGithub />
					</a>
					<a
						href='https://www.instagram.com/_sarthak_dubeyyy_/?igsh=bTZyNjZ4MWlpanR2'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Instagram'
						className='hover:text-pink-500 transition transform hover:scale-110'
					>
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
