import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82e4ff',
        justifyContent: 'center',  // Centraliza Em realçao ao Eixo Principal
        alignItems: 'center',      // Centraliza ao eixo cruzado
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 10,
    },

    image: {
        width: 300, // Largura da imagem
        height: 400, // Altura da imagem
        marginBottom: 20, // Espaço entre a imagem e o texto
        borderRadius: 100, // Curvatura da borda

    },

    textTitle: {
        fontSize: 35,
        textAlign: "center",
    },

    textSubTitle: {
        fontSize: 25,
        textAlign: "center",
    },

    text: {
        fontSize: 16,
        marginBottom: 5,  // Espaço entre o texto e o TextInput
        textAlign: "center", // Alinha o texto com o eixo principal
    },

    textInput: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 300,  // Largura do TextInput
        paddingLeft: 10,  // Espaçamento interno
        margin: 10,
    },

    ola: {
        paddingTop: 10,
    },
});
export default styles; 