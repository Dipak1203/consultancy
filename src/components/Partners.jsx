import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

const Partners = () => {
  const images = [
    {
      id: 1,
      src: 'https://moonlightedu.com.np/uploads/university/1680020752.png',
      alt: 'logo 1',
    },
    {
      id: 2,
      src: 'https://moonlightedu.com.np/uploads/university/1680020812.png',
      alt: 'logo 2',
    },
    {
      id: 3,
      src: 'https://moonlightedu.com.np/uploads/university/1680020851.png',
      alt: 'logo 3',
    },
    {
      id: 4,
      src: 'https://moonlightedu.com.np/uploads/university/1680020910.png',
      alt: 'logo 4',
    },
    {
      id: 5,
      src: 'https://moonlightedu.com.np/uploads/university/1680020862.png',
      alt: 'logo 5',
    },
    {
      id: 6,
      src: 'https://moonlightedu.com.np/uploads/university/1680020917.png',
      alt: 'logo 6',
    },
    // Add more images as needed
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className='my-5 testimonials__section'>
    <h2 className='text-center'>Our Partners</h2>
    <h6 className='text-center'>Our University</h6>

      <Slider {...sliderSettings} className='mt-5'>
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} className='py-3' />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Partners;
