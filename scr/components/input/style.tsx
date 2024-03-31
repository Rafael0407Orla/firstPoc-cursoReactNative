import { StyleSheet } from "react-native";
import Colors from "../../Colors";

export const styles = StyleSheet.create({

    inputContainer:{
        flexDirection: 'row',
        gap: 8,
        marginTop: -50
    },

    btn:{
        width: 52,
        height: 52,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8

    },

    input:{
        flex: 1,
        width: '100%',
        backgroundColor: Colors.gray500,
        color: '#FFF',
        borderRadius: 8,
        padding: 12,
    },

    icon:{
        width:16,
        height: 16,
    }


})