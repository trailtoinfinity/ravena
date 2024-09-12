import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Quadrado from './Quadrado';
export default (props) => {
    return (
        <>
            <View style={styles.main}>
                <Quadrado size={20} cor='#77eb34' />
                <Quadrado size={30} cor='#ff0000' />
                <Quadrado size={40} cor='#1344d6' />
                <Quadrado size={50} cor='#4400ff' />
                <Quadrado size={60} cor='#d66e13' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row', //Define o eixo principal
        height: 250,
        width: '100%',
        backgroundColor: '#000000',
        justifyContent: 'space-evenly',
        alignItems: 'stretch', //stretch estica todos os elementos se não houver valor definido para comprimento
    }
})