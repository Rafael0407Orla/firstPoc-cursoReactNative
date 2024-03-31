import { View, Text } from "react-native";
import {styles} from  './style'
export function InfoTab({criadas, concluidas}){
    return(
        <View style={styles.section}>
            <View style={styles.container}>
                <Text style={styles.criadas}>Criadas</Text>
                <Text style={styles.number}>{criadas}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.criadas2}>Concluídas</Text>
                <Text style={styles.number}>{concluidas}</Text>
            </View>
        </View>
    )
}