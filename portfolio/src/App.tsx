import React from 'react';
import './App.css';
import { MainPageComponent } from './components/mainPage.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsComponent } from './components/projects.component';
import { AboutMeComponent } from './components/aboutMe.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />

          <Route path="/about" element={<AboutMeComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
