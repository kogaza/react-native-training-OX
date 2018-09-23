//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class Oprions extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Image
        style={{
          width: 100,
          height: 40,
        }}
        source={require('../../images/memoo-logo.png')} />
    ),
    title: 'Options',
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>Oprions</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Oprions;
