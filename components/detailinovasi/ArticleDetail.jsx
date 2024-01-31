import React, {Component} from 'react';
import { useState } from "react";
const ArticleDetail = ({activeKey, children}) => {
  const [key, setkey] = useState(activeKey)

  return (
  <div class="max-w-2xl mx-auto">
    
    <div class="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class="mr-2" role="presentation">
                <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                {children.map(item => {
            return (
              <span key={item.props.aKey} className={key === item.props.akey ? "tab-item active" : "tab-item"}
              onClick={() => setKey(item.props.aKey)}>
                {item.props.title}
              </span>
            )
          })}

                </button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</button>
            </li>
            <li class="mr-2" role="presentation">
                <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
            </li>
            <li role="presentation">
                <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
            </li>
        </ul>
    </div>
    <div id="myTabContent">
        <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        {children.map(item => {
            return (
              <div key={item.props.aKey} className={key === item.props.akey ? "tab-pane active" : "tab-item"}>
                <h2>{item.props.title}</h2>
                <span>{item.props.children}</span>
              </div>
            )
          })}
        </div>
        <div class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <span class="text-gray-500 dark:text-gray-400 text-sm"> {children.map(item => {
            return (
              <div key={item.props.aKey} className={key === item.props.akey ? "tab-pane active" : "tab-item"}>
                <h2>{item.props.title}</h2>
                <span>{item.props.children}</span>
              </div>
            )
          })}</span>
        </div>
    </div>

    
</div>

      )
}

export const Tab = () => {
  return
}

export default ArticleDetail