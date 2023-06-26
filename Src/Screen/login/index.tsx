import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import styles from "./styles";
//import { UselessnumberInput, UselessTextInput } from "../../components/Input";
import { Home } from "../home";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { RessetPassword } from "../ressetpassword";
import Checkbox from "expo-checkbox";

export function Login() {
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  function verificacao() {
    if (userName == "User1" && password == "0000") {
      navigation.navigate(Home);
      setUserName("");
      setPassword("");
    } else {
      Alert.alert("usuario ou senha incorretos");
    }
  }

  const verificador = () => {
    console.log("passou!");
  };

  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.bodyBox}>
      <LinearGradient
        colors={["#305", "#304", "#000"]}
        style={styles.container}
      >
        <View>
          <Text style={styles.welcomeText}>Bem vindo!</Text>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View>
          <View style={styles.inputUserBox}>
            r
            <TextInput
              style={styles.userinput}
              placeholder={"Username"}
              textContentType="username"
              keyboardType="default"
              maxLength={14}
              onChangeText={setUserName}
              value={userName}
            />
          </View>
          <View style={styles.inputPasswordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder={"password"}
              keyboardType="number-pad"
              maxLength={4}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.buttonCheckbox}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#9F51D9" : undefined}
              />
              <Text style={styles.paragraph}>Manter-se conectado?</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(RessetPassword)}
            >
              <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.entryButton} onPress={verificacao}>
            <Text style={styles.entryButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              size={30}
              color="#808e9b"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
