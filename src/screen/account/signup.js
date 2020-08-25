import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import Input from '../../components/Input'
import ButtonCT from '../../components/ButtonCT'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class signup extends Component {
    state = {
        email: '',
        password: '',
    };
    signAccount = async (email, password) => {
        console.log(email, password);
        try {
            let user = await auth().createUserWithEmailAndPassword(email, password);
            console.log(user);
            this.props.navigation.navigate('signin')
        } catch (e) {
            console.log(e.message);
            ToastAndroid.show("Email không đúng định dạng !", ToastAndroid.SHORT);
        }
    }
    render() {
        const { navigation } = this.props;
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ marginLeft: 20, marginTop: 30 }} source={require('../../assets/images/delete.png')} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center' }}>Sign Up</Text>
                <Text style={styles.text}>Your Email</Text>
                <Input style={{ color: 'white' }} placeholder="email" value={email} onChangeText={email => this.setState({ email })}></Input>
                <Text style={styles.text}>Password</Text>
                <Input style={{ color: 'white' }} placeholder="password" value={password} onChangeText={password => this.setState({ password })}></Input>
                <ButtonCT style={[styles.button, { backgroundColor: 'white' }]} title="ĐĂNG KÝ" text={{ color: 'gray', marginRight: 20 }} onPress={() => this.signAccount(email, password)} />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: 'black',
    },
    text: {
        color: 'gray',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 12

    },
    button: {
        width: WIDTH / 1.2,
        height: HEIGHT / 16,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 5


    }
})
