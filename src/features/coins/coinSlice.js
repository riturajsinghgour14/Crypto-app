import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fecthcoin, fetchTredingCoins } from "./coinService";

const coinSlice = createSlice({
    name: 'coins',
    initialState:{
      coins: [],
      coin: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    reducers:{},

    extraReducers: (builder) => {
      builder 
          .addCase(fetchTrending.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
          })
          .addCase(fetchTrending.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.coins = action.payload;
          })
          .addCase(fetchTrending.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
          })

          .addCase(fetchSinglecoin.pending, (state,action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
          })
          .addCase(fetchSinglecoin.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.coin = action.payload;
          })
          .addCase(fetchSinglecoin.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
          });
 },
});

// Fetch Treading Coins

export const fetchTrending = createAsyncThunk("FETCH/TREADING", async () => {
 try{
    return await fetchTredingCoins();
 }catch(error){
  console.log(error);
 }
});

// Fetch Treading Coin

export const fetchSinglecoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try{
     return await fecthcoin(id);
  }catch(error){
   console.log(error);
  }
 });



export default coinSlice.reducer;