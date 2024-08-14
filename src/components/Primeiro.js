import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import styles from "./styles.js";

const Ravena = () => {
    const catName = 'Ravena';
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.imgur.com/c3wR5Us.jpeg' }}
                style={styles.image}
            />
            <Text style={styles.text}>Essa é {catName}! Diga olá para {catName}!</Text>
            <TextInput
                style={styles.textInput}
            />
        </View>
    );
}

export default Ravena;