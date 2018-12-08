import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import FicheEvent from './FicheEvent';

export default class ListEvents extends React.Component {
    render() {
        return (
        <ScrollView
            style={{flex: 1}}
            contentContainerStyle={styles.container}
        >
            <FicheEvent/>
            <FicheEvent/>
            <FicheEvent/>
            <FicheEvent/>
            <FicheEvent/>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
