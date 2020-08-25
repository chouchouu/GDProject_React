import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default function detailScreen(props, { route, navigation }) {
    const { _key, ten, gia, mota, chitiet, image } = props.route.params.item;
    console.log(_key);


    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 15, color: 'gray', marginTop: 50 }]}>{mota}</Text>
            <Text style={[styles.text, { fontSize: 25, fontWeight: 'bold', marginTop: 10 }]}>{ten}</Text>
            <Text style={[styles.text, { fontSize: 20, color: 'gray', marginTop: 10 }]}>{gia}</Text>

            <Image source={{ uri: image }} style={styles.image} />
            <View style={{ width: WIDTH, height: 1, backgroundColor: 'white', opacity: 0.2, marginTop: 50 }} />
            <Text style={[styles.text, { fontSize: 15, marginTop: 20, color: 'gray' }]}>{chitiet}</Text>
            <View style={{ width: WIDTH, height: 1, backgroundColor: 'white', opacity: 0.2, marginTop: 50 }} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',

    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    image: {
        width: WIDTH / 1.2,
        height: HEIGHT / 3,
        marginTop: 20,
        alignSelf: 'center'

    }
})
