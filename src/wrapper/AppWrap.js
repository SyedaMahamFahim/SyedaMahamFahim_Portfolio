import React  from 'react';
import {  NavigationDots, SocialMedia } from '../components';



const AppWrap = (Component, idName, classNames) => function HOC() {

  return (
    <>
  
  
    <div id={idName} className={`app__container ${classNames}`}>
      
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className={`copyright`}>
          <p className="p-text"  style={{
          color:classNames == "app__whitebg" ? "black" :"white"
        }}>@2022 Syeda Maham Fahim</p>
          <p className="p-text"  style={{
          color:classNames == "app__whitebg" ? "black" :"white"
        }}>All rights reserved</p>
        </div>
      </div>
      
      <NavigationDots active={idName} />
      
    </div>
    </>
  );
};

export default AppWrap;
