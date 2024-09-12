export default (props) => {
    if (props.teste) {
        return props.children;
    }
}

//Usando props.children sem JSX junto de renderizaçã condicional