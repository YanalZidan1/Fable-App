import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeaderAnyPage({ title, subtitle, background, text ,text2 }) {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
            offset: 100,
            mirror: false,
            easing: 'ease-out',
        });
    }, []);

    return (
        <div
            className="HeaderAnyPage container-fluid p-0 d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "auto",  
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.74)",
                backgroundBlendMode: "overlay",
                backgroundAttachment: "fixed",
                position: "relative",
                zIndex: "1",
            }}
        >
            <div className="container p-5 text-center d-flex flex-column justify-content-center align-items-center" style={{ zIndex: "2" , height: "90vh" }}>
                <h3 data-aos="fade-down">{title}</h3>
                <h1 data-aos="zoom-in">{subtitle}</h1>
                <p className="mt-4" data-aos="fade-up">{text} <br/> {text2}</p>
            </div>
        </div>
    );
}

export default HeaderAnyPage;
