import './CaseStudyCard.scss';

const CaseStudyCard = ({ text }) => {
  return (
    <div className="case-card">
      <p className='text-white mb-5'>{text}</p>
      <button className="text-[#B9FF66] label-medium">
        Learn More
        {/* <span className="material-symbols-outlined align-middle arrow">
          arrow_forward
        </span> */}
      </button>
    </div>
  );
};

export default CaseStudyCard;
