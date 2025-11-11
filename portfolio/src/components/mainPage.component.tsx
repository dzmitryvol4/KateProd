import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { MenuContainer } from './menuContainer';
import MenuCategoryListComponent from './menuCategoryList.component';
import '../styles/mainPage.css';

// Уже функциональный компонент — всё правильно!
const MainPageComponent: React.FC = () => {
  return (
    <div className="background">
      <Box className="Box">
        <Card className="Card">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Main Page
            </Typography>
            <MenuCategoryListComponent/>
              Тут скоро будет приколы
          </CardContent>
        </Card>
      </Box>
      <MenuContainer />
    </div>
  );
};

export default MainPageComponent;