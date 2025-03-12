import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Background_com() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="background-com container-fluid p-0 position-relative"
      style={{
        backgroundImage: `url(${require("../assets/images/bg4.jpg")})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",
        position: "relative",
        zIndex: "1",
        
      }}
    >
      <div
        className="background-com-overlay position-absolute top-50 start-50 translate-middle text-center"
      >
        <h3 data-aos="fade-down">True Passion</h3>
        <h1 className="text-white" data-aos="fade-up">Natural Flavours</h1>
      </div>
    </div>
  );
}

export default Background_com;
