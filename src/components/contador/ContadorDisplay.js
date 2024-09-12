import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles';
export default (props) => {
    return (
        <>
            <Text style={styles.text}>
                {props.num}
            </Text>
        </>
    )
}