import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import styles from "./styles";
//import { UselessnumberInput, UselessTextInput } from "../../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { RessetPassword } from "../ressetpassword";

export function NewPassword() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View>
          <View>
            <TouchableOpacity
              style={styles.boxArrow}
              onPress={() => navigation.navigate(RessetPassword)}
            >
              <Icon
                name="arrow-left"
                style={styles.arrowLeft}
                type="font-awesome"
                size={35}
                color="#9F51D9"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.newPasswordText}>Redefinir senha</Text>
          <View style={styles.inputPasswordBox}>
            <TextInput
              style={styles.newPasswordInput}
              placeholder={"Nova senha"}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.confirmPasswordBox}>
            <TextInput
              style={styles.confirmPasswordInput}
              placeholder={"confirme a nova senha"}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.confirmButtonBox}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => navigation.navigate(NewPassword)}
          >
            <Text style={styles.confirmButtonText}>confirmar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
