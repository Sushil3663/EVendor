import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
const initialState = {
    productList: [],
    cartItem: []
};
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            // console.log(action)
            state.productList = [...action.payload];
        },
        addItem: (state, action) => {
            const check = state.cartItem.some((el) => el._id === action.payload._id);
            if (check) {
                toast("Already Item in Cart");
            } else {
                toast("Item Add successfully");
                const total = action.payload.price;
                state.cartItem = [
                    ...state.cartItem,
                    { ...action.payload, qtn: 1, total: total },
                ];
            }
        },
        deleteItem: (state, action) => {
            console.log(action.payload)
            let id = action.payload
            const index = state.cartItem.findIndex((el) => el._id === id);
            state.cartItem.splice(index, 1)

        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload); // find current index of id.
            let qtn = state.cartItem[index].qtn; // find current qnt through index
            const qtnInc = ++qtn; // increase qtn
            state.cartItem[index].qtn = qtnInc; // update qnt 

            const price = state.cartItem[index].price; // current price
            const total = price * qtnInc; // increses price

            state.cartItem[index].total = total; // update price
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qtn = state.cartItem[index].qtn;
            if (qtn > 1) {
                const qtyDec = --qtn;
                state.cartItem[index].qtn = qtyDec;

                const price = state.cartItem[index].price;
                const total = price * qtyDec;

                state.cartItem[index].total = total;
            }
        },

    }
})
export default productSlice.reducer;

export const { setDataProduct, addItem, deleteItem, increaseQty, decreaseQty } = productSlice.actions