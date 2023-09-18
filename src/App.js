import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Setup from './pages/Setup';
import Question from './pages/Question';
import Drink from './pages/Drink';
import WTF from './pages/WTF';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/question/:questionNumber" element={<Question />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/WTF" element={<WTF />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

