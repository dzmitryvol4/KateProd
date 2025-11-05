import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Component } from 'react';
import { MenuContainer } from './menuContainer';
import '../styles/mainPage.css'



const MainPageComponent: React.FC = () => {
  return (
            <div className="background">
            <Box className='Box'>
                <Card className='Card'>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>Main Page</Typography>
                        <Typography variant="h4" gutterBottom>Тут скоро будет приколы</Typography>
                    </CardContent>
                </Card>
            </Box>
        <MenuContainer></MenuContainer>
        </div>
        );
}


export default MainPageComponent;