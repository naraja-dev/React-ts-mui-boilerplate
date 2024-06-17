import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseState {
  isLoading: boolean;
  error: string | null;
  userDetails: any
}

const initialState: BaseState = { isLoading: false, error: null, userDetails: [] };

const baseReducer = createSlice({
  name: "base",
  initialState,
  reducers: {
    userDetails(state, action) {
      state.userDetails.push(action.payload)
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
});

export const { startLoading, stopLoading, setError, clearError, userDetails } = baseReducer.actions;

export default baseReducer.reducer;
