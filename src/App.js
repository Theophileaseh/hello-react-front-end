import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';  // eslint-disable-line
import Home from './components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="message" exact element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
