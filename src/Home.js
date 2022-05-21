import {SafeAreaView, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import {useSelector, useDispatch} from 'react-redux';
import {calculateTotals, getCartItems} from './features/cart/cartSlice';

export default function Home() {
  const {cartItems, isLoading} = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading....</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Navbar />
      <CartContainer />
    </SafeAreaView>
  );
}
