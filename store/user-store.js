import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        set(state, action){
            return action.payload;
        },
    }
});

export { actions as userActions };
export { reducer as userReducer };