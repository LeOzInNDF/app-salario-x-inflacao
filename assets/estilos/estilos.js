import { StyleSheet } from "react-native";

const estiloGlobal = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d5d5',
    },
    odd: {
        backgroundColor: '#c5c5c5',
    },
});

export default estiloGlobal;