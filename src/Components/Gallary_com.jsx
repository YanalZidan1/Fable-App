import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Modal } from "react-bootstrap";

function Gallery_com() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    { id: 1, img: "https://placehold.co/400x400", title: "img 1" },
    { id: 2, img: "https://placehold.co/400x400", title: "img 2" },
    { id: 3, img: "https://placehold.co/400x400", title: "img 3" },
    { id: 4, img: "https://placehold.co/400x400", title: "img 4" },
    { id: 5, img: "https://placehold.co/400x400", title: "img 5" },
    { id: 6, img: "https://placehold.co/400x400", title: "img 6" },
    { id: 7, img: "https://placehold.co/400x400", title: "img 7" },
    { id: 8, img: "https://placehold.co/400x400", title: "img 8" },
    { id: 9, img: "https://placehold.co/400x400", title: "img 9" },
    { id: 10, img: "https://placehold.co/400x400", title: "img 10" },
    { id: 11, img: "https://placehold.co/400x400", title: "img 11" },
    { id: 12, img: "https://placehold.co/400x400", title: "img 12" },
  ];

  const handleShow = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].img);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].img);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].img);
  };

  return (
    <div className="container py-5">
      <div className="row">
        {galleryImages.map((item, index) => (
          <div key={item.id} className="col-md-4 col-sm-6 mb-3" data-aos="zoom-in" data-aos-delay={index * 100}>
            <div
              className="image-wrapper position-relative overflow-hidden mb-3"
              onClick={() => handleShow(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid "
                style={{ transition: "0.3s ease-in-out" }}
              />
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} size="xxl" centered style={{width:"100%" , height:"100%", backgroundColor: "transparent"}}  className="modal-fullscreen container-fluid p-0" >
        <Modal.Body className=" p-0 " style={{width: "100%", height: "100%" }}>
          <button
            className="btn-close position-absolute top-0 end-0 m-3 p-3 border-0 bg-transparent"
            onClick={handleClose}
            style={{ zIndex: 1 }}
            aria-label="Close"
          ></button>
          
          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y px-3 py-2 "
            onClick={handlePrev}
          >
            ❮
          </button>

          <img src={selectedImage} alt="" className="w-100 h-100 object-fit-cover"  />

          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y px-3 py-2"
            onClick={handleNext}
            style={{ right: "10px" }}
          >
            ❯
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Gallery_com;
