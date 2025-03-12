import React from 'react'

//components
import HeaderAnyPage from '../Components/HeaderAnyPage'
import BestRecipes from '../Components/BestRecipes'
import FoodSlider from '../Components/FoodSlider'
import Menu_Book from '../Components/Menu_List'

function Menu() {
  return (
    <div className='Menu container-fluid p-0'>
        <HeaderAnyPage
         title='Our Menu'
         subtitle='Food & Drinks'
         text='An unforgettable dining experience in the heart of Covent Garden, London.'
         text2='Contemporary british menu, inspired by the traditions of Great Britain.'
         background={require('../assets/images/bg3.jpg')}
        />
        <Menu_Book/>
        <BestRecipes/>
        <FoodSlider/>
    </div>
  )
}

export default Menu
