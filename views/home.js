import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, AsyncStorage, RefreshControl} from 'react-native';
import ListNews from './components/list.js';
import SearchInput from './components/search-input.js';


const cardComponentsFinal = [];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: cardComponentsFinal, refreshing: false};
  }

  componentDidMount() {
    this.getLocal();
    this.makeRemoteRequest();
  }

  async saveLocal(value) {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async getLocal() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({ data: JSON.parse(value) });
    } catch (error) {
      console.log(error);
    }
  }

  makeRemoteRequest = () => {
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
        this.saveLocal(JSON.stringify(cardComponentsFinal));
        this.setState({ data: data, refreshing: false });
      })
      .catch(error => {
        console.log(error)
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

  onRefresh() {
    this.setState({refreshing: true});
    this.makeRemoteRequest();
  }

  render() {
    const screenWidth = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <ScrollView style={{width:screenWidth}} refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} /> }>
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