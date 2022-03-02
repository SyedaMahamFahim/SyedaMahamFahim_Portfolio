import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/syedamahamfahim/"><BsLinkedin /></a>
      
    </div>
    <div>
      <a href="https://github.com/SyedaMahamFahim"><BsGithub/></a>
    </div>
    <div>
      <a href="https://medium.com/@syedamahamfahim"><AiOutlineMedium /></a>
    </div>
  </div>
);

export default SocialMedia;
