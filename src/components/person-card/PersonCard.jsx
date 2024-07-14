import linkedin from '../../assets/icons/linkedin.svg';
import './PersonCard.scss';
const PersonCard = ({ personDetails }) => {
  const { image, name, role, bio } = personDetails;
  return (
    <div className="person-card">
      <div className="details flex pb-7">
        <img src={image} className="mr-5" alt="Person Image" />
        <div className='self-end'>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
        <img src={linkedin} className="social" alt="linkedin" />
      </div>
      <p className="bio pt-7">{bio}</p>
    </div>
  );
};

export default PersonCard;
