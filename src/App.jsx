import './App.scss';
import Button from './components/button/Button';
import Header from './components/header/Header';
import LandingBanner from './assets/images/landing-banner.svg';
import ContactBanner from './assets/images/contact.png';
import proposal from './assets/images/proposal.svg';
import {
  client_logos,
  service_cards,
  service_header,
  case_study_header,
  case_study,
  working_process_header,
  working_process_cards,
  team_header,
  team_data,
  testimonial_header,
  testimonial_data,
  contact_header,
} from './data/data';
import ServiceCard from './components/service-card/ServiceCard';
import SectionIntro from './components/section-intro/SectionIntro';
import ExpandableCard from './components/expandable-card/ExpandableCard';
import PersonCard from './components/person-card/PersonCard';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <section className="landing mt-[70px] mb-[70px]">
        <div className="info">
          <h1 className="text-6xl title">
            Navigating the digital landscape for success
          </h1>
          <div className="description label-medium">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <Button label="Book a consultation"></Button>
        </div>
        <div className="banner">
          <img src={LandingBanner} />
        </div>
      </section>
      <section className="logos flex flex-wrap justify-between mb-[140px]">
        {client_logos.map((logo) => {
          return (
            <img
              className="bg-blend-luminosity"
              key={logo}
              src={logo}
              alt={logo}
            />
          );
        })}
      </section>
      <section className="services">
        <SectionIntro
          label={service_header.label}
          description={service_header.description}
        ></SectionIntro>
        <div className="cards-wrapper mb-24">
          {service_cards.map((card) => {
            return <ServiceCard key={card.title1} {...card}></ServiceCard>;
          })}
        </div>

        <div className="proposal-card">
          <div className="card-info">
            <h3 className="mb-[26px]">Lets make things happen</h3>
            <p className="mb-[26px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="button-dark">Get you free proposal</button>
          </div>
          <img src={proposal} className="proposal-img" />
        </div>
      </section>
      <section className="case-studies mb-20">
        <SectionIntro
          label={case_study_header.label}
          description={case_study_header.description}
        ></SectionIntro>

        <div className="case-study-card mt-20 flex justify-between">
          {case_study.map((study) => {
            return (
              <div key={study}>
                <div className="text-white mb-5 study">{study}</div>
                <button className="text-[#B9FF66] label-medium">
                  Learn More
                  <span className="material-symbols-outlined align-middle arrow">
                    arrow_forward
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="working-process mb-36">
        <SectionIntro
          label={working_process_header.label}
          description={working_process_header.description}
        ></SectionIntro>
        <div className="mb-20 cards">
          {working_process_cards.map((card) => {
            return (
              <ExpandableCard
                key={card.digit}
                digit={card.digit}
                title={card.title}
                description={card.description}
              ></ExpandableCard>
            );
          })}
        </div>
      </section>
      <section className="team mb-24">
        <SectionIntro
          label={team_header.label}
          description={team_header.description}
        ></SectionIntro>
        <div className="flex flex-wrap gap-y-10 mb-10 justify-between">
          {team_data.map((team) => {
            return (
              <PersonCard key={team.role} personDetails={team}></PersonCard>
            );
          })}
        </div>
        <div className="flex justify-end">
          <button className="button-dark">See all Team</button>
        </div>
      </section>
      <section className="tesimonials mb-36">
        <SectionIntro
          label={testimonial_header.label}
          description={testimonial_header.description}
        ></SectionIntro>

        <Carousel testimonial={testimonial_data}></Carousel>
      </section>
      <section className="contact-us mb-36">
        <SectionIntro
          label={contact_header.label}
          description={contact_header.description}
        ></SectionIntro>
        <div className="contact-card mt-20">
          <div className="form">
            <div className="radios">
              <p>
                <input type="radio" />
                Say Hi
              </p>
              <p>
                <input type="radio" />
                Get a Quote
              </p>
            </div>
            <div>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength="4"
                maxLength="8"
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                minLength="4"
                maxLength="40"
              />
            </div>
            <div>
              <label htmlFor="message">Message *</label>
              <textarea
                type="text"
                id="message"
                name="message"
                required
                minLength="4"
                maxLength="400"
              />
            </div>
            <button className="button-dark">Send Message</button>
          </div>
          <img className="py-[56px]" src={ContactBanner} alt="contact-banner" />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
