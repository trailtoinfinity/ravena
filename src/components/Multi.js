import { Image, Text, TextInput } from "react-native";
import styles from "./styles";

export default function Comp() {
    return <Text style={styles.ola}>Olá Yanna!!!</Text>
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
    return (<Text style={styles.text}>Essa é {catName}! Diga olá para {catName}!</Text>);
}

export function Comp3(props) {
    if (props.min > props.max) {
        return (
            <Text>
                O valor {props.min} é maior que {props.max}!
            </Text>
        )
    }
    else if (props.max > props.min) {
        return (
            <Text>
                O valor {props.max} é maior que {props.min}!
            </Text>
        )
    }
    else {
        return (
            <Text>
                O valor {props.min} é igual a {props.max}!
            </Text>
        )
    }
}