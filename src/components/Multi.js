import { Image, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function Comp() {
    return <Text style={styles.ola}>Olá!!!</Text>
}

export function Comp1() {
    return (
        <Image
            source={{ uri: 'https://i.imgur.com/c3wR5Us.jpeg' }}
            style={styles.image}
        />
    )
}

export function Comp2() {
    const catName = 'Ravena';
    return (<Text style={styles.text}>Essa é {catName}! Diga olá para {catName}!</Text>)
}

export function Comp3() {
    return (
        <TextInput
            style={styles.textInput}
        />
    )
}