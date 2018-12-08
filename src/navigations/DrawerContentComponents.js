import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';

import { colors } from '../styles/Colors';
import { Icon } from 'react-native-elements';

class DrawerContentComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
        >
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.userImage}
                source={require('../assets/img/profileAssoc.jpg')}
              />
              <View style={styles.backCercle}>
                <TouchableOpacity style={styles.frontCercle}>
                  <Icon
                    type='feather'
                    name='camera'
                    size={16}
                    color='#fff'
                  /> 
                </TouchableOpacity>
              </View>
            </View>
            
            <Text style={styles.userName}>Elyed fel Yed</Text>
            <Text style={styles.numberEvents}>5 événements réalisés</Text>
          </View>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='clipboard'
                size={24}
                color='#5d6266'
              />
              <Text style={styles.textItemList}>Mes événements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='plus'
                size={24}
                color='#5d6266'
              />
              <Text style={styles.textItemList}>Ajouter un événement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='calendar'
                size={24}
                color='#5d6266'
              />
              <Text style={styles.textItemList}>Calendrier</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <Image
              style={styles.footerImage}
              source={require('../assets/img/illustration.png')}
            /> 
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgba(255, 118, 117, 1)'
  },
  backCercle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frontCercle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
  numberEvents: {
    marginTop: 5,
    fontSize: 12,
    color: '#5d6266',
  },
  contentContainer: {
    marginTop: 40,
  },
  itemList: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10
  },
  textItemList: {
    marginLeft: 20,
    fontSize: 18,
    color: '#0f100f',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto'
  },
  footerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    opacity: .5,
    marginBottom: 20,
  },
})

export default DrawerContentComponents;