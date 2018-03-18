import React from 'react';
import DetailScreen from './views/details.js';
import HomeScreen from './views/home.js';
import { StackNavigator } from 'react-navigation';


const RootStack = StackNavigator(
  { Home:     { screen: HomeScreen },
    Details:  { screen: DetailScreen },
  },
  { initialRouteName: 'Home' }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
