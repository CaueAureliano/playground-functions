import React, { useState } from "react";
import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export const PrimaryButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.background}>
        <Icon name="comments" type="font-awesome" size={15} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export const AlternativeButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.background}>
        <Icon name="plus" type="font-awesome" size={12} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
