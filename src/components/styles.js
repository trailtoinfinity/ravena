import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Centraliza verticalmente
        alignItems: 'center',      // Centraliza horizontalmente
    },
    image: {
        width: 300, // Largura da imagem
        height: 400, // Altura da imagem
        marginBottom: 20, // Espaço entre a imagem e o texto
    },
    text: {
        marginBottom: 20,  // Espaço entre o texto e o TextInput
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',  // Largura do TextInput
        paddingLeft: 10,  // Espaçamento interno
    },
});

export default styles;