import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './style'

export function Task({ text, onRemove, done, onPress }) {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={{
          borderColor: done ? "#8284FA" : "#4EA8DE",
          borderWidth: done ? 8 : 1,
          borderRadius: 2000,
          width: 18,
          height: 18,
        }} onPress={onPress}/>

      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require("../../../assets/trash.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}
