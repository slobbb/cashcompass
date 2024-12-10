import React from "react";
import Slider from "react-slick";
import '../App.css';
import cat from '../img/cat.jpg';
import dog from '../img/dog.jpg';
import goat from '../img/goat.jpg';
import yasher from '../img/yasher.jpg';

function PicturesSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScrill: 1,
    };
    
    const images = [cat, dog, goat, yasher];

    return(
        <div className="max-w-2xl mx-auto p-4 mb-10">
            <h2 className="text-2xl font-bold text-center mb-4">Gallery</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                    <img src={image} alt="{'Slide ${index + 1}'" className="rounded-lg shadow-lg"/>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default PicturesSlider;