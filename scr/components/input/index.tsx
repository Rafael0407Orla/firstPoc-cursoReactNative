import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles} from  './style'

export function Input({onChangeText, onPress}){
    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='#FFF'
                onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image source={require('../../../assets/addIcon.png')} style={styles.icon} />
        </TouchableOpacity>
    </View>
    )
}