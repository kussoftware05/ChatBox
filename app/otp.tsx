import { Colors } from "@/constants/Colors";
import { Link, Redirect, router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  View,
  Pressable,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const Otp = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.titleHead}>
          <Text style={styles.title}>Verification</Text>
        </View>

        <Text style={styles.textContent}>
          Enter the code we have sent by text to
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.textContent}>+91 9999999999. </Text>
        <Link href="/loginPhone" asChild>
          <Pressable>
            <Text style={[styles.textContent, {color: Colors.light.callIconOut, fontWeight:'600', textDecorationStyle: 'solid'}]}>Change?</Text>
          </Pressable>
        </Link>
        </View>
      </View>
      <>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          autoFocus={true}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
         <Link href="/loginPhone" asChild>
          <Pressable>
            <Text style={[styles.textContent, {color: Colors.light.chatBoxOwn, fontWeight:'600', textDecorationStyle: 'solid'}]}>Did not get a code?</Text>
          </Pressable>
        </Link>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, backgroundColor: Colors.light.chatBackground },
  container: {
    textAlign: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  title: { textAlign: "center", fontSize: 30 },
  titleHead: { marginBottom: 20 },
  textContent: { textAlign: "center", fontSize: 20 },
  codeFieldRoot: { marginTop: 50 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: Colors.light.tint,
    textAlign: "center",
  },
  focusCell: {
    borderColor: Colors.light.callIconOut,
  },
});
export default Otp;
