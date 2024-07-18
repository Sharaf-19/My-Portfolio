import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  java,
  sql,
  sh,
  shcommerce,
  dotnet,
  csharp,
  python,
  bookshelf,
  bookshelfproject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript JS",
    icon: javascript,
  },
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJs Developer",
    icon: reactjs,
  },
  {
    title: "ASP.NET Developer",
    icon: dotnet,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "ASP.NET Developer",
    company_name: "Online Book Store website",
    icon: bookshelf,
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "Developed using ASP.NET and C#.",
      "User Authentication: Implemented secure user registration and login functionalities.",
      "Book Catalog Management: Enabled administrators to add, update, and delete book listings.",
      "Shopping Cart: Integrated a shopping cart for users to manage their book purchases.",
      "Order Processing: Automated order processing and confirmation system.",
      "Secure Payment Gateway: Incorporated a secure payment system for transactions.",
      "Search Functionality: Added a search feature to help users easily find books.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SH shopping Website",
    icon: sh,
    iconBg: "#ffffff",
    date: "September 2023",
    points: [
      "Developed an E-commerce website using JavaScript and other related technologies.",
      "Designed an intuitive and visually appealing user interface that ensures easy navigation for customers.",
      "Creating a dynamic shopping cart that allows users to add, update, and remove items as they shop.",
      "Ensuring the website is responsive and accessible on various devices, including desktops, tablets, and mobile phones.",
    ],
  },
  {
    title: "JAVA",
    company_name: "Restuarant Management System",
    icon: java,
    iconBg: "#ffffff",
    date: "December 2022",
    points: [
      "Developed a comprehensive restaurant management system using Java programming language.",
      "The system simplifies the process of taking and processing customer orders, reducing errors and enhancing order accuracy.",
      "Restaurant owners can easily add, edit, or remove menu items, specify pricing, and update availability status.",

      /*"Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",*/
    ],
  },
  {
    title: "DataBase Management System",
    company_name: "Human Resources Management System",
    icon: sql,
    iconBg: "#ffffff",
    date: "April 2023",
    points: [
      "Contributed to the development of a database management system for an HR management system project, showcasing strong teamwork, database design, and SQL skills.",
      /* "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",*/
    ],
  },
];

//feedbacks

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SH E-commerce",
    description:
      "SH is an online shopping destination for everything, all in one place! it is a platform to discover a world of convenience and choice as you explore vast selection of products, from the latest fashion trends to cutting-edge electronics, home essentials, and more.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "orange-text-gradient",
      },
    ],
    image: shcommerce,
    source_code_link: "https://github.com/Sharaf-19/SH-e-commerce-Project",
  },
  {
    name: "BookShelf Store",
    description:
      "BookShelf is an online bookstore developed using ASP.NET and C#. It provides a comprehensive platform for users to browse, search, and purchase books. The website features secure user authentication, a robust book catalog management system, a user-friendly shopping cart, and seamless order processing.",
    tags: [
      {
        name: ".Net 7",
        color: "blue-text-gradient",
      },
      {
        name: "C Sharp",
        color: "green-text-gradient",
      },
      {
        name: "Razor Page",
        color: "pink-text-gradient",
      },
    ],
    image: bookshelfproject,
    source_code_link: "https://github.com/Sharaf-19/BookShelf-Project",
  },
  /* {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
];

export { services, technologies, experiences, testimonials, projects };
