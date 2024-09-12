import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'
export default ({ nome, sobrenome }) => {
    return (
        <Text style={styles.text}>
            {nome} {sobrenome}
        </Text>
    )
}