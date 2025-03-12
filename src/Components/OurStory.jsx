import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد أنماط AOS

function OurStory({ title, subtitle, text, link, link_name, images}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  if (!images || images.length < 1) {
    console.error("يجب تمرير مصفوفتين من الصور إلى 'images' داخل الـ props.");
    return null; 
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="OurStory container-fluid p-0">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-story d-flex flex-column justify-content-center align-items-center">
            <h3 data-aos="fade-right">{title}</h3>
            <h1 data-aos="fade-left">{subtitle}</h1>
            <p className="text-center" data-aos="fade-right">{text}</p>
            <a href={link} className="btn btn-lg btn-yellow" data-aos="fade-up">
              {link_name}
            </a>
          </div>

          <div className="col-md-6 story-slider">
            <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to={index}
                    className={`button_slid ${index === activeIndex ? 'active' : ''}`}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {images.map((imgSrc, index) => (
                  <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} >
                    <img src={imgSrc} className="d-block w-100 rounded shadow" alt={`Slide ${index + 1}`} style={{width:'100%', height:'100%' , objectFit:'cover'}} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
