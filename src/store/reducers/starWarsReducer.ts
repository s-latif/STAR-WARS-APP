import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStarWarsData } from '../actions/starWarsActions';

interface StarWarsState {
  data: any[];
}

const initialState: StarWarsState = {
  data: [],
};

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStarWarsData.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    });
  },
});

export default starWarsSlice.reducer;