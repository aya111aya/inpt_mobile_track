
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Page1 from './1erepage';
import Page2 from './2emepage';
import './App.css'
import Page3 from './3emepage';
import Page4 from './4emepage';
import Page5 from './5emepage';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/new">page2</Link>
            </li>
            <li>
              <Link to="/page3">page3</Link>
            </li>
            <li>
              <Link to="/page4">page4</Link>
            </li>
            <li>
              <Link to="/page5">page5</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/new" element={<Page2 />} />
          <Route path="/Page3" element={<Page3/>}/>
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
