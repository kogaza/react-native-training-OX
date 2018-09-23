import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from 'react-navigation';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }
  componentDidMount() {
    this.initializeGame();
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Image
        style={{
          width: 100,
          height: 40,
        }}
        source={require('../../images/memoo-logo.png')} />
    ),
    title: 'Hello!',
  })

  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    });
  }

  //Returns 1 if Player 1 won, -1 if Player 2 won, or a 0 if no one has won.
  getWinner = () => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;

    //Check rows
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) { return 1; }
      else if (sum == -3) { return -1; }
    }
    //Check columns
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) { return 1; }
      else if (sum == -3) { return -1; }
    }
    //Check the diagonals
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1; }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1; }

    // There are no winners
    return 0;
  }

  onTilePress = (row, col) => {
    //Don't allow tiles to change
    var value = this.state.gameState[row][col];
    if (value !== 0) { return; }

    //Grab current player
    var currentPlayer = this.state.currentPlayer;

    // Set the correct tile
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({ gameState: arr });

    //Switch to other player
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });

    //Check for winners
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert(
        'Player 1 is the winner!',
        'Congratulations!',
        [
          { text: 'OK', onPress: () => this.initializeGame() },
        ],
        { cancelable: false }
      )
    } else if (winner == -1) {
      Alert.alert(
        'Player 2 is the winner!',
        'Congratulations!',
        [
          { text: 'OK', onPress: () => this.initializeGame() },
        ],
        { cancelable: false }
      )
    }
  }

  onNewGamePress = () => {
    this.initializeGame();
  }

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1: return <Icon name="times" style={[styles.tileIcon, styles.tileX]} />;
      case -1: return <Icon name="circle" style={[styles.tileIcon, styles.tileO]} />;
      default: return <View />
    }
  }

  changeIcons = () => {
    console.log('działa button')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Button title="Change icons" onPress={() => this.props.navigation.navigate('menu')}></Button>
          </View>
          <View style={styles.playersContainer}>
            <View style={[styles.players, { flexDirection: "row" }]}>
              <Text>Player 1: </Text>
              <Icon name="times" style={[styles.topIcon, styles.tileX]} />
            </View>
            <View style={[styles.players, { flexDirection: "row" }]}>
              <Text>Player 2: </Text>
              <Icon name="circle" style={[styles.topIcon, styles.tileO]} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 50 }} />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0, }]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.tile, { borderTopWidth: 0, }]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0, }]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.tile, { borderLeftWidth: 0, }]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={styles.tile}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={[styles.tile, { borderRightWidth: 0, }]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0, }]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.tile, { borderBottomWidth: 0, }]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0, }]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 50 }} />
        <Button title='New Game' onPress={this.onNewGamePress} />

      </View>
    );
  }
}

class Menu extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Image
        style={{
          width: 100,
          height: 40,
        }}
        source={require('../../images/memoo-logo.png')} />
    ),
    title: 'Menu!',
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Działa menu
        </Text>
        <Button title="Save" onPress={() => this.props.navigation.navigate('home')}></Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFEB4",
    borderWidth: 10,
  },
  tile: {
    borderWidth: 5,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  tileIcon: {
    fontSize: 60,
  },
  tileX: {
    color: "red",
  },
  tileO: {
    color: "green",
  },
  topIcon: {
    fontSize: 24,
  },
  playersContainer: {
    // position: "absolute",
    // top: 0,
    // right: 0,
    // padding: 10,
  },
  header: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});

export default createStackNavigator({
  home: Home,
  menu: Menu
});