import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export const USERS_CHAT_LISTS = [
  {
    id: 1,
    title: "Raj",
    icon: require("../assets/images/users/Group-39.png"),
    callType: "InComing",
    callTime: "Today, 07:30 AM",
  },
  {
    id: 2,
    title: "Adil",
    icon: require("../assets/images/users/Group-13.png"),
    callType: "OutGoing",
    callTime: "Today, 09:30 AM",
  },
  {
    id: 3,
    title: "Marina",
    icon: require("../assets/images/users/Group-14.png"),
    callType: "InComing",
    callTime: "Monday, 09:30 AM",
  },
  {
    id: 4,
    title: "Dean",
    icon: require("../assets/images/users/Group-15.png"),
    callType: "Rejected",
    callTime: "Yesterday, 07:35 PM",
  },
  {
    id: 5,
    title: "Max",
    icon: require("../assets/images/users/Group-17.png"),
    callType: "OutGoing",
    callTime: "03/07/22, 07:30 AM",
  },
];

const CallLists = () => {
  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={USERS_CHAT_LISTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <UserItem
          title={item.title}
          icon={item.icon}
          callType={item.callType}
          callTime={item.callTime}
          badgeCount={item.badgeCount}
        />
      )}
    />
  );
};
const UserItem = ({ title, icon, callType, callTime, badgeCount }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.imgBox}>
          <Image source={icon} style={styles.userItem} />
        </View>
        <View style={styles.contentBox}>
          <View style={styles.cardList}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.cardListLower}>
              {callType === "InComing" ? (
                <Pressable>
                  <MaterialIcons
                    name="phone-callback"
                    size={24}
                    color={Colors.light.tint}
                  />
                </Pressable>
              ) : callType === "OutGoing" ? (
                <Pressable>
                  <SimpleLineIcons name="call-out" size={22} color={Colors.light.callIconOut} />
                </Pressable>
              ) : (
                <Pressable>
                  <MaterialIcons
                    name="phone-callback"
                    size={24}
                    color={Colors.light.callIconReject}
                  />
                </Pressable>
              )}
              <Text style={styles.subtitleText}>{callTime}</Text>
            </View>
          </View>
          <View style={styles.cardListEnd}>
            <Pressable>
              <Feather name="phone-call" size={25} color={Colors.light.tint} />
            </Pressable>
            <Pressable>
              <Feather name="video" size={25} color={Colors.light.tint} />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  flatlistContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    alignSelf: 'flex-start'
  },
  card: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardList: {
    width: "70%",
    flexDirection: "column"
  },
  cardListLower: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardListEnd: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imgBox: {
    width: "20%",
  },
  contentBox: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
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
  },

  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.text,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.light.tabIconDefault,
  },
});
export default CallLists;
