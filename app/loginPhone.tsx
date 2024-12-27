import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  StatusBar,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import React, { useState, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AppButton from "../components/AppButton.js";
import PhoneInput from "react-native-phone-number-input";
import { Stack,Redirect, useRouter } from 'expo-router';

const LoginPhone = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  //const [phoneInput, setPhoneInput] = useState(null);
  const phoneInput = useRef(null);
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.screenContainer}>
            <Text style={styles.textStyle}>Log in to Chatbox</Text>
            <View style={styles.containerBox}>
              <Text style={styles.subtextStyle}>
                Welcome back! Sign in using your social account or email to
                continue us
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.imageBox}>
                <Image
                  source={require("../assets/images/Group-facebook.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.imageBox}>
                <Image
                  source={require("../assets/images/Group-google.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.imageBox}>
                <Image
                  source={require("../assets/images/Group-apple.png")}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.containerBox}>
              {/* <Text style={styles.drawLine}>Something</Text> */}
              <Text style={styles.textStyle}>-------------OR------------</Text>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.boxStyle}>
                <View style={styles.labelContainer}>
                <Text style={styles.textColor}>Enter Mobile Number</Text>
                </View>
                
                <View style={styles.inputContainer}>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="IN"
                  layout="first"
                  onChangeText={(text) => {
                    setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
                  textContainerStyle={{ borderRadius : 5, borderWidth : 1, borderColor: Colors.light.tint }}
                  placeholder="Enter Phone Number"
                  textInputStyle={styles.textInputStyle }
                  containerStyle = {styles.phoneNumberViewContatiner}
                  withDarkTheme
                  withShadow
                  autoFocus
                />
                {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text>Check</Text>
          </TouchableOpacity> */}
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                onPress={() => router.replace('/otp')}
                title="LOGIN"
                size={"lg"}
                backgroundColor={Colors.light.tint}
              />
              <View style={styles.containerBox}>
                <Text style={[styles.textForgotStyle, styles.textColor]}>
                  Forgot password?
                </Text>
              </View>
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
  imageBox: {
    margin: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: Colors.light.text,
  },
  drawLine: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
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
  labelContainer:{
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: "row",
  },
  phoneNumberViewContatiner : {
    width: '100%',
    height: 70,
     //backgroundColor: "#808080",
   },
   textInputStyle:{
    paddingTop: 2,
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'baseline',
    alignSelf: 'flex-start'
   },
  buttonContainer: {
    marginVertical: 60,
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
export default LoginPhone;
