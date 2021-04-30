import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Usman Rashid Khan', // e.g: 'Name | Developer'
  lang: 'React.js,gatsby', // e.g: en, es, fr, jp
  description: 'welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Usman Rashid Khan',
  subtitle: 'Data Scientist Enthusiast and Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:'Hello! I m Usman Rashid Khan, a self taught web developer and a Data Science Enthusiast based in India. I Love developing and designing applications for the web, from simple landing pages to progressive web applications.',
  paragraphTwo: 'I love to play with Data and love to make Machine Learning Modals. I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.',
  paragraphThree: 'I consider work an ongoing education, and I m always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.',
  resume: 'https://drive.google.com/file/d/1zdYxe-iRX1hFLm1GU1AhZM6rItCVuyZU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'amazon-min.png',
    title: 'Amazon Clone',
    info: 'A fully function-able E-commerce website where customers can browse through the items for sale on the dashboard and add it to the cart and can purchase using card. It is using firebase for authentication and also to store the items.',
    info2: 'REACT.JS REACT CONTEXT API Firebase Stripe Node.JS Express.JS',
    url: 'https://amazoncloone.netlify.app/',
    repo: 'https://github.com/KhanUsman786/amazon-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jammm.jpg',
    title: 'JAMM APP',
    info: 'Jamm App allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.',
    info2: 'React.Js API',
    url: 'http://direful-liquid.surge.sh/',
    repo: 'https://github.com/KhanUsman786/jammm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'resto.png',
    title: 'Resto Finder',
    info: 'My first react project after completion of react course. Resto Finder is a web application which search the restaurant based on dish (using yelp api which provides information related to US).',
    info2: 'REACT.JS API',
    url: 'https://restofinderr.netlify.app/',
    repo: 'https://github.com/KhanUsman786/Resto-Finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Portfolio1.png',
    title: 'Portfolio V-1',
    info: 'My First Portfolio Website After Completion Of HTML CSS And JS.The Website Is All About My Personel Details And Projects.',
    info2: 'HTML CS JS',
    url: 'https://khanusman786.github.io/Portfolio-V1/',
    repo: 'https://github.com/KhanUsman786/Portfolio-V1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-trcker.png',
    title: 'Data Science Projects',
    info: 'I Have done the several data science and Machine learning Projects you can find them on my github repo.',
    info2: 'Classification Modals ,Regression Modals , Clustering Modals and Associate Rule Modals',
    url: 'https://github.com/KhanUsman786?tab=repositories',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jk',
    title: 'Other Noteworthy Projects Repos',
    info: 'Check On My Github Repo',
    info2: '',
    url: 'https://github.com/KhanUsman786?tab=repositories',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch',
  btn: '',
  email: 'khanusman786@live.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/KhanUsman009',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/KhanUSman786',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/khan-usman-a70b3617b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KhanUsman786',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
