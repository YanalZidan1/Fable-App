import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function BestRecipes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const menu = [
    {
      id: 1,
      name: "English Breakfast",
      price: 12.95,
      description: "Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.",
    },
    {
      id: 2,
      name: "American Breakfast",
      price: 12.95,
      description: "Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.",
    },
    {
      id: 3,
      name: "French Breakfast",
      price: 12.95,
      description: "Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.",
    },
    {
      id: 4,
      name: "Italian Breakfast",
      price: 12.95,
      description: "Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.",
    }
    ];
    
  return (
    <div className='BestRecipes container-fluid p-0' style={{
      backgroundImage: `url(${require("../assets/images/bg8.jpg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "auto",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "overlay",
      backgroundAttachment: "fixed",
      position: "relative",
      zIndex: "1",

    }}>
      <div className="container py-5">
        <div className="col-md-7 text-center text-white best-recipes">
          <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          >Best Recipes</h2>
          <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          >AWARDED CHEFS</h1>
          
          <div className='menu-items'>
            {
              menu.map((item, index) => (
                <li className="menu-item" key={item.id} data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}>
                  <h4>{item.name} ..... <span>${item.price}</span></h4>
                  <p>{item.description}</p>
                </li>
              ))
            }
          </div>
           <a href="" className="btn full-menu"><i class="fa-regular fa-calendar-days"></i> FULL MENU</a>
        </div>
      </div>

    </div>
  )
}

export default BestRecipes
