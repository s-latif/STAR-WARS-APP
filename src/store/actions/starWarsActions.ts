import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStarWarsData = createAsyncThunk(
  'starWars/getStarWarsData',
  async () => {
    // const response = await fetchStarWarsData();
    return [];
  }
);