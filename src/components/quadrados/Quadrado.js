import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default ({ cor, size }) => {
    return (
        <View style={{

            width: size,
            backgroundColor: cor,
        }}>
        </View>
    )
}