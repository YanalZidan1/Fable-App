import React from 'react'

//components
import HeaderAnyPage from '../Components/HeaderAnyPage'
import OurStory from '../Components/OurStory'
import Form from '../Components/Form'
import BackgroundVideo from '../Components/BackgroundVideo'

function Reservations() {
    return (
        <div className='Reservations container-fluid p-0'>
            <HeaderAnyPage
                title="La Cuisine"
                subtitle='Special Moments'
                background={require('../assets/images/bg6.jpg')}
                text='An unforgettable dining experience in the heart of Covent Garden, London'
                text2='Contemporary british menu, inspired by the traditions of Great Britain.'
            />
            <Form/>
            <BackgroundVideo/>
            <OurStory
                title='Relaxing'
                subtitle='Atmosphere'
                text='Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.'
                link='#'
                link_name='SEE GAALLERY'
                images={[
                    require('../assets/images/food6.jpg'),
                    require('../assets/images/food7.jpg')
                ]}
            />
        </div>
    )
}
export default Reservations
