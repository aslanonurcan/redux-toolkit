import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then(resp => resp.json())
    .catch(err => console.log(err));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.cartItems = [];
    },
    removeItem: (state, {payload}) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    },
    increase: (state, {payload}) => {
      const cItem = state.cartItems.find(item => item.id === payload);
      cItem.amount++;
    },
    decrease: (state, {payload}) => {
      const cItem = state.cartItems.find(item => item.id === payload);
      cItem.amount--;

      if (cItem.amount == 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== payload);
      }
    },
    calculateTotals: state => {
      let amount = 0;
      let total = 0;

      state.cartItems.map(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: state => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const {clearCart, removeItem, increase, decrease, calculateTotals} =
  cartSlice.actions;

export default cartSlice.reducer;
