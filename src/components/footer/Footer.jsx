import './Footer.scss';
import FooterLogo from '../../assets/logo/footer_logo.svg';
import LinkedIn from '../../assets/icons/f_linkedin.svg';
import X from '../../assets/icons/x.svg';
import Facebook from '../../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="heading flex justify-between">
        <img src={FooterLogo} alt="Footer Logo" />
        <div className="footer-menu text-white">
          <p>About Us</p>
          <p>Services</p>
          <p>Use Cases</p>
          <p>Pricing</p>
          <p>Blog</p>
        </div>
        <div className="social-media flex gap-5">
          <img src={LinkedIn} alt="Linkedin Logo" />
          <img src={Facebook} alt="Facebook Logo" />
          <img src={X} alt="X Logo" />
        </div>
      </div>
      <div className="footer-contact flex justify-between pb-12 border-b border-b-white">
        <div className="contact text-white">
          <h4 className="highlight text-black px-2">Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input type="text" id="email" name="email" placeholder="Email" />
          <button className="subscribe">Subscribe to news</button>
        </div>
      </div>
      <div className="text-white mt-12">
        <span className="mr-10">© 2023 Positivus. All Rights Reserved.</span>
        <span className="underline">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
