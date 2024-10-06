import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { logo } from "../Landingassets";  // Assuming you have a logo in your assets

import Navbar from "./Navbar";


const TeamMemberCard = ({ name, position, image, socialLinks }) => {
    const [isHovered, setIsHovered] = useState(false);

  
  

    return (
        <div
            className={`flex flex-col justify-between px-10 py-12 rounded-[20px] border-2 border-[#0066FF] bg-white text-black feedback-card h-[400px] w-[250px] 
            transition duration-200 relative ${isHovered ? "bg-[#E6F4F2] text-black" : "hover:bg-[#E6F4F2] hover:text-black"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-grow text-center">
                <img
                    src={image}
                    alt={name}
                    className="w-[120px] h-[120px] rounded-full mx-auto mb-6 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="font-poppins font-bold text-[24px] leading-[36px] mb-2">
                    {name}
                </h3>
                <p className="font-poppins font-semibold text-[18px] leading-[28px] text-gray-700 mb-4">
                    {position}
                </p>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                        <FaLinkedin className="text-[#0066FF] text-[24px] hover:text-black" />
                    </a>
                )}
                {socialLinks.github && (
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                        <FaGithub className="text-[#0066FF] text-[24px] hover:text-black" />
                    </a>
                )}
                {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                        <FaInstagram className="text-[#E1306C] text-[24px] hover:text-black" />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                        <FaTwitter className="text-[#1DA1F2] text-[24px] hover:text-black" />
                    </a>
                )}
            </div>
            {isHovered && (
                <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 text-white bg-[#0066FF] rounded-md mt-2 py-1 px-3 shadow-lg transition-transform duration-300 scale-95">
                    {position === "Team Lead" ? "Team Lead" : " Member"}
                </div>
            )}
        </div>
    );
};

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Himanshu Ladekar",
            position: "Member",
            image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?uid=R105029710&ga=GA1.1.1023024357.1725649721&semt=ais_hybrid",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/himanshuladekar",
                github: "https://github.com/himanshuladekar",
                instagram: "https://www.instagram.com/himanshuladekar",
                twitter: "https://twitter.com/himanshuladekar",
            },
        },
        {
            name: "Sumit Sahani",
            position: "Team Lead", // Position remains the same
            image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?uid=R105029710&ga=GA1.1.1023024357.1725649721&semt=ais_hybrid", // Image swapped with Sumit's

            socialLinks: {
                linkedin: "https://www.linkedin.com/in/sumitsahani",
                github: "https://github.com/Sumitsahani",
                instagram: "https://www.instagram.com/sumitsahani",
                twitter: "https://twitter.com/sumitsahani",
            },
        },
        {
            name: "Ashita Shau",
            position: "Member", // Position remains the same
            image: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611740.jpg?uid=R105029710&ga=GA1.1.1023024357.1725649721&semt=ais_hybrid", // Image swapped with Ashita's
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ashitashau",
                github: "https://github.com/ashitashau",
                instagram: "https://www.instagram.com/ashitashau",
                twitter: "https://twitter.com/ashitashau",
            },
        },
        {
            name: "Rohan Singh",
            position: "Member",
            image: "https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021955.jpg?uid=R105029710&ga=GA1.1.1023024357.1725649721&semt=ais_hybrid",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/rohan-singh",
                github: "https://github.com/rohansingh",
                instagram: "https://www.instagram.com/rohansingh",
                twitter: "https://twitter.com/rohansingh",
            },
        },
    ];


    
  
    return (
        <>
      
        <div className="bg-white-100 px-64">
        <Navbar/>
            <h1 className="text-center text-[36px] font-poppins font-bold text-[#333] mb-10">
                Meet Our Team
            </h1>
            <div className="flex justify-center overflow-x-auto">
                <div className="flex flex-nowrap gap-10">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
        
    );
};

export default TeamPage;