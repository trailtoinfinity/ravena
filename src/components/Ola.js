import React from "react";
import { Button } from "react-native";

export default props => {
    let nome = "Yanna"
    function dizerOla() {
        console.warn(`Olá, ${nome}!`)
    }

    return (
        <Button title="Olá, Ravena!" onPress={dizerOla}>

        </Button>
    )
}