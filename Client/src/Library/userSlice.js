import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { mockUser } from '../Data/mockUser';


export const getUser = createAsyncThunk(
  'user/getUser', async(data) => {
      try{
        const { email, password } = data;
        if(email === mockUser.email && password === mockUser.password){
          return mockUser;
        }
        else{
          return 404
        }
      }
      catch(error){
        console.log(error);
      }
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
    builder.addCase(getUser.pending, (state)=>{
        state.loading = true,
        state.error = null
    })
    builder.addCase(getUser.fulfilled, (state, action)=>{
        state.loading = false,
        state.data = action.payload
    })
    builder.addCase(getUser.rejected, (state, action)=>{
        state.loading = false,
        state.error = action.error.message
    })
  }
})



export default userSlice.reducer