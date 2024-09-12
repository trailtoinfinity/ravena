import React, { createElement, useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import styles from '../styles';
export default _ => {

    const [text, setText] = useState('')
    const [textNaTela, setTextNaTela] = useState('')
    function alterarTexto(novotexto) {
        setText(novotexto)
    }

    const mostraTexto = () => { setTextNaTela(`Olá, ${text}!!!`) }

    //Exemplo de renderização condicional:
    return (
        <>
            <TextInput placeholder='Digite seu nome...' value={text} style={styles.textInput} onChangeText={alterarTexto} />
            <Button title='Confirmar' onPress={mostraTexto} />
            <Text style={styles.textSubTitle}>
                {textNaTela}
            </Text>
            {text.length >= 10 ? <Text style={styles.text}>Seu nome é muito grande! </Text> : false}
        </>
    )
}