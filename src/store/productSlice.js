import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; //craeteslice metheod from redux
import statusCode from '../utils/statusCode';


// api call basically always not return data it also return errors and others status
//to handle this create object and hold reusult in data

const initialState = {
    data: [],
    status: statusCode.IDLE
}

const productSlice = createSlice({
    //objects
    name: 'products',
    initialState,
    //create reduces and objects and actions
    reducers: {
        // slice dont know how to handle asynch fun here ,
        //     fetchProducts(state, action) {
        //         state.data = action.payload;

        // }


    },
    //for async we have one more reducers

    //we have to readt the data here
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = statusCode.LOADING;
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = statusCode.IDLE;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = statusCode.ERROR;
            })




    }

});


export const { fetchProducts } = productSlice.actions; // actions
export default productSlice.reducer; //to return reducer &give state

//create async thunk function -
export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
})


//create Thunk() fun here
// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json(); //pass to in reducer
//         dispatch(fetchProducts(result));

//     }
// }