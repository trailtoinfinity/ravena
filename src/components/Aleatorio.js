import { Text } from "react-native"
import styles from "./styles";

export default function RandomNumber(props) {
    const { min, max } = props
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <Text style={styles.text}>
            Foi gerado o número: {randomInt}
        </Text>
    )
}