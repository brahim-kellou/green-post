import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeAssocScreen from '../screens/HomeAssocScreen';

const DrawerAssoc = createDrawerNavigator({
    Home: {
        screen: HomeAssocScreen,
    }
})

export default DrawerAssoc;