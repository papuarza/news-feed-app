import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }
  componentWillReceiveProps(nextProps){
    this.setState(() => { return { data: nextProps.data }})
    console.log(this.state.title)
  }
  render() {
    return (
      <View style={{flexDirection:'row', marginBottom: 5}}> 
        <Text numberOfLines={this.state.limit} style={this.state.styles}>
              {this.state.title}
        </Text>
      </View>
    )
  }
}

export class Description extends Component {
  render() {
    return (
      <View style={{flexDirection:'row'}}> 
        <Text numberOfLines={this.props.limit} style={this.props.styles}>{this.props.description}</Text>
      </View>
    )
  }
}

export class ImageNews extends Component {
  render() {
    return (
      <Image source={{uri: this.props.image}} style={this.props.styles}/>
    );
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
  textContainer: {
    flexDirection: 'column', 
    paddingLeft: 20,
    paddingRight: 120, 
    justifyContent: 'center',
    alignItems:'flex-start'
  }
});