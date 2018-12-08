import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import DrawerAssoc from './src/navigations/DrawerAssoc';
import HomeAssocScreen from './src/screens/HomeAssocScreen';
import EventScreen from './src/screens/EventScreen';

export default class App extends React.Component {
  render() {
    return (
      <DrawerAssoc/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
