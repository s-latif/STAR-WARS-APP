import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStarWarsData } from '../actions/starWarsActions';

export interface StarWarsItem {
  name?: string;
  gender?: string;
  birth_year?: string;
  height?: string;
  climate?: string;
  terrain?: string;
  population?: string;
  title?: string;
  director?: string;
  release_date?: string;
  classification?: string;
  designation?: string;
  average_height?: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  hyperdrive_rating?: string;
  url: string;
}

interface StarWarsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsItem[];
}

interface StarWarsState {
  data: StarWarsItem[];
  next: string | null;
}

const initialState: StarWarsState = {
  data: [],
  next: null,
};

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStarWarsData.fulfilled, (state, action: PayloadAction<StarWarsResponse>) => {
      state.data = action.payload.results;
      state.next = action.payload.next;
    });
  },
});

export default starWarsSlice.reducer;