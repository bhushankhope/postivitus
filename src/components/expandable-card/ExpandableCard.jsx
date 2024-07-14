import { useState } from 'react';
import './ExpandableCard.scss';
const ExpandableCard = ({ digit, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="expandable-card"
      style={{ backgroundColor: expanded === true ? '#B9FF66' : '#F3F3F3' }}
    >
      <div
        className="flex heading justify-between mb-8"
        style={{ marginBottom: expanded ? '32px' : 0 }}
      >
        <div className="flex items-center">
          <span className="digit">{digit}</span>
          <span className="title">{title}</span>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="toggle">
          <span className="material-symbols-outlined icon align-bottom">
            {expanded === true ? 'remove' : 'add'}
          </span>
        </button>
      </div>
      <div
        className="description pt-8"
        style={{ display: expanded === true ? 'block' : 'none' }}
      >
        {description}
      </div>
    </div>
  );
};

export default ExpandableCard;
