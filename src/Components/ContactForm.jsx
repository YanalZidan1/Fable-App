import React, { useEffect } from "react";
import background from "../assets/images/content.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

function ContactForm() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            className="container-fluid p-0 ContactForm"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backgroundBlendMode: "overlay",
                backgroundAttachment: "fixed",
                position: "relative",
                zIndex: "1",
                color: "#fff",
            }}
        >
            <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
                <h1 className="mb-3" data-aos="fade-up">CONTACT US</h1>
                <p className="text-center w-75" data-aos="fade-up" data-aos-delay="200">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration, by injected humour, or new randomised words which don't look believable.
                </p>

                <form
                    className="form-contact w-100 p-4 d-flex flex-column align-items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{
                        maxWidth: "600px",
                        backgroundColor: "rgba(2, 2, 2, 0.1)",
                        borderRadius: "10px",
                        backdropFilter: "blur(5px)",
                        padding: "20px",
                    }}
                >
                    <div className="form-group w-100">
                        <input
                            type="text"
                            placeholder="Full Name*"
                            className="form-control p-3"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                border: "none",
                                color: "#fff",
                                outline: "none",
                            }}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            type="email"
                            placeholder="Email Address*"
                            className="form-control p-3"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                border: "none",
                                color: "#fff",
                                outline: "none",
                            }}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="form-control p-3"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                border: "none",
                                color: "#fff",
                                outline: "none",
                            }}
                        />
                    </div>

                    <div className="form-group w-100">
                        <textarea
                            placeholder="Your Message*"
                            rows="4"
                            className="form-control p-3"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                border: "none",
                                color: "#fff",
                                outline: "none",
                                resize: "none",
                            }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-contact"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
