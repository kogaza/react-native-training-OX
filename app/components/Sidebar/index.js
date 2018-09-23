//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
// import styles from './styles'

// create a component
class Sidebar extends Component {


  render() {
    const routes = [{
      title: 'Home',
      route: 'home'
    },
    {
      title: 'Options',
      route: 'options'
    }]

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 80 }}
          source={require('../../images/memoo-logo.png')}
        />
        {
          routes.map((e, i) => (
            <TouchableOpacity
              key={i}
              // style={styles.link}
              onPress={_ => this.navigate(e.route)}
            >
              <Text style={{ color: 'white' }}>{e.title}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Sidebar;
