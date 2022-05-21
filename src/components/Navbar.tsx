import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Navbar() {
  const {amount} = useSelector(store => store.cart);

  return (
    <View
      style={{
        height: 40,
        backgroundColor: '#1884c7',
        flexDirection: 'row',
      }}>
      <Text style={{flex: 1, color: 'white', textAlign: 'right', fontSize: 24}}>
        Navbar
      </Text>
      <Text
        style={{
          flex: 1,
          color: 'white',
          textAlign: 'right',
          marginRight: 20,
          fontSize: 24,
        }}>
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
