import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axios'

export const fetchLinks = createAsyncThunk('dashboard/fetchLinks',async (_) => {
    const res = await api.get('/dash/link')
    return res.data.data
})

export const addLink = createAsyncThunk('dashboard/addLink',async (data) => {
    const res = await api.post('/dash/add',data)
    return res.data
})
export const deleteLink = createAsyncThunk('dashboard/delete',async (id) => {
    const res = await api.delete('/dash/delete',{
        params:{
            id:id
        }
    })
    return res.data
})

export const updateLink = createAsyncThunk('dashboard/update',async(data) => {
    const res = await api.put('/dash/update',data)
    return res.data
})


export const clickUpdate = createAsyncThunk('dashboard/click',async(id) => {
    const res = await api.put('/dash/click',
        {
            id:id
        }
    )
    return res.data
})

const dashSlice = createSlice({
    name: 'dash',
    initialState: {
        myLinks: [],
        totalClick: 0,
        mostClickedLink: null,
    },
    reducers: {
        totalClickCalculate: (state) => {
            state.totalClick = state.myLinks.reduce((acc, link) => acc + (link.click_count || 0), 0)
        }
    },
    extraReducers: (builder) => {
        const calculateTotalClick = (links) => links.reduce((acc, link) => acc + (link.click_count || 0), 0)
        const findMostClicked = (links) => {
            if (links.length === 0) return null
            return [...links].sort((a, b) => b.click_count - a.click_count)[0]
          }
        builder
            .addCase(fetchLinks.fulfilled, (state, action) => {
                state.myLinks = action.payload
                state.totalClick = calculateTotalClick(state.myLinks)
                state.mostClickedLink = findMostClicked(state.myLinks)
            })
            .addCase(addLink.fulfilled, (state, action) => {
                state.myLinks.push(action.payload)
                state.totalClick = calculateTotalClick(state.myLinks)
            })
            .addCase(deleteLink.fulfilled, (state, action) => {
                state.myLinks = state.myLinks.filter(link => link.id !== action.payload)
                state.totalClick = calculateTotalClick(state.myLinks)
            })
            .addCase(updateLink.fulfilled, (state, action) => {
                const index = state.myLinks.findIndex(link => link.id === action.payload.id)
                if (index !== -1) {
                    state.myLinks[index] = action.payload
                }
                state.totalClick = calculateTotalClick(state.myLinks)
            })
            .addCase(clickUpdate.fulfilled, (state, action) => {
                const updatedLink = action.payload
                const index = state.myLinks.findIndex(link => link.id === updatedLink.id)
                if (index !== -1) {
                    state.myLinks[index] = updatedLink
                }
                state.totalClick = calculateTotalClick(state.myLinks)
            })
    }
})
export const { totalClickCalculate } = dashSlice.actions
export default dashSlice.reducer
