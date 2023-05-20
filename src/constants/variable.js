import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    carrent,
    weather,
    jobit,
    tripguide,
    threejs,
    nextjs,
    firebase,
    mui,
    bootstrap,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MUI",
      icon: mui,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  
  const projects = [
    {
      name: "Fit Grocery",
      description:
        "Web-based platform that allows users to search, fruits and veggies . They can add them to cart and order them .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      url: "https://fit-grocery-ruby.vercel.app/",
      image: carrent,
      source_code_link: "https://github.com/Avinash-o1/fitGrocery/tree/main",
    },
    {
      name: "Netflix",
      description:
        "Web application that enables users to search for movies and web series on popular site of netflix you cant play the video though.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "movieapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      url: "https://netflix-react-avi.netlify.app/",
      image: jobit,
      source_code_link: "https://github.com/Avinash-o1/netflix-reactjs",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "canvas",
          color: "pink-text-gradient",
        },
      ],
      url: "https://resume-builder-app-avi.netlify.app/",
      image: tripguide,
      source_code_link: "https://github.com/Avinash-o1/Resume-Builder",
    },
    {
      name: "Weather News",
      description:
        "Web-based platform that allows users to search for weather of different locations and provides a summary using chatGPT API.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "ChatGPT_API",
          color: "pink-text-gradient",
        },
      ],
      url: "",
      image: weather,
      source_code_link: "https://github.com/Avinash-o1/weatherApp",
    },
  ];
  
  export { services, technologies, projects };