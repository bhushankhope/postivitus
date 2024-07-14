import logo1 from '../assets/logo/logo1.svg';
import logo2 from '../assets/logo/logo2.svg';
import logo3 from '../assets/logo/logo3.svg';
import logo4 from '../assets/logo/logo4.svg';
import logo5 from '../assets/logo/logo5.svg';
import logo6 from '../assets/logo/logo6.svg';

import card1 from '../assets/images/card1.svg';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import card4 from '../assets/images/card4.svg';
import card5 from '../assets/images/card5.svg';
import card6 from '../assets/images/card6.svg';

import team1 from '../assets/images/team1.svg';
import team2 from '../assets/images/team2.svg';
import team3 from '../assets/images/team3.svg';
import team4 from '../assets/images/team4.svg';
import team5 from '../assets/images/team5.svg';
import team6 from '../assets/images/team6.svg';



const landing_buttons = ['About Us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

const client_logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const service_cards = [
  {
    title1: 'Search engine',
    title2: 'Optimization',
    image: card1,
    theme: 'gray'
  },
  {
    title1: 'Pay-per-click',
    title2: 'advertising',
    image: card2,
    theme: 'green'

  },
  {
    title1: 'Social Media',
    title2: 'Marketing',
    image: card3,
    theme: 'black'
  },
  {
    title1: 'Email',
    title2: 'Marketing',
    image: card4,
    theme: 'gray'
  },
  {
    title1: 'Content',
    title2: 'Creation',
    image: card5,
    theme: 'green'
  },
  {
    title1: 'Analytics and',
    title2: 'Tracking',
    image: card6,
    theme: 'black'
  }
]

const service_header = {
  label: 'Services',
  description: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
}

const case_study_header = {
  label: 'Case Studies',
  description: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
}

const working_process_header = {
  label: 'Our Working Process',
  description: 'Step-by-Step Guide to Achieving Your Business Goals'
}

const team_header = {
  label: 'Team',
  description: 'Meet the skilled and experienced team behind our successful digital marketing strategies'
}

const testimonial_header = {
  label: 'Testimonials',
  description: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
}

const contact_header = {
  label: 'Contact Us',
  description: 'Connect with Us: Lets Discuss Your Digital Marketing Needs'
}

const case_study = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
]

const working_process_cards = [
  {
    digit: '01',
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    digit: '02',
    title: 'Research and Strategy Development',
    description: 'Lorem Ipsum'
  },
  {
    digit: '03',
    title: 'Implementation',
    description: 'Lorem Ipsum'
  },
  {
    digit: '04',
    title: 'Monitoring and Optimization',
    description: 'Lorem Ipsum'
  },
  {
    digit: '05',
    title: 'Reporting and Communication',
    description: 'Lorem Ipsum'
  },
  {
    digit: '06',
    title: 'Continual Improvement',
    description: 'Lorem Ipsum'
  }
];

const team_data = [
  {
    image: team1,
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    image: team2,
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    image: team3,
    name: 'Michael Brown',
    role: 'Senior SEO Specalist',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    image: team4,
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    image: team5,
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  },
  {
    image: team6,
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
  }
];

const testimonial_data = [
  {
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp'
  },
  {
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp'
  },
  {
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp'
  }
]

export {
  landing_buttons, client_logos, service_cards, service_header, case_study_header, case_study, working_process_header, working_process_cards, team_header, team_data,
  testimonial_header, testimonial_data, contact_header
};