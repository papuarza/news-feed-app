import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';


const cardComponentsFinal = [];

export default class HomeScreen extends React.Component {
  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <ScrollView style={{width:screenWidth}}>
          <Text style={styles.font}>Welcome to your News Feed</Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1
  },
  font: {
    color: '#000',
    fontSize: 34,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 20,
    fontWeight: 'bold'
  }
});