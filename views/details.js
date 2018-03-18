import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Dimensions, ScrollView, Linking } from 'react-native';
import { Title, Description, ImageNews} from './components/card-elements.js';

export default class DetailScreen extends Component {
  render() {
    const data  = this.props.navigation.state.params.data;
    const screenWidth = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <ScrollView style={{width:screenWidth}}>
          <Title data={{title: data.title, styles: styles.title, limit: undefined}}></Title>
          <ImageNews data={{image: data.image, styles: styles.image}}></ImageNews>
          <Description data={{description: data.description, styles: styles.description, limit: undefined}}></Description>
          <View style={styles.button}>
          <Button title="Read it!" color="#fff" onPress={ ()=>{ Linking.openURL(data.url)}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    paddingRight: 25,
    paddingLeft: 25,
    fontSize: 28,
    fontWeight: 'bold'
  },
  image: {
    width: screenWidth,
    height: 200,
    marginTop: 10,
    marginBottom: 20
  },
  description: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 18
  },
  button: {
    backgroundColor: '#0d47a1',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 20,
  }
});