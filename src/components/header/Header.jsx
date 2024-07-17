import positivus from '../../assets/logo/positivus.svg';
import { landing_buttons } from '../../data/data';
import CustomDropdown from '../dropdown/Dropdown';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <img src={positivus} className='logo' />
      <div className="menu">
        {landing_buttons.map((btn) => {
          return <button key={btn}>{btn}</button>;
        })}
        <button className="get-quote">Request a quote</button>
      </div>
      <div className="mobile-menu">
        <CustomDropdown></CustomDropdown>
      </div>
    </div>
  );
};

export default Header;
