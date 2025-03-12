import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import rs_1 from "../assets/images/rs-1.jpg";
import rs_2 from "../assets/images/rs-2.jpg";
import rs_3 from "../assets/images/rs-3.jpg";
import second_logo from "../assets/images/logo2.jpg";

const slides = [
  { id: 1, img: rs_3, title: "FRESH INGREDIENTS", text: "We're Known for Great French Cooking" },
  { id: 2, img: rs_2, title: "FRESH INGREDIENTS", text: "We're Known for Great French Cooking" },
  { id: 3, img: rs_1, title: "FRESH INGREDIENTS", text: "We're Known for Great French Cooking" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // تغيير الصورة كل 5 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header container-fluid p-0">
      <div id="carouselExampleCaptions" className="carousel slide">
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to={index}
              className={`btn-ser ${index === activeIndex ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner header-slider-container">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <img src={slide.img} className="d-block w-100 bg-slider" alt={slide.title} />
              <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center header-slider">
                {/* Logo Animation */}
                <motion.img
                  src={second_logo}
                  alt="Logo"
                  className="img-logo mb-3"
                  key={activeIndex} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Title Animation */}
                <motion.h1
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                  className="text-white fw-bold title-slider"
                >
                  {slide.title}
                </motion.h1>

                {/* Text Animation */}
                <motion.p
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                  className="text-slider"
                >
                  {slide.text}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
