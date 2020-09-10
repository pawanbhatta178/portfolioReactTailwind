import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  const contactDetails = {
    address: "Jackson Heights, NY, USA",
    email: "pawanbhatta179@gmail.com",
    phone: "+17854082250",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.98309957685!2d-73.90202772796064!3d40.759321833806474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fa191b4692b%3A0xe573e64fb17e324a!2sJackson%20Heights%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1599175950487!5m2!1sen!2sus",
  };

  const tabs = [
    {
      id: "1",
      name: "MySkills",
      content: [
        "HTML/CSS/JS",
        "React",
        "Redux/ContextAPI",
        "TailwindCss/Bootstrap",
        "Webpack",
        "Node.js",
        "GraphQL",
        "Firebase",
        "npm/yarn",
        "docker",
        "GIT",
        "MySQL/Postgres",
        "MongoDB/Firestore",
        "Typescript",
        "C/C++",
        "React Native",
      ],
    },
    {
      id: "2",
      name: "MyExperience",
      content: [
        {
          "2016-2017":
            "Maths and Computer Science Tutor at Washburn University, Kansas",
        },
        {
          "2017-2019":
            "Academic Peer Instructor of Probability and Statistics at Laguardia CC, New York",
        },
        { "2019-now": "Freelancer and Web Developer" },
      ],
    },
    {
      id: "3",
      name: "MyEducation",
      content: [
        {
          schoolName: "Queens College",
          year: "2019-2021 Spring",
          degree: "Bachelor of Science in Computer Science",
          GPA: "3.96*",
        },
        {
          schoolName: "LaGuardia CC",
          year: "2017-2019",
          degree: "Associate of Science in Computer Science",
          GPA: "3.93",
        },
      ],
    },
  ];

  const [projects, setProjects] = useState([
    {
      id: "1",
      category: "Website",
      title: "Online Code Editor",
      technologiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      codeUrl:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      demoUrl: "",
    },
    {
      id: "2",
      category: "CATEGORY",
      title: " Shooting Stars",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$21.15",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/421x261",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "3",
      category: "Category",
      title: "Hazy Sunlight",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "4",
      category: "Category",
      title: "Caravan Runaway",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "5",
      category: "Category",
      title: "Exhausted River",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "6",
      category: "Category",
      title: "Daisy Morning",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "7",
      category: "Category",
      title: "Forgiving Sight",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "8",
      category: "Category",
      title: "Looming Sunday",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "9",
      category: "Category",
      title: "Revolving Neptune",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "10",
      category: "Category",
      title: "Expanding Universe",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
    {
      id: "11",
      category: "Category",
      title: "Black Black-Hole",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
      shortDescription: "$16.00",
      description: "Lorem ipsuma s dnad",
      imageUrl: "https://dummyimage.com/420x260",
      viewCode:
        "https://drive.google.com/file/d/1z5Hyu5czHAwMSzbhmELQ4rADiczAIP0o/view?usp=sharing",
      liveDemo: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  const value = { themeMode, toggleTheme, projects, contactDetails, tabs };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
