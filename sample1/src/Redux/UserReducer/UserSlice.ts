import { createSlice } from '@reduxjs/toolkit'
import {UserList, UserProp, UpdateProp} from './UserProp'
import {PayloadAction} from '@reduxjs/toolkit'


const listState: UserList = {
    users: []
}

const userSlice = createSlice({
    name:"userList",
    initialState:listState,
    reducers: {
        addUser(state, action:PayloadAction<UserProp>){
            state.users.push(action.payload)
        },
        deleteUser(state, action:PayloadAction<number>){
            state.users = state.users.filter(user => user._id !== action.payload)
        },
        updateUser(state, action:PayloadAction<UpdateProp>){
            state.users[action.payload.id] = action.payload.users
        }
    }
})

export default userSlice.reducer;
export const {addUser, deleteUser, updateUser} = userSlice.actions