//  icons
import {
  // FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
 

} from 'react-icons/fi';

// companies icons
// import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
// import UpworkBrandIcon from './assets/img/brands/upwork.png';
// import FiverBrandIcon from './assets/img/brands/fiverr.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
// import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// lastproject
import projectOne from './assets/img/projects/eTask.png'
import projectTwo from './assets/img/projects/dashboard.jpeg'
import projectThree from './assets/img/projects/sales-dashboard.jpeg'

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/sql.png';
import SkillImg10 from './assets/img/skills/laravel-logo.png';
// imp

// testimonial images
import TestiImage1 from './assets/img/testimonials/photo-1.png';
import TestiImage2 from './assets/img/testimonials/photo-2.png';
import TestiImage3 from './assets/img/testimonials/photo-3.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'hire',
    href: 'hire',
  },
 
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://facebook.com/ucup.miripbgt/',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiMail />,
    href: '',
  },
];

// projects last
export const lastProject = [
  {
    id: '1',
    image: projectTwo,
    name: 'E-RTQ ',
    role: 'Fullstack Developer',
    description : "E-RTQ Is a Web-based Application to Easily Manage the SPP Payment System at School, and school information system",
    stack : "Codeigniter 3 - Bootstrap 4  - Mysql - Jquery",
    icon: <FiGithub /> ,
    link: 'https://rtqbaitunnajmi.com/'
    // url : 'https://www.test.com'
  },
  
  {
    id: '2',
    image: projectOne,
    name: 'E - Task',
    role: 'Frontend Developer',
    description : "E task mangement is platform for create task",
    stack : "React Js - Tailwind css - Firebase",
    icon: <FiGithub  /> ,
    link:'https://github.com/Yusufalfi/task-mangement'
    // url : 'https://www.test.com'
  },
  {
    id: '3',
    image: projectThree,
    name: 'Sales Dashboard ',
    role: 'Frontend Developer',
    description : "Sales dashboard is a system to manage and track sales team performance & team activities & sales order information, and customer service.",
    stack : "React Js - material ui - Api",
    icon: <FiGithub /> ,
    link: 'http://202.180.17.60:8001/login'
  },
];




// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  
  {
    id: '3',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '4',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: "html"
  },
  {
    image: SkillImg2,
    name: "css"
  },
  {
    image: SkillImg3,
    name: "Javascript"
  },
  {
    image: SkillImg4,
    name: "React js"
  },
  {
    image: SkillImg5,
    name: "Next js"
  },
  {
    image: SkillImg6,
    name: "Node js"
  },
  {
    image: SkillImg10,
    name: "Laravel"
  },
  {
    image: SkillImg9,
    name: "Mysql"
  },

  {
    image: SkillImg7,
    name: "Git"
  },
  {
    image: SkillImg8,
    name: "Figma"
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Experience more than 3 year as Front end developer,. ',
  },
 
  {
    authorImg: TestiImage2,
    authorText:
      'Communicative, I can work, and collaborate well within a team .',
  
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Willing to learn new things ',
    
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at yusufalfi91@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bekasi, Indonesia',
  },
];
