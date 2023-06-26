import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    backgroundColor: "#131015",
    height: "100%",
    width: "100%",
  },
  titleText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 120,
    paddingRight: 100,
  },
  Header: {
    alignContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 45,
    paddingLeft: 12,
  },
  box: {
    paddingTop: 25,
  },
  input: {
    height: 45,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#8A8989",
    borderRadius: 15,
  },
  container: {
    flex: 1,
  },
  leftBars: {
    padding: 12,
    borderRadius: 100,
  },
  options: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  friendsListIcon: {
    paddingRight: 20,
    borderRadius: 100,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 15,
  },
  arrowLeft: {
    borderRadius: 90,
    paddingRight: 8,
  },
  backBox: {
    borderWidth: 1,
    paddingLeft: 12,
    paddingBottom: 5,
    alignItems: "flex-start",
  },
  buttonBack: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 90,
    backgroundColor: "#9F51D9",
  },
  backText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 20,
    paddingRight: 15,
  },
});

export default styles;
