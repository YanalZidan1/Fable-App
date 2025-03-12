import React from 'react';
import background_video from '../assets/videos/bacground.mp4';

function BackgroundVideo() {
  return (
    <div 
      className='video-container container-fluid p-0' 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '80vh', 
        overflow: 'hidden', 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",
        position: "relative",
        zIndex: "1",
      }}
    >
      <video 
        src={background_video}
        autoPlay 
        loop 
        muted 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
      
      {/* محتوى فوق الفيديو */}
      <div 
        className="video-overlay d-flex flex-column justify-content-center align-items-center text-white text-center" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.62)' // تأثير التعتيم
        }}
      >
        {/* <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to Our Website</h1>
        <p style={{ fontSize: '1.5rem' }}>Enjoy an immersive experience</p>
        <button 
          className="btn btn-primary mt-3" 
          style={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '10px' }}
        >
          Learn More
        </button> */}
      </div>
    </div>
  );
}

export default BackgroundVideo;
