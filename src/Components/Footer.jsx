import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import footer from '../assets/images/footer-bg.jpg';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            once:false, 
            mirror: true,
        });
    }, []);

    return (
        <div className="footer container-fluid p-0"
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'overlay',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div className="container p-5 d-flex flex-column flex-md-row justify-content-center text-center text-md-start gap-5 footer-content">
                
                <div className="col-md-3 text-light" data-aos="fade-up">
                    <h4>ABOUT US</h4>
                    <p className='mt-4'>
                        We are a team of passionate individuals who strive to provide the best possible experience for our customers.
                    </p>
                    <a href="#" className="btn btn-light btn-our mt-3">OUR STORY</a>
                </div>

                <div className="col-md-3 text-light" data-aos="fade-up" data-aos-delay="200">
                    <h4>LATEST RECIPES</h4>
                    <ul className="list-unstyled mt-4 list-menu">
                        <li className='list-item'>Cheddar Cheese Cauliflower Tots</li>
                        <li className='list-item'>Garlic Chicken & White Wine Sauce</li>
                        <li className='list-item'>Spinach Mozzarella Grilled Cheese</li>
                        <li className='list-item'>Mini Chicken Roasted Cups</li>
                    </ul>
                </div>

                <div className="col-md-3 text-light" data-aos="fade-up" data-aos-delay="400">
                    <h4>FEATURED PLATES</h4>
                    <div className="imges-footer mt-4">
                        {[...Array(6)].map((_, i) => (
                            <img key={i} src="https://placehold.co/400x400" alt="Featured Plate" />
                        ))}
                    </div>
                </div>

                <div className="col-md-3 text-light" data-aos="fade-up" data-aos-delay="600">
                    <h4>CONTACT DETAILS</h4>
                    <p className='mt-4'>Quis autem velis eti reprehender etimes quiste volupta velit esse quam nihil.</p>
                    <ul className="list-unstyled contact">
                        <li className='contact-item'>
                            <i className="fa-solid fa-location-dot"></i> <span> New York</span>
                        </li>
                        <li className='contact-item'>
                            <i className="fa-solid fa-phone"></i> <span>+1 234 567 890</span>
                        </li>
                        <li className='contact-item'>
                            <i className="fa-solid fa-envelope"></i> 
                            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="container mt-5" >
                <div className="col-md-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="col-md-4 copyright text-center text-md-start">
                        <p>© 2016-2018 Fable. Designed by Fable</p>
                    </div>
                    <div className="col-md-4 scroll text-center">
                        <a href="#top" className="scroll-top">
                            <i className="fa-solid fa-arrow-up"></i>
                        </a>
                    </div>
                    <div className="col-md-4 social-media ">
                        <ul className="list-unstyled d-flex justify-content-end gap-3">
                        <p>Follow Us:</p>
                            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, i) => (
                                <a key={i} href={`https://www.${icon}.com/`}>
                                    <i className={`fa-brands fa-${icon}`}></i>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
