import React from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native'
const ButtonCT = ({style,title,text,source,onPress}) => {
    return (
       <TouchableHighlight onPress={onPress}>
            <View style={[styles.view,style]}  >
            <Image source={source} style={styles.image}></Image>
            <Text style={[styles.text,text]}>{title}</Text>
        </View>
       </TouchableHighlight>
    )
}

export default ButtonCT

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    text:{
        alignItems: 'center',
    },
    image:{
        height:20,
        width:20,
        marginHorizontal:20,
    marginLeft: -20,
    }
})
