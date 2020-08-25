import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, Button, Platform } from 'react-native'
import Input from '../../components/Input'
import ButtonCT from '../../components/ButtonCT'
import ImagePicker from 'react-native-image-picker'
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class add extends Component {
  state = {
    ten: '',
    gia: '',
    mota: '',
    chitiet: '',
    imageData: null,

  }
  chooseImage = () => {
    const options = {
      title: 'Chọn ảnh',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      } else {
        console.log(response);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageData: response,
        });
      }
    });
  }
  uploadToStorage = () => {
    const { imageData } = this.state;
    let fileName = Math.random()
      .toString(16)
      .slice(2);
    let ext;
    ext = imageData.fileName.split('.').pop();
    console.log(ext);
    const uploadTask = storage()
      .ref(`images/${fileName}.${ext}`)
      .putFile(imageData.uri);
    let response = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        error => {
          reject(error.message);
        },
        complete => {
          complete.ref.getDownloadURL().then(function (downloadURL) {
            //console.log('File available at',downloadURL);
            resolve(downloadURL);
          });
        },
      );

    })
    response.then(result => this.addProduct(result));
  };
  addProduct = image => {
    const { ten, gia, mota, chitiet } = this.state;
    const ref = database().ref('/posts/');
    ref.push({
      ten,
      gia,
      mota,
      chitiet,
      image,

    });
  }

  render() {
    const { ten, gia, mota, chitiet, imageData } = this.state;
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.chooseImage}>
          <Image style={{ alignSelf: 'center', marginTop: 20, width: '80%', height: HEIGHT / 3 }} source={{
            uri: imageData
              ? imageData.uri
              : 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png'
          }} />
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: 20 }}>Chọn hình ảnh</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Tên sản phẩm</Text>
        <Input style={styles.input} placeholder="ten" value={ten} onChangeText={ten => this.setState({ ten })}></Input>
        <Text style={styles.text}>Giá sản phẩm</Text>
        <Input style={styles.input} placeholder="gia" value={gia} onChangeText={gia => this.setState({ gia })}></Input>
        <Text style={styles.text}>Mô tả sản phẩm</Text>
        <Input style={styles.input} placeholder="mota" value={mota} onChangeText={mota => this.setState({ mota })}></Input>
        <Text style={styles.text}>Mô tả chi tiết</Text>
        <Input style={styles.input} placeholder="chitiet" value={chitiet} onChangeText={chitiet => this.setState({ chitiet })}></Input>

        <ButtonCT style={[styles.button, { backgroundColor: 'white' }]} title="THÊM SẢN PHẨM" text={{ color: 'black' }} onPress={this.uploadToStorage} />

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
    backgroundColor: "black"

  },
  text: {
    color: 'gray',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12

  },
  button: {
    width: WIDTH / 1.2,
    height: HEIGHT / 16,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5


  },
  input: {
    color: 'white'
  },
  button: {
    width: WIDTH / 1.1,
    height: HEIGHT / 16,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10


  }
})