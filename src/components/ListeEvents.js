import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import FicheEvent from './FicheEvent';

export default class ListEvents extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}
            contentContainerStyle={styles.container}>
        <ScrollView
            
        >
            <FicheEvent ImageURL={require('../assets/img/5.png')} Date="9"  NameEvent="Clean Day"  NameAss="Na9iha Tazyen" />
            <FicheEvent ImageURL={require('../assets/img/1.png')} Date="15" NameEvent="Solar Meetup" NameAss="Soleil Nouveau"/>
            <FicheEvent ImageURL={require('../assets/img/2.png')} Date="20" NameEvent="Recycle Quest"  NameAss="Greensa"/>
            <FicheEvent ImageURL={require('../assets/img/3.png')} Date="29" NameEvent="Hafr Al-Abar" NameAss="El-Mouzabi"/>
            <FicheEvent ImageURL={require('../assets/img/4.png')} Date="2" NameEvent="Recycle Quest" NameAss="Na9iha Tazyen"/>
        </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
