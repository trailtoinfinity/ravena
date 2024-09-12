import React from 'react'
import { Text } from 'react-native'
import styles from '../styles';
import If from './If';
export default ({ usuario = {} }) => {
    return (
        <>
            <If teste={usuario && usuario.user && usuario.email}>
                <Text style={styles.userInfo}>
                    User: {usuario.user}, Email: {usuario.email}
                </Text>
            </If>
        </>
    )
}