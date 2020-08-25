import React, { Component } from 'react'
import { Text, View, Button, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import Dialog from "react-native-dialog";
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class account extends Component {
    state = {
        userInfo: null,
    };
    componentDidMount() {
        this.getUserInfo();
    }
    getUserInfo = () => {
        let userInfo = auth().currentUser;
        this.setState({ userInfo });
        console.log(userInfo);
    }
    render() {
        const { navigation } = this.props;
        const { userInfo } = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../../assets/images/splash.jpg')} />
                <Text style={{ fontSize: 15, color: "gray", alignSelf: 'center' }}>Email:</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>{userInfo && userInfo.email}</Text>


                <TouchableOpacity
                    onPress={() => navigation.navigate('onboard')}
                >
                    <Text style={[styles.text, { color: 'red', marginTop: 20 }]}>Đăng xuất</Text>

                </TouchableOpacity>


            </View>



        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    img: {
        width: WIDTH / 3,
        height: HEIGHT / 6,
        borderRadius: 65,
        alignSelf: 'center',
        marginVertical: 50
    },
    text:
    {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',

    },

})
