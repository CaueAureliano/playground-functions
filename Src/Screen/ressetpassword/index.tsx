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
import { Home } from "../home";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NewPassword } from "../newPassword";
import { Login } from "../login";

export function RessetPassword() {
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
              onPress={() => navigation.navigate(Login)}
            >
              <Icon
                name="arrow-left"
                style={styles.arowLeft}
                type="font-awesome"
                size={35}
                color="#9F51D9"
              />
            </TouchableOpacity>
            <Text style={styles.ressetText}>Resset Password</Text>
            <Text style={styles.infoText}>
              Please enter your email address to request a password reset
            </Text>
          </View>
          <View style={styles.inputPasswordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder={"adc@gmail.com"}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => navigation.navigate(NewPassword)}
          >
            <Text style={styles.entryButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
