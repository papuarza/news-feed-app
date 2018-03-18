import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Title, Description, ImageNews} from './card-elements.js';

export default class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }

  componentWillReceiveProps(nextProps){
    this.setState(() => { return { data: nextProps.data.data }})
    this.forceUpdate();
  }
  render() {
    return ( 
      <View>
      { this.state.data.map((e, i) =>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', { data: e})} key={i}>
              <View style={styles.cardContainer}>
                <ImageNews data={{image: e.image, styles: styles.image}}/>
                <View style={styles.textContainer}>
                  <Title data={{title: e.title, styles: styles.title, limit: 2}}></Title>
                  <Description data={{description: e.description, limit: 2}}/>
                </View>
              </View>
            </TouchableHighlight>
            )}
      </View>     
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold', 
    fontSize: 15
  },
  image: {
    width: 110, height: 100
  },
  cardContainer: {
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#dcdcdc', 
    marginBottom: 20, 
    paddingBottom: 20, 
    justifyContent: 'flex-start'
  },
  textContainer: {
    flexDirection: 'column', 
    paddingLeft: 20,
    paddingRight: 120, 
    justifyContent: 'center',
    alignItems:'flex-start'
  }
});
 