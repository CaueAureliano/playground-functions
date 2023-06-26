import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Home } from "../home";
import { AlternativeCard } from "../../Components/Cards";

export function FriendsList() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.navigate(Home)}>
            <Icon
              name="arrow-left"
              style={styles.arrowLeft}
              type="font-awesome"
              size={35}
              color="#9F51D9"
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Friends List</Text>
        </View>
        <View style={styles.box}>
          <TextInput style={styles.input} placeholder="search friend" />
        </View>

        <ScrollView>
          <AlternativeCard name="fred"></AlternativeCard>
          <AlternativeCard name="scooby"></AlternativeCard>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
