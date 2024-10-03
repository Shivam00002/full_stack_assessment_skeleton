import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomesByUser = createAsyncThunk(
  'home/fetchHomesByUser',
  async (username) => {
    const response = await axios.get(`http://localhost:4000/home/find-by-user?username=${username}`);
    return response.data;
  }
);

export const updateHomeUsers = createAsyncThunk(
  'home/updateHomeUsers',
  async ({ homeId, users }) => {
    const response = await axios.put(`http://localhost:4000/home/update-users`, { homeId, users });
    return response.data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomesByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomesByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.homes = action.payload;
      })
      .addCase(fetchHomesByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateHomeUsers.fulfilled, (state, action) => {
        const updatedHome = action.payload;
        const index = state.homes.findIndex(home => home.id === updatedHome.id);
        if (index !== -1) {
          state.homes[index] = updatedHome;
        }
      });
  },
});

export default homeSlice.reducer;