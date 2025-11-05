import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// ✅ Все пути начинаются с ./components — внутри src/
import {ProjectPage} from './components/projectPage.component';
import  MainPageComponent  from './components/mainPage.component';
import { AboutMeComponent } from './components/aboutMe.component';
import { ProjectsComponent } from './components/projects.component';
import { DynamicCardWithCustom } from './components/dynamicCardWithCustom.component';

// Обёртка для передачи navigate


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/about" element={<AboutMeComponent />} />
        {/* Другие роуты */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;