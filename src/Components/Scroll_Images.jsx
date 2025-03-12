import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos'; // استيراد AOS
import 'aos/dist/aos.css'; // استيراد التنسيق الخاص بـ AOS

function Scroll_Images() {
  // تهيئة AOS عند تحميل المكون
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التأثير
      easing: 'ease-in-out', // نوع الحركة
    });
  }, []);

  return (
    <div className="scroll-images container-fluid p-0">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={true} // تفعيل خاصية التنقل
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://placehold.co/600x400" alt="Image 3" />
        </SwiperSlide>
      </Swiper>
    </div>

  );
}

export default Scroll_Images;
