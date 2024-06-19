"use client";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://api.antcar.dev2.webant.ru/';
const Cars = () => {

  const { data, error, isLoading } = useQuery({
        queryKey: ['cars'], // query key
        queryFn: async () => {
        const response = await axios.get(API_URL);
        return response.data; // return the data from the API
        }
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
      <h1>Cars</h1>
      {data && data.map((car) => ( // render the data if it exists
        <div key={car.id}>{car.name}</div>
      ))}
    </div>
  );
};

export default Cars;