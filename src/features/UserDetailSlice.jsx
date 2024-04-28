import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Creating user using async thunk
export const creatingUser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("https://641dd63d945125fff3d75742.mockapi.io/crud", data,
            { headers: { "Content-Type": "application/json",},}
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Showing the user
export const showingUser = createAsyncThunk("showuser", async( data, {rejectWithValue}) => {
    try {
        const response = await axios.get("https://641dd63d945125fff3d75742.mockapi.io/crud")
        return response.data;
    } catch(error) {
        return rejectWithValue(error);
    }
})

//Deleting the user
export const deletingUser = createAsyncThunk("deleteUser", async ( id, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`)
        return response.data;
    } catch(error) {
        return rejectWithValue(error);
    }
})

//Updating the User
export const updatingUser = createAsyncThunk("updating User", async (data, {rejectWithValue}) => {
    try {
        const response = await axios.put(`https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`, data)
        return response.data;
    } catch(error) {
        return rejectWithValue(error);
    }
})

const UserDetailSlice = createSlice({
    name: 'userdetails',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    }, 

    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(creatingUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(creatingUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(creatingUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(showingUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(showingUser.fulfilled, (state, action) => {
                state.loading = false,
                state.users = action.payload
            })
            .addCase(showingUser.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            })
            .addCase(deletingUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletingUser.fulfilled, (state, action) => {
                state.loading = false;
                console.log("action payload:" , action.payload)
                const { id } = action.payload;
                if(id) {
                    state.users = state.users.filter((element) => element.id !== id)
                }
                console.log(state.users)
            })
            .addCase(deletingUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(updatingUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updatingUser.fulfilled, (state, action) => {
                state.loading = true;
                const { id } = action.payload
                if(id) {
                    state.users = state.users.map(element => element.id === id ? action.payload : element)
                }
            })
            .addCase(updatingUser.rejected, (state, action) => {
                state.loading = false,
                state.users = action.payload
            })
    }
});

export default UserDetailSlice.reducer;

export const { searchUser } = UserDetailSlice.actions;

