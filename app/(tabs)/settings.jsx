import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const Settings = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  return (
    // <SafeAreaView>
    <View style={[styles.container, { paddingTop }]}>
      <Text style={styles.headerText}>Settings</Text>
      <View style={styles.subContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        >
          {/*call list*/}
          <View style={styles.settingsContainer}>
            <View style={styles.headOuter}>
              <View style={styles.imgBox}>
                <Image
                  source={require("../../assets/images/users/Group-13.png")}
                  style={styles.userItem}
                />
              </View>
              <View style={styles.headInner}>
                <Text style={styles.textHead}>Nazrul Islam</Text>
                <Text style={styles.textSubHead}>Never Give Up...</Text>
              </View>
              <View style={styles.headerEnd}>
                <FontAwesome
                  name="qrcode"
                  size={40}
                  color={Colors.light.tint}
                />
              </View>
            </View>

            <View style={styles.headerBlock}></View>

            <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                    <FontAwesome
                      name="key"
                      size={30}
                      color={Colors.light.tabIconDefault}
                    />
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Account</Text>
                  <Text style={styles.textSubHead}>
                    Privacy, security, change number
                  </Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                  <Ionicons name="chatbubble-ellipses-outline" size={30} color={Colors.light.tabIconDefault} />
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Chat</Text>
                  <Text style={styles.textSubHead}>
                  Chat history,theme,wallpapers
                  </Text>
                  </View>
                </Pressable>
              </View>
              </View>
              <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                  <Ionicons name="notifications" size={30} color={Colors.light.tabIconDefault} />
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Notifications</Text>
                  <Text style={styles.textSubHead}>
                  Messages, group and others
                  </Text>
                  </View>
                </Pressable>
              </View>
              </View>
              <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                  <Ionicons name="help-circle-outline" size={35} color={Colors.light.tabIconDefault} />
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Help</Text>
                  <Text style={styles.textSubHead}>
                  Help center,contact us, privacy policy
                  </Text>
                  </View>
                </Pressable>
              </View>
              </View>
              <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                  <FontAwesome name="exchange" size={30} color={Colors.light.tabIconDefault} 
                  style={{transform: [{rotateX: '180deg'}]}}
                  />
                 
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Storage and data</Text>
                  <Text style={styles.textSubHead}>
                  Network usage, stogare usage
                  </Text>
                  </View>
                </Pressable>
              </View>
              </View>
              <View style={styles.contentBox}>
              <View style={styles.headOuter}>
                <Pressable style={styles.wrapperCustom}>
                  <View style={styles.iconOuter}>
                  <Feather name="users" size={30} color={Colors.light.tabIconDefault} />
                  </View>
                  <View style={styles.bodyInner}>
                  <Text style={styles.bodyText}>Invite a friend</Text>
                  </View>
                </Pressable>
              </View>
              </View>
            </View>
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
    marginTop: 20,
    height: "100%",
    width: "100%",
    flex: 4
  },
  settingsContainer: {
    marginTop: 30,
    paddingTop: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.light.background,
  },
  headerBlock: {
    paddingBottom: 10,
    borderBottomColor: Colors.light.borderBottom,
    borderBottomWidth: 1,
    width: "100%",
  },
  headOuter: {
    flexDirection: "row",
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headInner: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "55%",
    padding: 10,
  },
  headerEnd: {
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "15%",
    padding: 10,
  },
  wrapperCustom:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  bodyInner:{
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80%",
    height: 'auto',
    padding: 8,
  },
  iconOuter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.iconBackground
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.background,
  },
  bodyText: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.text,
  },
  imgBox: {
    width: "25%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  contentBox: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10
  },
  userItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: Colors.light.tint,
    borderWidth: 2,
    shadowColor: Colors.light.background,
    shadowOpacity: 6,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  textHead: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.text,
  },
  textSubHead: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.light.tabIconDefault,
  },
});
export default Settings;
