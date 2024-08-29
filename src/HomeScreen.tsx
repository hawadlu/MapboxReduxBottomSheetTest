// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from '../store';

function HomeScreen() {
  // Access counter value from Redux state
  const count = useSelector((state) => state.counter.value);

  // Get dispatch function from Redux
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(incremented())} />
      <Button title="Decrement" onPress={() => dispatch(decremented())} />
    </View>
  );
}

export default HomeScreen;
