import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../styles/Colors';
import NavBottom from '../components/NavBottom';
import ListeEvents from '../components/ListeEvents';


export default class HomeAssocScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image
            source={require('../assets/img/header-BG.png')}
            style={styles.headerBG}
            resizeMode='cover'
          />
          <View style={styles.header}>
            <View style={styles.menuIcon}>
              <TouchableOpacity style={{padding: 3}}>
                <Icon 
                  type='feather'
                  name='menu'
                  size={24}
                  color='#fff'
                />
              </TouchableOpacity>
            </View>
            <View style={styles.notificationIcon}>
              <TouchableOpacity style={{padding: 3}}
              >
                <Icon 
                  type='feather'
                  name='bell'
                  size={24}
                  color='#fff'
                />
                <View style={styles.smallCircle}>

                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tabNavigationContainer}>
            <TouchableOpacity style={styles.tabItemContainer}>
              <Icon
                name='bookmark'
                type='feather'
                color={colors.primaryColor}
                size={22}
              />
              <Text style={[styles.titleTabItem, {color: '#07c267'}]}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItemContainer}>
              <Icon
                name='clipboard'
                type='feather'
                color={colors.greyColor}
                size={22}
              />
              <Text style={styles.titleTabItem}>All Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItemContainer}>
              <Icon
                name='calendar'
                type='feather'
                color={colors.greyColor}
                size={22}
              />
              <Text style={styles.titleTabItem}>Calendar</Text>
            </TouchableOpacity>
          </View>
          <ListeEvents/>
          <NavBottom/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  headerBG: {
    position: 'absolute',
    top: 0,
    height: 153,
    width: '100%',
    zIndex: 0,
  },
  header: {
    height: 80,
    width: '100%',
  },
  menuIcon: {
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  notificationIcon: {
    position: 'absolute',
    bottom: 10,
    right: 20
  },
  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.secondaryColor,
    position: 'absolute',
    bottom: 5,
    left: 2,
    borderWidth: 2,
    borderColor: 'white'
  },
  tabNavigationContainer: {
    marginTop: 20,
    marginBottom: 10,
    height: 56,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 4,
    flexDirection: 'row',
  },
  tabItemContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
