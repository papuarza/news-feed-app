import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import ListNews from './components/list.js';
import SearchInput from './components/search-input.js';


const cardComponentsFinal = [];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: cardComponentsFinal};
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a95a4f6ca0b842fe9da021db65de8d4e`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let data = res.articles.map((elem, i) => {
          return {
            'key': i,
            'description': elem.description || '',
            'publishedAt': elem.publishedAt || '',
            'title': elem.title || '',
            'url': elem.url || '',
            'image': elem.urlToImage || 'https://lsdn.littlstar.com/avatars/1d54af2a2bf83d6e82c616f0ef2c3e693d2b23b1.png?1484594040'
          }
        });
        cardComponentsFinal = data;
        this.setState({ data: data });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  onUpdate = (val) => {
    filteredNews = cardComponentsFinal;
    if(val != '') {
      let search = new RegExp(val, "gi");
      filteredNews = cardComponentsFinal.filter(elem => search.test(elem.title));
    }
    this.setState(() => { return { data: filteredNews }})
    this.forceUpdate();
  };

  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <ScrollView style={{width:screenWidth}}>
          <Text style={styles.font}>Welcome to your News Feed</Text>
          <SearchInput onUpdate={this.onUpdate}></SearchInput>
          <ListNews data={{data: this.state.data}} navigation={this.props.navigation}></ListNews>
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