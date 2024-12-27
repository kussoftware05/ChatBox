import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { scale, verticalScale, moderateScale } from "../../components/scale.js";
import { Colors } from "@/constants/Colors";
import CallLists from "../../components/callLists.js";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Calls = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  return (
    // <SafeAreaView>
    <View style={[styles.container, { paddingTop }]}>
      {/*header*/}
      <View style={styles.header}>
        <View style={styles.iconOuter}>
          <Pressable>
            <FontAwesome
              name="search"
              size={30}
              color={Colors.light.background}
            />
          </Pressable>
        </View>
        <Text style={styles.headerText}>Calls</Text>
        <View style={styles.iconOuter}>
          <Pressable>
            <MaterialIcons
              name="add-call"
              size={30}
              color={Colors.light.background}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.subContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        >
          {/*call list*/}
          <View style={styles.callList}>
            <View style={styles.content}>
              <Text style={styles.text}>Recent</Text>
            </View>
            <CallLists />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.light.pageBackground,
  },
  subContainer: {
    marginTop: 10,
    paddingBottom: 10,
    height: "100%",
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    width: "90%",
    marginHorizontal: verticalScale(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconOuter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: Colors.light.background,
    borderWidth: 1
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.background,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
  },
  content: {
    paddingTop: 5,
    paddingLeft: 25,
    alignSelf: "flex-start",
  },
  callList: {
    paddingTop: 2,
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.light.background,
  },
});
export default Calls;
