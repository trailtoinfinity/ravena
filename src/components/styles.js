import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82e4ff',
        justifyContent: 'center',  // Centraliza Em realçao ao Eixo Principal
        alignItems: 'center',      // Centraliza horizontalmente
    },
    image: {
        width: 500, // Largura da imagem
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
        width: 300,  // Largura do TextInput
        paddingLeft: 10,  // Espaçamento interno
    },
    ola: {
        paddingTop: 10,
    },
});
export default styles; 