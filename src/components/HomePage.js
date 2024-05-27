// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from './card';

import Nav from './nav';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-page');
  };

  return (
    <div>
      <Nav/>

      <AnimatedCard/>

    </div>
  );
};

export default HomePage;
