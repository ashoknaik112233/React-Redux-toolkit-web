import { createSlice } from '@reduxjs/toolkit'; //craeteslice metheod from redux


// 

const initialState = [];

const cartSlice = createSlice({
    //objects
    name: 'cart',
    initialState,
    //create reduces and objects and actions
    reducers: {
        add(state, action) { //pass some data from UI and i wll read from actions 
            //and it will give data that i want to updadte my state 
            state.push(action.payload)
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
        //we cannor create api slice here ,we need seperate file for api slice method(productSlice)
    }
});
export const { add, remove } = cartSlice.actions; // actions
export default cartSlice.reducer; //to return reducer &give state