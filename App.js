import React, { Component } from "react";
import Home from './app/components/Home';
import Options from './app/components/Options';
import Sidebar from './app/components/Sidebar';
import { DrawerNavigator } from 'react-navigation';


class App extends Component {
  render() {
    return (
      <AppStack />
    )
  }
}

const AppStack = DrawerNavigator({
  home: { screen: Home },
  options: { screen: Options }
}, {
  contentComponent: Sidebar
})

export default App