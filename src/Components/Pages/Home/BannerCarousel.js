import React from 'react';
import caroursel1 from '../../../Assets/images/carousel1.png';
import caroursel2 from '../../../Assets/images/carousel2.png';
import caroursel3 from '../../../Assets/images/carousel3.png';
import caroursel4 from '../../../Assets/images/carousel4.png';

const BannerCarousel = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={caroursel1} class="w-full brightness-50" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div>
                        <h1 className="text-5xl text-center font-semibold bg-blend-multiply text-white font-semibold">Building a More Competitive <br /> Business Sectors.</h1>
                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={caroursel2} class="w-full brightness-50" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <div>
                        <h1 className="text-5xl text-center font-semibold bg-blend-multiply text-white font-semibold">You must have a supplier relationship <br /> of constant improvement.</h1>
                    </div>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src={caroursel3} class="w-full brightness-50" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <div>
                        <h1 className="text-5xl text-center font-semibold bg-blend-multiply text-white font-semibold">There is no such thing as a boring project. <br /> There are only boring executions.</h1>
                    </div>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src={caroursel4} class="w-full brightness-50" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <div>
                        <h1 className="text-5xl text-center font-semibold bg-blend-multiply text-white font-semibold">Do not compromise on the quality and  <br /> your customers will not negotiate on the price.</h1>
                    </div>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;