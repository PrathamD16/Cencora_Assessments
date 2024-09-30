import { createSlice } from '@reduxjs/toolkit'
import {UserList, UserProp} from './UserProp'
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
            let temp = [...state.users]
            temp.splice(action.payload, 1)
            state.users = [...temp]
        }
    }
})

export default userSlice.reducer;
export const {addUser, deleteUser} = userSlice.actions