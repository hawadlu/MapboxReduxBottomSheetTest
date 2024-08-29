import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {MapView} from '@rnmapbox/maps';


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

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
};
