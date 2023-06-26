import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxArrow: {
    paddingTop: 40,
    alignItems: "baseline",
  },
  arrowLeft: {
    alignItems: "baseline",
    paddingLeft: 12,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 50,
  },
  newPasswordText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 10,
    marginTop: 40,
  },
  bodyBox: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  inputPasswordBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  newPasswordInput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    padding: 5,
  },
  confirmPasswordBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  confirmPasswordInput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    padding: 5,
  },
  confirmButtonBox: {
    paddingTop: 20,
  },
  confirmButton: {
    backgroundColor: "#9F51D9",
    padding: 15,
    borderRadius: 5,
    margin: 8,
  },
  confirmButtonText: {
    alignSelf: "center",
    color: "#fff",
  },
});

export default styles;
