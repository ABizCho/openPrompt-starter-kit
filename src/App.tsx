import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import queryClient from '@/lib/queries/queryClient';
import DynamicRoutes from './DynamicRoutes';
import theme from './styles/mui/theme';
import './App.css';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <DynamicRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
