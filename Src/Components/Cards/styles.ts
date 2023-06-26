import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyCards: {
    marginHorizontal: 5,
    borderRadius: 12,
    paddingBottom: 5,
    paddingTop: 10,
  },
  boxCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  ContainerGradient: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 12,
  },
  userPhoto: {
    padding: 35,
    backgroundColor: "#8A8989",
    borderRadius: 100,
  },
  Text: {
    color: "#fff",
    padding: 12,
    fontSize: 18,
    fontWeight: "400",
    flex: 1,
    justifyContent: "space-between",
  },
  buttonAdd: {
    padding: 20,
    backgroundColor: "#8A8989",
    borderRadius: 100,
    color: "#fff",
  },
});

export default styles;
