import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Image, ImageBackground  } from 'react-native'

class FicheEvent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { ImageURL , Date , NameEvent , NameAss } = this.props ; 
        return (
            <ImageBackground 
                style={styles.imageContainer}
            >
                    <Image
                        style={styles.imageBackground}
                        source={ImageURL}
                    />
                <View style={styles.timeInfosContainer}>
                    <View style={[styles.center, {flex: 1}]}><Text style={styles.month}>Dec</Text></View>
                    <View style={[styles.center, {flex: 3}]}><Text style={styles.day}>{Date}</Text></View>
                    <View style={[styles.center, {flex: 1}]}><Text style={styles.place}>Sablettes, Alger</Text></View>
                    
                </View>
                 <View style={styles.eventInfosContainer}>
                    <View style={[styles.center, {flex: 1}]}>
                        <Text style={styles.eventName}>{NameEvent}</Text>
                    </View>
                    <View style={[styles.center, {flex: 3, justifyContent: 'flex-start'}]}>
                        <Text style={styles.nomAsso_container}>{NameAss}</Text>
                    </View>
                    <View style={[styles.center, {flex: 1}]}>
                        <Text style={styles.benevole_container}>Bénévoles 5/15</Text>
                    </View>
                    
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        position: 'absolute',
        top: 0,
        width: '110%',
        height: 150,
    },
    imageContainer:{
        position: 'relative',
        width: '90%',
        aspectRatio: 16/6,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection : 'row', 
        borderRadius: 10,
        overflow: 'hidden',
    },
    eventInfosContainer: {
        flexDirection : 'column',
        alignItems: 'flex-end',
        flex : 1
    },
    eventName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    nomAsso_container:{
        fontSize: 14,
        color: 'white'
    },
    benevole_container:{
        flex : 1,
        color: 'white'
    },
    month:{
        fontSize: 12,
        color: '#555'
    },
    day: {
        fontSize: 32,
        color: '#555',
        fontWeight: 'bold',
    },
    place: {
        fontSize: 12,
        color: '#555'
    },
    timeInfosContainer: {
        flexDirection: 'column',
    }
})

export default FicheEvent