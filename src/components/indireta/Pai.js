import React, { useState } from "react";
import Filho from "./Filho";
import { Text } from "react-native";

export default props => {
    const [numero, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text>Numero Aleatorio: {numero}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}