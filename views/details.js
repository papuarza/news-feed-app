import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';


export default class DetailScreen extends Component {
  render() {
    const data  = this.props.navigation.state.params.data;
    const screenWidth = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <ScrollView style={{width:screenWidth}}>
          <Text>'Detail View'</Text>
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
});