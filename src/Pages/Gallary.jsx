import React from 'react'

//components
import HeaderAnyPage from '../Components/HeaderAnyPage'
import Gallary_com from '../Components/Gallary_com'

function Gallary() {
  return (
    <div className='container-fluid p-0 Gallary'>
    <HeaderAnyPage
     title='True Passion'
     subtitle='Natural Flavours'
     text='An unforgettable dining experience in the heart of Covent Garden, London.'
     text2='Contemporary british menu, inspired by the traditions of Great Britain.'
     background={require('../assets/images/bg5.jpg')}
         />
      <Gallary_com/>
      
    </div>
  )
}

export default Gallary
