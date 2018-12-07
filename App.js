import React from 'react';
import { View, Text } from 'react-native';
import DrawerAssoc from './src/navigations/DrawerAssoc';
import HomeAssocScreen from './src/screens/HomeAssocScreen';

export default class App extends React.Component {
  render() {
    return (
      <DrawerAssoc/>
    )
  }
}
