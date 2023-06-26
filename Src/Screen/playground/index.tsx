import React, { useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import styles from "./styles";

export function Playground() {
  const fadeInOpacity = useRef(new Animated.Value(0)).current;
  const fadeInScale = useRef(new Animated.Value(0)).current;

  function animationOpacity() {
    return Animated.timing(fadeInOpacity, {
      toValue: 1,
      duration: 3000,
      delay: 1000,
      useNativeDriver: true,
    });
  }
  function animationScale() {
    return Animated.timing(fadeInScale, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });
  }
  useEffect(() => {
    Animated.parallel([animationOpacity(), animationScale()]).start();
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.Image}>
        <Animated.View
          style={{
            transform: [{ scale: fadeInScale }],
            opacity: fadeInOpacity,
          }}
        >
          <Image
            source={require("../../assets/logo-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ProjectBasic</Text>
        </Animated.View>
      </View>
    </View>
  );
}
