import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    backgroundColor: "#131015",
    height: "100%",
    width: "100%",
  },
  Header: {
    flexDirection: "row",
    paddingTop: 60,
    paddingLeft: 10,
    alignContent: "center",
  },
  arrowLeft: {
    paddingRight: 30,
    borderRadius: 50,
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 60,
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
});

export default styles;
