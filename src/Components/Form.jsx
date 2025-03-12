import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import chef from '../assets/images/chef1.jpg'

function Form() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className='Form container-fluid p-0'>
      <div className='container mt-5'> 
        <div className="col-md-7 img-form" data-aos="fade-right">
          <img src={chef} alt="" />
        </div>
        <div className="col-md-5 form-container-parent">
          <div className="form-container text-center">
            <h3>Book a Table</h3>
            <h1>Online Booking</h1>
            <p>Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia. </p>
            <form action="" className='mt-5' data-aos="fade-left">
              <div className="form-group ">
                <input type="text" placeholder='Name' data-aos="fade-up" />
                <input type="email" placeholder='Email'data-aos="fade-up" />
                <input type="text" placeholder='Phone'data-aos="fade-up" />
                <input type="date" placeholder='Date' data-aos="fade-up"/>
                <input type="time" placeholder='Time'data-aos="fade-up" />
                {/* select  how many people */}
                <select name="" id="" >
                  <option value="">How Many Pepole</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  </select>
              </div>
              <button className='btn btn-primary mt-5 btn-Book'>Book Your Table</button>
            </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Form
