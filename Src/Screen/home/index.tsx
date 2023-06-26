import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../Components/Cards";
import { Login } from "../login";
import { FriendsList } from "../friendsList";
import { getClients } from "../../services/getClient";

export function Home() {
  const navigation = useNavigation<any>();
  const [Friends, setNewFriend] = useState("");

  const createTwoButtonAlert = () =>
    Alert.alert("Sair Agora?", "Deseja mesmo sair da conta?", [
      {
        text: "Cancel",
        onPress: () => console.log("cancelar"),
        style: "cancel",
      },
      { text: "Sair", onPress: () => navigation.navigate(Login) },
    ]);

  return (
    <View style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View style={styles.Header}>
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Icon
              name="arrow-left"
              style={styles.arrowLeft}
              type="font-awesome"
              size={30}
              color="#9F51D9"
            />
          </TouchableOpacity>
          <View style={styles.options}>
            <Text style={styles.titleText}>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate(FriendsList)}>
              <Icon
                name="user-plus"
                style={styles.friendsListIcon}
                type="font-awesome"
                size={30}
                color="#9F51D9"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <TextInput style={styles.input} placeholder="add a friend" />
        </View>

        <ScrollView>
          <Card name="User" value={setNewFriend}></Card>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
