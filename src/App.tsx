import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/lib/queries/queryClient';
import DynamicRoutes from './DynamicRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DynamicRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
