import React, { useState } from 'react'
import { Text } from 'react-native'
import styles from '../styles';
import ContadorDisplay from './ContadorDisplay';
import ContadorButtons from './ContadorButtons';
export default (props) => {
    const [num, setNum] = useState(0);

    const inc = () => { setNum(num + 1) }
    const dec = () => { setNum(num - 1) }

    return (
        <>
            <Text style={styles.text}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <ContadorButtons inc={inc} dec={dec} />
        </>
    )
}