import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const recipes = [
  { id: 1, title: "Spicy Chili Soup", img: "https://placehold.co/600x400", Recipe: "A spicy and savory chili soup perfect for winterA spicy and savory chili soup perfect for winter" },
  { id: 2, title: "Classic Bolognese", img: "https://placehold.co/600x400", Recipe: "Classic Italian pasta sauce with a rich meaty flavor." },
  { id: 3, title: "Cottage Cheese & Chives", img: "https://placehold.co/600x400", Recipe: "A refreshing and light cottage cheese snack." },
  { id: 4, title: "Colorful Salad", img: "https://placehold.co/600x400", Recipe: "A vibrant salad loaded with fresh vegetables." },
  { id: 5, title: "It's Just Cornflakes", img: "https://placehold.co/600x400", Recipe: "Simple, crispy, and delightful cornflakes." },
  { id: 6, title: "Tasty Muesli", img: "https://placehold.co/600x400", Recipe: "A healthy and crunchy muesli mix with fruits and nuts." },
];

const FoodSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const handleViewRecipe = (id) => {
    setShowModal(id);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div className="FoodSlider container-fluid p-0">
      <div className="container p-5 text-center">
        <h3>Chef's Pick</h3>
        <h1>Cooking Recipes</h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={0}
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
          coverflowEffect={{
            rotate: 30,
            stretch: 20,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.5,
          }}
          loop={true}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectCoverflow, Navigation, Thumbs]}
          className="main-swiper mt-5"
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id} className="swiper-slide" style={{ width: "400px", height: "400px" }}>
              <img src={recipe.img} alt={recipe.title} className="slide-image" style={{width: "100%", height: "100%"}} />
              <button className="view-recipe" onClick={() => handleViewRecipe(recipe.id)}>
                <i className="fa-regular fa-calendar-days"></i> VIEW RECIPE
              </button>

              {/* Modal */}
              {showModal === recipe.id && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                   <button className="close-modal" onClick={handleCloseModal}>x</button>
                    <p className="text-start mt-3">{recipe.Recipe}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          className="thumb-swiper mt-4"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id} className="thumb-slide">
              <img src={recipe.img} alt={recipe.title} className="thumb-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FoodSlider;
