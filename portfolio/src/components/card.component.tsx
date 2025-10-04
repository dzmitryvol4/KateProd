import React, { Component } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface Props {}

interface State {}

export class FullScreenCard extends Component<Props, State> {
  render(): React.ReactNode {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Card sx={{
          width: '90%',
          maxWidth: '600px',
          p: 4, // внутренний отступ
          boxShadow: 4,
          borderRadius: 4
        }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Добро пожаловать в нашу компанию!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed magna ac eros bibendum vestibulum ut non mi. Suspendisse potenti. Integer eget semper est. Vestibulum eu lacus at enim accumsan sodales vel quis augue.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Узнайте больше о наших услугах...
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}