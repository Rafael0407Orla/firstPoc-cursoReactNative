import { View, Text, Image } from "react-native";
import {styles} from "./style"

export function Header(){
    return(
    <View style={styles.header}>
            <Image source={require('../../../assets/Logo.png')} style={styles.icon} />
    </View>
    )
}