// src/store/reducers/starWarsReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStarWarsData } from '../actions/starWarsActions';

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