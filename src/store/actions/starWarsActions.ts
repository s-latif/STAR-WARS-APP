import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStarWarsData } from '../../api/mockApi';

export const getStarWarsData = createAsyncThunk(
  'starWars/getStarWarsData',
  async () => {
    const response = await fetchStarWarsData();
    return response;
  }
);