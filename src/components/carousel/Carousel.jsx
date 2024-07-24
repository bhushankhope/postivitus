import { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ testimonial }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="items py-20 flex justify-center gap-5">
        <div className="max-w-[600px]">
          <div className="review-card text-black">
            <p className="review-card-inner text-white">
              {testimonial[currentIndex].review}
            </p>
          </div>
          <div className="ml-20 mt-5 flex flex-col">
            <h4 className="text-[#B9FF66]">{testimonial[currentIndex].name}</h4>
            <p>{testimonial[currentIndex].role}</p>
          </div>
        </div>
      </div>
      <div className="buttons flex items-center justify-center pb-16">
        <span className="left" onClick={handlePrev}>
          <span className="material-symbols-outlined">arrow_back</span>
        </span>
        <span className="pagination">
          {testimonial.map((_, index) => (
            <span
              key={index}
              className={`star ${index === currentIndex ? 'active' : ''}`}
            ></span>
          ))}
        </span>
        <span className="right" onClick={handleNext}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
