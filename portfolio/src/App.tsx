import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPageComponent } from './components/mainPage.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsComponent } from './components/projects.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
