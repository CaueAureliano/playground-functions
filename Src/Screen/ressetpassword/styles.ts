import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    height: "100%",
    width: "100%",
  },
  infoText: {
    color: "#fff",
    alignSelf: "baseline",
    fontSize: 15,
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 30,
  },
  ressetText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 24,
    paddingLeft: 12,
  },
  buttonText: {
    alignSelf: "flex-end",
    color: "#9F51D9",
    paddingRight: 12,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  iconButton: {
    backgroundColor: "#392B44",
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  loginWithBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  inputUserBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userinput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    padding: 5,
  },
  inputPasswordBox: {
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    alignItems: "center",
    height: 40,
    width: "100%",
    paddingLeft: 5,
  },
  sendButton: {
    backgroundColor: "#9F51D9",
    padding: 10,
    borderRadius: 5,
    margin: 8,
  },
  entryButtonText: {
    alignSelf: "center",
    color: "#fff",
  },
  boxArrow: {
    paddingTop: 40,
    alignItems: "baseline",
  },
  arowLeft: {
    alignItems: "baseline",
    paddingLeft: 12,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 50,
  },
});

export default styles;
