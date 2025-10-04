import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Component } from 'react';


export class MainPageComponent extends Component {
    render(): any{
        return (

            <Box sx={{       
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',             
                    alignItems: 'center',
                    height: '100vh',
                    
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                  }}>

                <Card sx={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '600px',
                    maxHeight: '600px',
                    p: 4, // внутренний отступ
                    boxShadow: 4,
                    borderRadius: 4
                    }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>Main Page</Typography>
                        <Typography variant="h4" gutterBottom>Тут скоро будет приколы</Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }
}