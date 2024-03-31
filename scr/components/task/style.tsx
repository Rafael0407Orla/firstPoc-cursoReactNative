import { StyleSheet } from "react-native";
import Colors from "../../Colors";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        flexDirection: 'row',
        padding: 16,
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.gray500,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#FFF',
        height: 'auto',
        minHeight: 64,
        marginBottom: 8
    },

    text:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: '400',
    },

    icon:{
        width: 12,
        height: 14
    }
})