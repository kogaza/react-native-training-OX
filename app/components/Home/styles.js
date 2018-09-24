import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEB4",
    justifyContent: 'space-between'
  },
  board: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeIcons: {
    paddingLeft: 10,
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
    padding: 10,
  },
  header: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  newGame: {
  },
  question: {
    display: 'flex',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  }
})