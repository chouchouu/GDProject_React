import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
const Input =({style, placeholder,value,onChangeText}) =>{
    return (
        <View style={[styles.container,style]}>
            <TextInput style={style} placeholder={placeholder} value={value} onChangeText={onChangeText}></TextInput>
        </View>
    )
}
export default Input
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:50,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth:1,
        borderBottomColor:'gray',
    }
})