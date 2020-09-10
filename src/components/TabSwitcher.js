import React, { useState } from "react";

function TabSwitcher({ id, name, content, activeTab, setActiveTab }) {
  let styleActive = "px-2 border py-1 cursor-pointer ";
  let styleInactive = "px-2 py-1 border cursor-pointer opacity-75";

  return (
    <div
      className={activeTab === id ? styleActive : styleInactive}
      onClick={() => setActiveTab(id)}
    >
      <span className="w-1 h-1 mx-1 pl-1 pt-1 bg-yellow-600 text-xs tracking-tight">
        JS
      </span>
      {name}.js
    </div>
  );
}

export default TabSwitcher;
