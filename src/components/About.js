import React, { useState, useEffect, useContext } from "react";
import TabSwitcher from "./TabSwitcher";
import Tab from "./Tab";
import { AppContext } from "../AppProvider";

function About() {
  const [activeTab, setActiveTab] = useState("1");
  const [activeTabContent, setActiveTabContent] = useState("");
  const { tabs } = useContext(AppContext);

  useEffect(() => {
    setActiveTabContent(tabs.filter((tab) => tab.id === activeTab)[0]);
  }, [activeTab]);

  return (
    <div className="py-24 shadow-lg overflow-hidden">
      <div className="mx-4 sm:mx-32 my-4 ">
        <div className=" flex flex-row overflow-hidden" id="About">
          {tabs.map((tab, index) => (
            <TabSwitcher
              key={index}
              id={tab.id}
              name={tab.name}
              content={tab.content}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
        <div className="bg-dark-editor w-full h-screen overflow-x-auto overflow-y-scroll p-4">
          <div className="">
            {" "}
            <Tab
              code={activeTabContent.content}
              functionName={activeTabContent.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
