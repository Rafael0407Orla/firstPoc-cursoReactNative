import { StyleSheet } from "react-native";
import Colors from "../../Colors";

export const styles = StyleSheet.create({

    section:{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 32,
        width: '100%',
        height: 'auto',
        justifyContent: 'space-between',
        marginBottom: 24

    },

    container:{
        flexDirection: 'row',
        gap: 8,
    },

    criadas:{
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: Colors.blue

    },

    criadas2:{
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#8284f2'

    },

    number:{
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#FFF',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 2000,
        backgroundColor: Colors.gray700
    }



})