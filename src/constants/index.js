import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  // threejs,
  bootstrap,
  MSUPREP,
  sh,
  shcommerce,
  dotnet,
  csharp,
  python,
  bookshelf,
  bookshelfproject,
  priceSpyder,
  msuprepPage,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: reactjs,
  },
  {
    title: 'ASP.NET Developer',
    icon: dotnet,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
];

const experiences = [
  // {
  //   title: 'Web Scraping',
  //   company_name: 'Amazon product web scraping',
  //   icon: priceSpyderLogo,
  //   iconBg: '#ffffff',
  //   date: 'August 2024',
  //   points: [
  //     'Built with Next.js 13: A modern platform designed to scrape Amazon product data and assist users in making informed purchasing decisions.',
  //     'Real-Time Notifications: Implemented automated email notifications for price drops and stock changes, ensuring users stay updated.',
  //     'Competitor Alerts: Developed functionality to notify competitors when products go out of stock, enhancing market competitiveness.',
  //     'Automated Scraping: Utilized cron jobs to perform regular scraping, keeping product information fresh and up-to-date.',
  //     'Interactive UI Design: Crafted an engaging user interface with a carousel header, leveraging Tailwind CSS and Headless UI for a seamless user experience.',
  //     'Product Scraping Tool: Users can input Amazon product links into a search bar to scrape and view detailed product information, including images and pricing.',
  //     'Product Insights Display: Enabled the display of previously scraped products, providing insights and tracking for users.',
  //   ],
  // },
  {
    title: 'Full Stack',
    company_name: 'Online Book Store website',
    icon: MSUPREP,
    iconBg: '#383E56',
    date: 'Novemeber 2024',
    points: [
      'The platform will assist students in finding previous years’ exam papers.',
      'Group project feature allowing students to invite others to join and create groups for final year projects.',
      'Simplifies the process for teachers to follow up on student progress through the platform.',
    ],
  },
  {
    title: 'Python',
    company_name: '',
    icon: python,
    iconBg: '#383E56',
    date: 'December 2024',
    points: [
      'GAME WITH AI OPPONENT USING MINIMAX ALGORITHM: Developed an interactive Connect 4 game with an AI opponent implemented using the Minimax algorithm with Alpha-Beta pruning.',
      ' HOSPITAL PLACEMENT OPTIMIZATION USING GENETIC ALGORITHM: Python-based program to optimize hospital placements on a grid map using Genetic Algorithms.',
    ],
  },
  {
    title: 'ASP.NET',
    company_name: 'Online Book Store website',
    icon: bookshelf,
    iconBg: '#383E56',
    date: 'April 2024',
    points: [
      'Developed using ASP.NET and C#.',
      'User Authentication: Implemented secure user registration and login functionalities.',
      'Book Catalog Management: Enabled administrators to add, update, and delete book listings.',
      'Shopping Cart: Integrated a shopping cart for users to manage their book purchases.',
      'Order Processing: Automated order processing and confirmation system.',
      'Secure Payment Gateway: Incorporated a secure payment system for transactions.',
      'Search Functionality: Added a search feature to help users easily find books.',
    ],
  },
  {
    title: 'Full stack',
    company_name: 'SH shopping Website',
    icon: sh,
    iconBg: '#ffffff',
    date: 'September 2023',
    points: [
      'Developed an E-commerce website using JavaScript and other related technologies.',
      'Designed an intuitive and visually appealing user interface that ensures easy navigation for customers.',
      'Creating a dynamic shopping cart that allows users to add, update, and remove items as they shop.',
      'Ensuring the website is responsive and accessible on various devices, including desktops, tablets, and mobile phones.',
    ],
  },
  // {
  //   title: 'JAVA',
  //   company_name: 'Restuarant Management System',
  //   icon: java,
  //   iconBg: '#ffffff',
  //   date: 'December 2022',
  //   points: [
  //     'Developed a comprehensive restaurant management system using Java programming language.',
  //     'The system simplifies the process of taking and processing customer orders, reducing errors and enhancing order accuracy.',
  //     'Restaurant owners can easily add, edit, or remove menu items, specify pricing, and update availability status.',
  //   ],
  // },
  // {
  //   title: 'DataBase Management System',
  //   company_name: 'Human Resources Management System',
  //   icon: sql,
  //   iconBg: '#ffffff',
  //   date: 'April 2023',
  //   points: [
  //     'Contributed to the development of a database management system for an HR management system project, showcasing strong teamwork, database design, and SQL skills.',
  //   ],
  // },
];

//feedbacks

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'MSUPREP',
    description:
      'MSUPREP is a comprehensive platform designed to enhance the academic experience of students by providing easy access to previous exam papers and facilitating project collaboration. The platform serves as a central hub where students can find past exam papers, join classrooms created by teachers, and form or join project groups for assignments.',
    tags: [
      {
        name: 'NEXTJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'orange-text-gradient',
      },
      {
        name: 'Express',
        color: 'orange-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: msuprepPage,
    source_code_link: 'https://github.com/msuprep?tab=repositories',
  },
  {
    name: 'SH E-commerce',
    description:
      'SH is an online shopping destination for everything, all in one place! it is a platform to discover a world of convenience and choice as you explore vast selection of products, from the latest fashion trends to cutting-edge electronics, home essentials, and more.',
    tags: [
      {
        name: 'HTML & CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'orange-text-gradient',
      },
    ],
    image: shcommerce,
    source_code_link: 'https://github.com/Sharaf-19/SH-e-commerce-Project',
  },
  {
    name: 'BookShelf Store',
    description:
      'BookShelf is an online bookstore developed using ASP.NET and C#. It provides a comprehensive platform for users to browse, search, and purchase books. The website features secure user authentication, a robust book catalog management system, a user-friendly shopping cart, and seamless order processing.',
    tags: [
      {
        name: '.Net 7',
        color: 'blue-text-gradient',
      },
      {
        name: 'C Sharp',
        color: 'green-text-gradient',
      },
      {
        name: 'MS SQL Server',
        color: 'orange-text-gradient',
      },
      {
        name: 'Razor Page',
        color: 'pink-text-gradient',
      },
    ],
    image: bookshelfproject,
    source_code_link: 'https://github.com/Sharaf-19/BookShelf-Project',
  },
  {
    name: 'PriceSpyder',
    description:
      'Amazon product scraping platform, A Next.js 13-based platform designed to scrape Amazon product data, send real-time notifications for price drops and stock alerts, and provide detailed product insights. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Headless UI',
        color: 'orange-text-gradient',
      },
      {
        name: 'Nodemailer',
        color: 'blue-text-gradient',
      },
    ],
    image: priceSpyder,
    source_code_link: 'https://github.com/Sharaf-19/PriceSpyder',
  },
];

export { services, technologies, experiences, testimonials, projects };
