import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/syedamahamfahim/" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
      
    </div>
    <div>
      <a href="https://github.com/SyedaMahamFahim" target="_blank" rel="noreferrer noopener"><BsGithub/></a>
    </div>
    <div>
      <a href="https://medium.com/@syedamahamfahim" target="_blank" rel="noreferrer noopener"><AiOutlineMedium /></a>
    </div>
  </div>
);

export default SocialMedia;
