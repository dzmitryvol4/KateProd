import React from 'react';
import { MenuContainer } from './menuContainer';
import MenuCategoryListComponent from './menuCategoryList.component';
import '../styles/mainPage.css';

const MainPageComponent = () => {
  return (
    <div className="main-page-layout">
      {/* Центральный блок с меню категорий */}
      <div className="category-list-center">
        <MenuCategoryListComponent />
      </div>

      {/* Меню внизу страницы */}
      <footer className="menu-container-bottom">
        <MenuContainer />
      </footer>
    </div>
  );
};

export default MainPageComponent;