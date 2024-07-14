import positivus from '../../assets/logo/positivus.svg';
import { landing_buttons } from '../../data/data';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <img src={positivus} />
      <div className="menu">
        {landing_buttons.map((btn) => {
          return <button key={btn}>{btn}</button>;
        })}
        <button className="get-quote">Request a quote</button>
      </div>
    </div>
  );
};

export default Header;
