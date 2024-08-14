import React from "react";
import { View } from "react-native";
import styles from "./styles.js";
import CompPadrao, { Comp1, Comp2, Comp3 } from "./Multi.js";

const Ravena = () => {
    const catName = 'Ravena';
    return (
        <View style={styles.container}>
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <CompPadrao />
        </View>
    );
}

export default Ravena;