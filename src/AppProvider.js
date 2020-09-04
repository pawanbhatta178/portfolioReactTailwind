import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  const contactDetails = {
    address: "Jackson Heights, NY",
    email: "pawanbhatta179@gmail.com",
    phone: "+17854082250",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.98309957685!2d-73.90202772796064!3d40.759321833806474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fa191b4692b%3A0xe573e64fb17e324a!2sJackson%20Heights%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1599175950487!5m2!1sen!2sus",
  };

  const [projects, setProjects] = useState([
    {
      id: "1",
      category: "CATEGORY",
      title: "Catalyzer",
      technolgiesUsed: ["C", "JavaScript", "SQL"],
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "Catalyzer",
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
      title: "SecondLast",
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
      title: "Last",
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

  const value = { themeMode, toggleTheme, projects, contactDetails };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
