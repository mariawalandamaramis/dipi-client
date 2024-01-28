import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
<div className="items-center bg-white flex flex-col justify-center px-16 py-12 rounded-lg w-full mt-9 max-md:max-w-full ">
    <div className="flex w-full max-w-[1106px] flex-col items-stretch my-8 max-md:max-w-full">
        <div className="text-emerald-900 text-4xl font-extrabold leading-10 max-md:max-w-full">
          Mengenal Lebih Dalam Inovasi yang Dihadirkan
        </div>
        <div className="text-emerald-900 text-lg leading-7 mt-6 max-md:max-w-full">
          Pelajari inovasi ini secara mendalam untuk mendukungnya
        </div>
    <div className="mx-auto w-full mt-9 max-md:max-w-full">
      <div className="flex border-b border-emerald-900">
        {children.map(child => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-emerald-900 text-white bg-emerald-900' : ''
            } flex-1 text-emerald-900 font-medium py-2`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
    </div>
</div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };