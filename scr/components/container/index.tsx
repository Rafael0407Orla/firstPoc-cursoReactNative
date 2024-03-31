import React from "react";
import { View } from "react-native";

export function Container({children}){
    return(
    <View style={{padding: 24, flex:1, height:'100%'}}>
        {children}
    </View>
    )
}