import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  update = (e) => {
    this.props.onUpdate(e);
    this.setState({text: e});
  };

  render() {
    return (
      <TextInput
        style={styles.searchBar}
        onChangeText={this.update}
        value={this.state.text}
        placeholder="Type here to search!"
      />
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40, 
    borderWidth: 0,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 75,
    marginBottom: 50
  }
});