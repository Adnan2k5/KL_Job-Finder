import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from '../AxiosClient/AxiosClient';
import { login } from '../Api/UserApi';


export const loginUser = createAsyncThunk(
  'user/getUser', async(data) => {
      try{
        if(data === null){
          return null;
        }
        const res = await login(data);
        return res.data;
      }
      catch(error){}
  }
)
export const userSlice = createSlice({
  name: 'User',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(loginUser.pending, (state)=>{
        state.loading = true,
        state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, action)=>{
        state.loading = false,
        state.data = action.payload
    })
    builder.addCase(loginUser.rejected, (state, action)=>{
        state.loading = false,
        state.error = action.error.message
    })
  }
})



export default userSlice.reducer