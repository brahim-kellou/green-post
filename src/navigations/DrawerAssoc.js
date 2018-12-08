import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeAssocScreen from '../screens/HomeAssocScreen';
import DrawerContentComponents from './DrawerContentComponents';

const DrawerAssoc = createDrawerNavigator({
    Home: {
        screen: HomeAssocScreen,
    }
}, {
    contentComponent: DrawerContentComponents
})

export default DrawerAssoc;