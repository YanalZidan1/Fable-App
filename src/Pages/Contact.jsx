import React from 'react'
import HeaderAnyPage from '../Components/HeaderAnyPage'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <div className='container-fluid p-0 Contact'>
      <HeaderAnyPage
        title=' La Cuisine'
        subtitle='Get In Touch'
        text='For any enquiries you can give us a call at +44 123 45 67 890'
        text2='Alternatively we can get in touch using the form bellow.'
        background={require('../assets/images/bg6.jpg')}
        />    
        <ContactForm/>
    </div>
  )
}

export default Contact
