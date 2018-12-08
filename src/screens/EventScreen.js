import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../styles/Colors';
import NavBottom from '../components/NavBottom';
import FicheEvent from '../components/FicheEvent';


export default class EventScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require('../assets/img/header-BG.png')}
            style={styles.headerBG}
            resizeMode='cover'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.greyBG,
  },
  headerBG: {
    position: 'absolute',
    top: 0,
    height: 153,
    width: '100%',
    zIndex: 0,
  },
})
