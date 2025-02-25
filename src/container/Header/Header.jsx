import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import './Header.scss';


const Header = () => (
  <>
  
  <div className="app__header app__flex">
  
  <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          
          <div style={{ marginLeft: 20 }}>
            
          
            <h1 
            
            className="header-text">
              
              Hello,I am <span >Syeda Maham Fahim</span> <br/>I am a <span >Fullstack Developer</span> and <span >Telecommunication Engineer</span>  </h1>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  </>
);

export default AppWrap(Header, 'home','new',true);
