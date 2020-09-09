import React, { useState } from "react";

function Tab({ id, name, content, activeTab, setActiveTab }) {
  return (
    <>
      <div className="border" onClick={() => setActiveTab(id)}>
        {name}
      </div>
      <div></div>
    </>
  );
}

export default Tab;
