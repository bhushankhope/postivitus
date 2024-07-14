import './SectionIntro.scss'
const SectionIntro = ({ label, description }) => {
  return (
    <div>
      <div className="mb-20">
        <h2 className="highlight highight-label">{label}</h2>
        <p className='section-description'>{description}</p>
      </div>
    </div>
  );
};

export default SectionIntro;
