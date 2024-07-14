import './Carousel.scss';

const Carousel = ({ testimonial }) => {
  return (
    <div className="carousel">
      <div className="items py-20 flex justify-center gap-10 overflow-hidden">
        {testimonial.map((item, index) => {
          return (
            <div key={index} className="max-w-[600px]">
              <div className="review-card text-black">
                <p className="review-card-inner text-white">{item.review}</p>
              </div>
              <div className="ml-20 mt-5 flex flex-col">
                <h4 className='text-[#B9FF66]'>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons flex items-center justify-center pb-16">
        <span className="left">
          <span className="material-symbols-outlined">arrow_back</span>
        </span>
        <span className="pagination">
          {testimonial.map((i, index)=>{
            return <span key={index} className="star"></span>
          })}
        </span>
        <span className="right">
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
