import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Optimum Prime</h1>
      <Slider {...settings}>
        <Card complete={2} title="Step 1: Trailing" subText="Detect when on a lower timeframe trailing is occruing" />
        <Card complete={0} title="Step 2: Mid op's"  subText="Detect mid Ops'"/>
        <Card complete={0} title="Step 3: False ops" subText="Detect false Op's " />
        <Card complete={0} title="Step 4: Optimum P"subText="Detect confidently a succeful OP" />
      </Slider>
    </div>
  );
};

export default Carousel;
