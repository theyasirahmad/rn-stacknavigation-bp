// import 'react-native-gesture-handler';
import * as React from 'react';
import Stacknavigator from './src/navigation/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        <Stacknavigator />
    </NavigationContainer>
  );
}