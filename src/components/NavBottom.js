import React, { Component } from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import FAB from './FAB';

class NavBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/img/bottom-bar-white.png')}
        style={styles.container}>
        <FAB/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default NavBottom;