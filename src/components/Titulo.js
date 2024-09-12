import React, { Fragment } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default ({ titulo, subtitulo }) => {

    return (
        <>
            <Text style={styles.textTitle}>{titulo}</Text>
            <Text style={styles.textSubTitle}>{subtitulo}</Text>
        </>

        /*Quando há mais de um elemento Text, o react-native exige que os elementos sejam envolvidos por uma 
        view, deixando de retornar um elemento textual. Envolvendo os elemetros com React.Fragment, a função
        passa a retornar dois elementos textuais! De forma explicita, ou não.*/
    )
}