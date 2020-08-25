import React, { Component } from 'react'
import { StyleSheet, View, Image, Button, Dimensions, Text } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default class onboard extends Component {

  render() {
    const Square = ({ isLight, selected }) => {
      let backgroundColor;
      if (isLight) {
        backgroundColor = selected ? 'rgba(0, 0, 0, 0.😎' : 'rgba(0, 0, 0, 0.3)';
      } else {
        backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
      }
      return (
        <View
          style={{
            width: 6,
            height: 6,
            marginHorizontal: 3,
            backgroundColor,
          }}
        />
      );
    };

    const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
    const color = isLight => backgroundColor(!isLight);

    const Done = ({ isLight, ...props }) => (
      <Button
        title={'Done'}
        buttonStyle={{
          backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
          marginVertical: 10,
          width: 70,
          backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
      />
    );



    return (
      <Onboarding
        DotComponent={Square}
        skipToPage={2}
        onDone={props => {
          this.props.navigation.navigate('signin')
        }}
        pages={[
          {
            backgroundColor: 'black',
            image: <Image style={Styles.img} source={require('../../assets/images/tick.png')} />,

          },
          {
            backgroundColor: 'black',
            image: <Image style={Styles.imgTwo} source={require('../../assets/images/gd.jpg')} />,

          },
          {
            backgroundColor: 'black',
            image: <Image style={Styles.imgTwo} source={require('../../assets/images/nike.jpg')} />,


          },


        ]}

      />

    )
  }
}
const Styles = StyleSheet.create({
  img: {
    width: 500,
    height: 200

  },
  imgTwo: {
    width: WIDTH,
    height: HEIGHT / 1.4
  },

})