import api from "../axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProfile = createAsyncThunk('user/profile', async (username) => {
    const res = await api.get('user/profile',{
        params:{
            username:username
        }
    })
    return res.data
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        profile:[]
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfile.fulfilled,(state,action) => {
             state.profile = action.payload.profile[0]
        })
    }
})

export default userSlice.reducer