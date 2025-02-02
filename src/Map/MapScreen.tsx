import React, { Component, useCallback, useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Mapbox, {MapView} from '@rnmapbox/maps';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from '../../store';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export function MapScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = () => bottomSheetRef.current.close()
  const handleOpenPress = () => bottomSheetRef.current.expand()

// Access counter value from Redux state
  const count = useSelector((state) => state.counter.value);

  // Get dispatch function from Redux
  const dispatch = useDispatch();


  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Button title={'Expand sheet'} onPress={handleOpenPress} />
          <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            snapPoints={['50%', '50%']}>
            <Button title="Close Sheet" onPress={handleClosePress} />
            <BottomSheetView
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text>Awesome 🎉</Text>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Count: {count}</Text>
                <Button title="Increment" onPress={() => dispatch(incremented())} />
                <Button title="Decrement" onPress={() => dispatch(decremented())} />
              </View>
            </BottomSheetView>
          </BottomSheet>
        </MapView>
      </View>
    </View>
  );
};
