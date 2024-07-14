import './ServiceCard.scss';
import LearnMore from '../LearnMore/LearnMore';

const colors = { gray: '#F3F3F3', black: 'black', green: '#B9FF66' };

const helper = {
  gray: {
    high: '#B9FF66',
    circle: 'black',
    arrow: '#B9FF66',
  },
  green: {
    high: '#FFFFFF',
    circle: 'black',
    arrow: '#B9FF66',
  },
  black: {
    high: '#B9FF66',
    circle: '#FFFFFF',
    arrow: 'black',
  },
};

const ServiceCard = ({ theme, title1, title2, image }) => {
  const themeColors = helper[theme];

  return (
    <div className="service-card" style={{ backgroundColor: colors[theme] }}>
      <div className="card-info">
        <h3
          className="card-title highlight"
          style={{ backgroundColor: themeColors.high }}
        >
          {title1}
        </h3>
        <h3
          className="card-title highlight mb-20"
          style={{ backgroundColor: themeColors.high }}
        >
          {title2}
        </h3>
        <button className="learn-btn">
          <LearnMore circle={themeColors.circle} arrow={themeColors.arrow} />
          <span style={{ color: themeColors.circle }}>Learn More</span>
        </button>
      </div>
      <img className="card-logo" src={image} alt={`${title1} ${title2}`} />
    </div>
  );
};

export default ServiceCard;
