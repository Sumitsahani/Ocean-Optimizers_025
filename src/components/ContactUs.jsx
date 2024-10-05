// src/components/ContactUs.jsx

import React from 'react';

// Sample data for team members
const teamMembers = [
  {
    id: 1,
    name: "Himanshu Ladekar",
    position: "Junior Developer",
    email: "Himanshu@example.com",
    phone: "+919134567890",
    image: "./him.jpg",
    linkedin: "https://www.linkedin.com/in/himanshuladekar",
    github: "https://github.com/himanshuladekar"
  },
  {
    id: 2,
    name: "Sumit Sahani",
    position: "Senior Developer",
    email: "Abhishek@example.com",
    phone: "+919134567891",
    image: "./sumit.jpeg",
    linkedin: "",
    github: "https://github.com/Sumitsahani"
  },
  {
    id: 3,
    name: "Ashita Shau",
    position: "CTO & Developer",
    email: "Gourav@example.com",
    phone: "+919134567892",
    image: "./Ashita.png",
    linkedin: "https://www.linkedin.com/in/gouravchoudhary",
    github: "https://github.com/gouravchoudhary"
  },
  {
    id: 4,
    name: "Rohan Singh",
    position: "Tester & Developer",
    email: "Abhishek1@example.com",
    phone: "+919134567893",
    image: "./rohan.PNG",
    linkedin: "https://www.linkedin.com/in/abhishekrewatkar",
    github: "https://github.com/abhishekrewatkar"
  }
];

const ContactUs = () => {
  return (
    <div className="px-5 py-10 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

      <div className="flex flex-wrap justify-between gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-blue-500 text-white rounded-lg shadow-lg w-full md:w-[calc(50%-10px)] text-center p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 transition-transform transform hover:scale-110"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <h3 className="text-md mb-2">{member.position}</h3>

            <div className="my-2">
              <a href={`mailto:${member.email}`} className="text-white mx-2 hover:text-gray-300">
                <i className="fas fa-envelope"></i>
              </a>
              <a href={`tel:${member.phone}`} className="text-white mx-2 hover:text-gray-300">
                <i className="fas fa-phone"></i>
              </a>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
