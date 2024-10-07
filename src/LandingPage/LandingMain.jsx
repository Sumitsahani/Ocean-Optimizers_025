// src/LandingMain.jsx

import React, { useEffect, useState } from 'react';
import { Billing, Business, CardDeal, Chatbot, CTA, Footer, Hero, Navbar, Plans, Stats, Testimonials } from "./Landingcomponents";
import styles from "./style";

const LandingMain = () => {
  const [loading, setLoading] = useState(true);
  const [visibleIconIndex, setVisibleIconIndex] = useState(0);
  const icons = [
    '🔄', // Icon 1
    '⏳', // Icon 2
    '✨', // Icon 3
    '🚀', // Icon 4
    '🔁', // Icon 5
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3000 milliseconds (3 seconds)

    const iconChangeInterval = setInterval(() => {
      setVisibleIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 500); // Change icon every 500 milliseconds

    return () => {
      clearTimeout(timer); // Clean up timer on component unmount
      clearInterval(iconChangeInterval); // Clean up icon change interval
    };
  }, []);

  // Loader styles
  const loaderStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff', // Background color
    fontFamily: 'Poppins, sans-serif', // Adjust font-family as per your project
  };

  const iconStyles = {
    fontSize: '50px', // Adjust icon size
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const visibleIconStyle = {
    ...iconStyles,
    opacity: 1, // Make the visible icon fully opaque
  };

  const pStyles = {
    marginTop: '10px',
    fontSize: '18px',
    color: '#333', // Text color
  };

  if (loading) {
    return (
      <div style={loaderStyles}>
        <div>
          {icons.map((icon, index) => (
            <span
              key={index}
              style={index === visibleIconIndex ? visibleIconStyle : iconStyles} // LandingMainly visibility styles
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    ); // Show loader while loading
  }

  return (
    <div className="bg-white w-full overflow-hidden"> {/* Set background to white */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}> {/* Set background to white */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}> {/* Set background to white */}
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
          <Plans />
          <Chatbot/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
