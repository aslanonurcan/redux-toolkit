import {View, Text, Button} from 'react-native';
import React from 'react';
import CartItem from './CartItem';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from '../features/cart/cartSlice';

export default function CartContainer() {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector(store => store.cart);

  if (amount < 1) {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>Cart is empty</Text>
      </View>
    );
  }

  return (
    <View>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <View style={{height: 20}} />
      <Text>Total: {total.toFixed(2)}</Text>
      <View style={{height: 20}} />
      <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
    </View>
  );
}
