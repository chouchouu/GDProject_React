import React, { Component } from 'react'
import { Text, View, FlatList, Button, TouchableHighlight, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import database from '@react-native-firebase/database';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default class homeScreen extends Component {
  state = {
    data: null,

  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.unsubscribe = database().ref('/posts/').on('value', snapshot => {
      let items = [];
      snapshot.forEach(element => {
        let item = {
          _key: element.key,
          ten: element.val().ten,
          gia: element.val().gia,
          mota: element.val().mota,
          chitiet: element.val().chitiet,
          image: element.val().image,
        }
        items.push(item);
      });
      this.setState({ data: items });

    });
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  removeItem = async key => {
    try {
      const ref = await database()
        .ref('/posts/')
        .child(key).remove();
      console.log(ref);

    } catch (error) {

    }
  }
  render() {

    const { navigation } = this.props;
    const { ten, gia, mota, data, isUpdate, image } = this.state;
    console.log(data);

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ width: 20, height: 20, marginHorizontal: 10, marginTop: 5 }} source={require('../../assets/images/back.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, color: '#C7CAC8', marginHorizontal: 130 }}>NIKE</Text>
        </View>
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={(item) => item._key}

          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => navigation.navigate('detailScreen', { item })}>

              <View style={styles.viewAll}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={[styles.text, { color: 'gray' }]}>
                  {item.mota}
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold', color: 'white' }]}>
                  {item.ten}
                </Text>

                <Text style={[styles.text, { color: 'gray' }]}>
                  {item.gia}đ
                </Text>

                <View>
                  {/* <Button title='sửa' onPress={()=>this.updateItem(item)}/> */}
                  {/* <Button title='Xóa' onPress={() => this.removeItem(item._key)} /> */}
                </View>
              </View>


            </TouchableHighlight>


          )}
        />
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
  viewAll: {
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginTop: 30
  },
  text: {
    alignSelf: 'center'
  },
  image: {
    width: WIDTH / 2.3,
    height: HEIGHT / 4
  }
})
