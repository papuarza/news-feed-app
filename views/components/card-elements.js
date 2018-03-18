import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }
  componentWillReceiveProps(nextProps){
    this.setState(() => { return { data: nextProps.data }})
    this.forceUpdate();
  }
  render() {
    return (
      <View style={{flexDirection:'row', marginBottom: 5}}> 
        <Text numberOfLines={this.state.limit} style={this.state.styles}>
            {this.props.data.title}
        </Text>
      </View>
    )
  }
}

export class Description extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }
  componentWillReceiveProps(nextProps){
    this.setState(() => { return { data: nextProps.data }})
    this.forceUpdate();
  }
  render() {
    return (
      <View style={{flexDirection:'row'}}> 
        <Text numberOfLines={this.state.limit} style={this.state.styles}>
          {this.props.data.description}
        </Text>
      </View>
    )
  }
}

export class ImageNews extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }
  componentWillReceiveProps(nextProps){
    this.setState(() => { return { data: nextProps.data }})
    this.forceUpdate();
  }
  render() {
    return (
      <Image source={{uri: this.props.data.image}} style={this.state.styles}/>
    );
  }
}
