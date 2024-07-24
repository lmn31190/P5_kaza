import React, { useState } from "react";
import arrow from "../../assets/images/arrow.svg";
import "./gallery.scss";

const Gallery = ({ data }) => {
  const [slider, setSlider] = useState(0);

  const length = data[0].pictures.length;

  const nextSlide = () => {
    if (slider === length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  const prevSlide = () => {
    if (slider === 0) {
      setSlider(length - 1);
    } else {
      setSlider(slider - 1);
    }
  };
  return (
    <div className="gallery">
      <div className="container">
        <img className="slider" src={data[0].pictures[slider]} alt="" />

        {length > 1 && (
          <div className="btn">
            <button onClick={prevSlide}>
              <img src={arrow} alt="" />
            </button>
            <button onClick={nextSlide}>
              <img src={arrow} alt="" />
            </button>
          </div>
        )}

        {length > 1 && (
          <p>
            {slider + 1} / {length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
