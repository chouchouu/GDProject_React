import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import Input from '../../components/Input'
import ButtonCT from '../../components/ButtonCT'
import auth from '@react-native-firebase/auth';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class signin extends Component {
    state = {
        email: 'abc@gmail.com',
        password: '123456',
    };
    loginAccount = async (email, password) => {
        console.log(email, password);
        try {
            let user = await auth().signInWithEmailAndPassword(email, password);

            console.log(user);

            this.props.navigation.navigate('TabNavigation');
        } catch (e) {
            console.log(e.message);
            ToastAndroid.show("Tài khoản không tồn tại  !", ToastAndroid.SHORT);

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

                <Text style={{ color: 'white', fontSize: 35, alignSelf: 'center', marginTop: 150 }}>Log In</Text>
                <Text style={styles.text}>Your Email</Text>
                <Input style={{ color: 'white' }} placeholder="email" value={email} onChangeText={email => this.setState({ email })}></Input>
                <Text style={styles.text}>Password</Text>
                <Input style={{ color: 'white' }} placeholder="password" value={password} onChangeText={password => this.setState({ password })}></Input>
                <ButtonCT style={[styles.button, { backgroundColor: 'white' }]} title="ĐĂNG NHẬP" text={{ color: 'gray', marginRight: 20 }} onPress={() => this.loginAccount(email, password)} />
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.textSignup}>Đăng ký tài khoản</Text>
                </TouchableOpacity>

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
        width: WIDTH / 1.1,
        height: HEIGHT / 16,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 5


    },
    textSignup: {
        color: 'gray',
        fontSize: 13,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        marginTop: 20
    }
})
