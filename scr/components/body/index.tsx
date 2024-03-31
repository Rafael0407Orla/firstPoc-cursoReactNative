import { View } from "react-native";
import {styles} from './style'


export function Body({children}){
    return(
        <View style={styles.body} >
            {children}
        </View>
    )
}