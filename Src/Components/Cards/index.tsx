import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { AlternativeButton, PrimaryButton } from "../ButtonComponents";

export function Card(props: any) {
  return (
    <ScrollView style={styles.bodyCards} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#001", "#305", "#112"]}
        style={styles.ContainerGradient}
      >
        <View style={styles.boxCard}>
          <TouchableOpacity style={styles.userPhoto}></TouchableOpacity>

          <Text style={styles.Text}>{props.name}</Text>

          <AlternativeButton />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export function AlternativeCard(props: any) {
  return (
    <ScrollView style={styles.bodyCards} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#001", "#305", "#112"]}
        style={styles.ContainerGradient}
      >
        <View style={styles.boxCard}>
          <TouchableOpacity style={styles.userPhoto}></TouchableOpacity>

          <Text style={styles.Text}>{props.name}</Text>

          <PrimaryButton />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
