import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    email: "",
  firstName: "",
  lastName: "",
  _id: "",
}

 export const userSlice =  createSlice({
    name: "user",
    initialState,
    reducers:{
        loginRedux(state,action) {
            console.log(action.payload.result)
            // state = action.payload.result
            state._id = action.payload.result._id;
            state.firstName = action.payload.result.firstName;
            state.lastName = action.payload.result.lastName;
            state.email = action.payload.result.email;

        },
        logoutRedux: (state, action) => {
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
          },
       
    }
})

export default userSlice.reducer;
export const {loginRedux,logoutRedux} = userSlice.actions