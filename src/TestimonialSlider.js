import React, { useState, useEffect, useRef } from 'react';
import './TestimonialSlider.css';

// Updated data to match the images, including a new entry
const testimonialData = [
  {
    id: 1,
    name: "Anjali Shah",
    location: "Ahmedabad",
    initials: "AS",
    quote: "Thanks to LICHFL, I was able to achieve my dream of homeownership. Their competitive rates and excellent service made the process stress-free. I'm so grateful for their support."
  },
  {
    id: 2,
    name: "Satish Rai",
    location: "Hyderabad",
    initials: "SR",
    quote: "LICHFL goes the extra mile for their customers. Their representatives were very patient and helpful throughout the entire process. They ensured I understood everything and felt comfortable with my loan."
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai",
    initials: "PS",
    quote: "The team was incredibly professional and efficient. They handled all the paperwork with ease and got my loan approved much faster than I expected. Truly a five-star experience."
  },
  {
    id: 4,
    name: "Vivek Nath Tiwari",
    location: "New Delhi",
    initials: "VT",
    quote: "As a first-time home buyer, the loan process seemed daunting. The advisors here simplified everything for me with patience and clarity. I am now a proud homeowner, thanks to their excellent guidance."
  }
];

// A small component for the custom house icon
const HouseIcon = ({ initials }) => (
  <svg className="testimonial-house-icon" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L0 40V90H30V60H70V90H100V40L50 0Z" />
    <text x="50" y="62" textAnchor="middle" dominantBaseline="middle">{initials}</text>
  </svg>
);

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1)),
      5000 // Change slide every 5 seconds
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));

  return (
    <div className="testimonial-slider-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="slider-wrapper">
        <button className="slider-arrow prev-arrow" onClick={prevSlide} aria-label="Previous testimonial">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="slider-content">
          <div className="slides-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonialData.map((testimonial) => (
              <div className="slide" key={testimonial.id}>
                <div className="testimonial-icon-wrapper">
                  <HouseIcon initials={testimonial.initials} />
                </div>
                <div className="testimonial-text">
                  <p className="testimonial-author">
                    <strong>{testimonial.name},</strong> {testimonial.location}
                  </p>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-arrow next-arrow" onClick={nextSlide} aria-label="Next testimonial">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="slider-dots">
        {testimonialData.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;