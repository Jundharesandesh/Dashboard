// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewPage from './components/NewPage';


const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>

    </Router>
  );
};

export default App;
