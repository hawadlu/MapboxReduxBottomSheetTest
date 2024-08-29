import * as React from 'react';
import { Button, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapScreen} from './src/Map/MapScreen';
import Mapbox from '@rnmapbox/maps';
import * as mapToken from './mapBox.json';
import { useCallback, useRef, useState } from "react";
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

Mapbox.setAccessToken(mapToken.token);

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
