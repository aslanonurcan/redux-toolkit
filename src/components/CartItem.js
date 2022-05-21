import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {decrease, increase, removeItem} from '../features/cart/cartSlice';

export default function CartItem({id, img, title, price, amount}) {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{flex: 2}}>{title}</Text>
        <Image
          source={{uri: img}}
          style={{height: 40, width: 40, flex: 1}}
          resizeMode={'contain'}
        />
        <Text style={{flex: 1}}>{amount}</Text>
        <Button title="remove" onPress={() => dispatch(removeItem(id))} />
        <Button title="up" onPress={() => dispatch(increase(id))} />
        <Button title="down" onPress={() => dispatch(decrease(id))} />
      </View>
    </View>
  );
}
