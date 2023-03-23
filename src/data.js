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

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

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
    image: projectOne,
    name: 'E - Task',
    role: 'Frontend Developer',
    description : "E task mangement is platform for create task",
    stack : "React Js - Tailwind css - Firebase",
    icon: <FiGithub /> ,
  },
  {
    id: '2',
    image: projectOne,
    name: 'E Task',
    role: 'Frontend Developer',
    description : "E task mangement is platform for create task",
    stack : "React Js - Tailwind css - Firebase",
    icon: <FiGithub /> ,
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
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
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
