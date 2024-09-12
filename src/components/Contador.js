import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles';
export default ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => { setNumero(numero + passo) }

    const dec = () => { setNumero(numero - passo) }

    return (
        <>
            <Button title='[+]' onPress={inc} />
            <Button title='[-]' onPress={dec} />
            <Text>{numero}</Text>
        </>
    )
}