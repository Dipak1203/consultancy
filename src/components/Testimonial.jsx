import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "I am thankful to MOONLIGHT Education Consultancy for providing the best guidance. They have professional teacher who guided in every single step to persue my dream. I made a right choice and suggest you the same",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "I feel fortunate to have an opportunity to study in Australia. MOONLIGHT Education Consultancy provided me with the best possible study options with the consideration of my capability and interest.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      comment:
        "MOONLIGHT Education Consultancy is the one of the best services out there. They are very professional friendly and genuinely willing to support their students. Overall, I am very satisfied with their services.",
    },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <Container className="testimonials__section my-5">
    <h2 className="text-center">Testimonials</h2>
    <h6 className="text-center">What our Students think about us</h6>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-5 mt-5">
            <p>{testimonial.comment}</p>
            <div className="row container">
              <div className="col-md-6">
                <div className="row">
                  <img
                    src="https://moonlightedu.com.np/uploads/testimonials/1680020135.png"
                    className="h-25 col-6"
                  />
                  <div className="col-md-6">
                    <p className="name">{testimonial.name}</p>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <FormatQuoteIcon />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
