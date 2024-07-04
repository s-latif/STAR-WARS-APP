// src/store/actions/starWarsActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../api/mockApi';

interface StarWarsItem {
  name: string;
  url: string;
}

interface StarWarsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsItem[];
}

export const getStarWarsData = createAsyncThunk<StarWarsResponse, string>(
  'starWars/getStarWarsData',
  async (url) => {
    const response = await fetchData(url);
    return response;
  }
);