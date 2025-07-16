import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axios'

// LocalStorage'dan güvenli token okuma
let tokenFromStorage = null
if (typeof window !== 'undefined') {
  tokenFromStorage = localStorage.getItem('token')
}

// 🔐 Giriş
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/auth/login', credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Giriş başarısız'
      )
    }
  }
)

// 🔐 Kayıt
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/auth/register', credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Kayıt başarısız'
      )
    }
  }
)

// 👤 Kullanıcıyı çek
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('token') : null

      if (!token) {
        return thunkAPI.rejectWithValue('Token bulunamadı')
      }

      const response = await api.get('/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Kullanıcı bilgisi alınamadı'
      )
    }
  }
)

const initialState = {
  user: null,
  token: tokenFromStorage,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.loading = false
      state.error = null
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
      }
    },
  },
  extraReducers: (builder) => {
    builder

      // Giriş
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', action.payload.token)
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Kayıt
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Kullanıcıyı çek
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        //console.log(action.payload.me);
        state.user = action.payload.me
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
