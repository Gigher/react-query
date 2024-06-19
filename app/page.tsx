"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from '../components/Posts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Cars from './cars/page';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
      <Cars />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;