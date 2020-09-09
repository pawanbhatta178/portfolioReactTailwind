import React, { useState } from "react";
import Tab from "./Tab";
const tabs = [
  {
    id: "1",
    name: "About.js",
    content: {
      name: "Pawan Bhatta",
      email: "pawanbhatta178@gmail.com",
      education: [
        { schoolName: "LaGuardia CC", years: "2018-19", GPA: "3.96" },
        { schoolName: "Queens College", years: "2019-2021", GPA: "3.95*" },
      ],
    },
  },
  {
    id: "2",
    name: "WhoAmI.js",
    content: {
      name: "Prabhat Bhatta",
      email: "pawanbhatta179@gmail.com",
      education: [
        { schoolName: "LaGuardia CC", years: "2018-19", GPA: "3.96" },
        { schoolName: "Queens College", years: "2019-2021", GPA: "3.95*" },
      ],
    },
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="mx-4 sm:mx-32 my-4" id="About">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          id={tab.id}
          name={tab.name}
          content={tab.content}
          active={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
}

export default About;
