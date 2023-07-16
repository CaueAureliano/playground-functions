import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Src/Screen/login";
import { Home } from "./Src/Screen/home";
import { NavigationContainer } from "@react-navigation/native";
import { Playground } from "./Src/Screen/playground";
import { RessetPassword } from "./Src/Screen/ressetpassword";
import { NewPassword } from "./Src/Screen/newPassword";
import { FriendsList } from "./Src/Screen/friendsList";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RessetPassword"
          component={RessetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FriendsList"
          component={FriendsList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Playground"
          component={Playground}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
