import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Scroll_Images() {
  const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400"
  ];

  return (
    <div className="scroll-images container-fluid p-0">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Thumbs]}
        className="main-swiper-imges"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide-imges">
            <img src={img} alt={`Slide ${index + 1}`} className="slide-imag" style={{ width: "100%", height: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Scroll_Images;
