import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Setup from './pages/Setup';
import Question from './pages/Question';
import Drink from './pages/Drink';
import WTF from './pages/WTF';
import Done from './pages/Done';
import Cocktail from './pages/Cocktail';
import Wordguess from './pages/Wordguess';
import TruthOrDare from './pages/TruthDare';
import WouldYouRather from './pages/WouldYa';
import NeverHaveIEver from './pages/Never';
import Which from './pages/Which';
import Spin from './pages/Spin';

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
          <Route path="/finished" element={<Done />} />
          <Route path="/cocktails" element={<Cocktail />} />
          <Route path="/wordGuess" element={<Wordguess />} />
          <Route path="/truthOrDare" element={<TruthOrDare />} />
          <Route path="/wouldYouRather" element={<WouldYouRather />} />
          <Route path="/neverHaveIEver" element={<NeverHaveIEver />} />
          <Route path="/whichbtch" element={<Which />} />
          <Route path="/spin" element={<Spin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

