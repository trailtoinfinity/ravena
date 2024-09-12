import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./components/styles.js";
import { Comp1, Comp2, Comp3 } from "./components/Multi.js";
import Titulo from "./components/Titulo.js";
import Ola from "./components/Ola.js";
import Name from "./components/qualSeuNome/Name.js";
import Familia from "./components/familia/Familia.js";
import Membros from "./components/familia/Membros.js";
import UserDisplay from "./components/usuario/UserDisplay.js";
import MainQuadrado from "./components/quadrados/MainQuadrado.js";
import If from "./components/usuario/If.js";
//import ContadorV2 from "./components/contador/ContadorV2.js";
//import Contador from "./components/Contador.js";
//import Pai from "./components/indireta/Pai.js";
//import RandomNumber from "./components/Aleatorio.js";

export default () => {
    return (
        <SafeAreaView style={styles.container}>

            <Titulo titulo="Ravena" subtitulo="Siena Grilo"></Titulo>
            <Comp1 />
            <Comp2 />
            <Ola />
            <Name />
            {

            /*<MainQuadrado />
            
            <If teste={true}>
                <UserDisplay usuario={{ user: 'Igor', email: 'igorgtilo90@gmail.com' }} />
            </If>
            <UserDisplay usuario={{ user: 'Carlos', email: 'carloscarlos@hotmail.com' }} />
            <Familia>
                <Membros nome='Luana' sobrenome={'Pereira'} />
            </Familia>
            <ContadorV2 />
            <Pai />
            <RandomNumber min ={1} ma    x={60}/>
            <Contador />
            <RandomNumber min ={1} max={60}/>
            <RandomNumber min ={1} max={60}/>
            <RandomNumber min ={1} max={60}/>
            <RandomNumber min ={1} max={60}/>
            <RandomNumber min ={1} max={60}/>*/}
        </SafeAreaView>
    )
}