import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import React from "react";
import { Colors } from "@/constants/Colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AppButton from "../components/AppButton.js";

const Signup = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.screenContainer}>
            <Text style={styles.textStyle}>Sign up with Email</Text>
            <View style={styles.containerBox}>
              <Text style={styles.subtextStyle}>
              Get chatting with friends and family today by signing up for our chat app!
              </Text>
            </View>
         
            <View style={styles.boxContainer}>
              <View style={styles.boxStyle}>
                <Text style={styles.textColor}> Your Name</Text>
                <TextInput style={styles.testInput}></TextInput>
              </View>
              <View style={styles.boxStyle}>
                <Text style={styles.textColor}> Your Email</Text>
                <TextInput style={styles.testInput}></TextInput>
              </View>
              <View style={styles.boxStyle}>
                <Text style={styles.textColor}>Password</Text>
                <TextInput style={styles.testInput}></TextInput>
              </View>
              <View style={styles.boxStyle}>
                <Text style={styles.textColor}>Confirm Password</Text>
                <TextInput style={styles.testInput}></TextInput>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                onPress={() => console.log()}
                title="Create an account"
                size="lg"
                backgroundColor={Colors.light.tint}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  screenContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 100,
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: Colors.light.text,
  },
  drawLine:{
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  subtextStyle: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  boxContainer: {
    marginTop: 40,
    padding: 10,
  },
  boxStyle: {
    margin: 10,
  },
  testInput: {
    width: 300,
    height: 50,
    borderBottomWidth: 2,
    color: Colors.light.tint,
    borderColor: Colors.light.tint,
  },
  buttonContainer: {
    marginVertical: 80,
    height: 50,
  },
  containerBox: {
    margin: 10,
  },
  textForgotStyle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  textColor: {
    color: Colors.light.tint,
  },
});

export default Signup;