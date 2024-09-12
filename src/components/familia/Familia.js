import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles';
import Membros from './Membros';
export default (props) => {

    //Utilizando 'props.children' para renderizar componentes aninhados
    return (
        <>
            <Membros nome={'Carlos'} sobrenome={'Eduardo'} />
            <Membros nome={'Igor'} sobrenome={'Carvalho'} />
            {props.children}
        </>
    )
}