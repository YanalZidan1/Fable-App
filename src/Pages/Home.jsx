import React from 'react'

//components
import Header from '../Components/Header'
import OurStory from '../Components/OurStory'
import Background_com from '../Components/Background_com'
import BestRecipes from '../Components/BestRecipes'
import LatestNews from '../Components/LatestNews'
import FoodSlider from '../Components/FoodSlider'

const Home = () => {
  return (
    <div>
      <Header />
      <OurStory
        title="Discover"
        subtitle="Our Story"
        text="Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae
              seditum fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia."
        link={'#'}
        link_name={'OUR STORY'}
        images={[
          "https://placehold.co/600x400", 
          "https://placehold.co/600x400"
        ]}
      />
      <Background_com/>
      <div className="Chefs">
        <OurStory
          title="Discover"
          subtitle="Our Chefs"
          text="Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia."
          link={'#'}
          link_name={'MEET CHEFS'}
          images={[
            "https://placehold.co/600x400", 
            "https://placehold.co/600x400"
          ]}
        />
      </div>
      <BestRecipes/>
      <LatestNews/>
      <FoodSlider/>
    </div>
  )
}

export default Home
