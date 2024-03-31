import { View, Text, Image } from "react-native";


export function EmptyList(){
    return(
        <View style={{alignItems:'center', paddingTop: 48}}>
            <Image source={require('../../../assets/Clipboard.png')} style={{width: 56, height: 56}} />
            <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 16, marginTop: 16}}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{fontWeight: '400', color: '#FFF', fontSize: 16}}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}