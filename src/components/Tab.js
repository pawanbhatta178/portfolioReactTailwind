import React from "react";
import ReactJson from "react-json-view";

function Tab({ functionName, code }) {
  return (
    <>
      <div className="text-gray-400">
        <span className="text-blue-300">const</span> {functionName} =
        <span className="text-yellow-500"> () </span>{" "}
        <span className="text-blue-300">=> </span>
        <span className="text-yellow-500 border">{`{`}</span>
        <br />
        <span className="text-blue-300">return</span>
      </div>
      <ReactJson
        src={code}
        name={null}
        theme="ocean"
        enableClipboard={false}
        displayDataTypes={false}
        indentWidth={"3"}
      />
      <span className="text-yellow-500 border">{`}`}</span>
      <span className="blinker text-gray-200 text-xl font-medium">|</span>
    </>
  );
}

export default Tab;
