// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from './src/Map/MapScreen';
import Mapbox from '@rnmapbox/maps';
import * as mapToken from './mapBox.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from "./src/HomeScreen";

// Set Mapbox token
Mapbox.setAccessToken(mapToken.token);

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
