import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from 'expo-router';

export const USERS_CHAT_LISTS = [
  {
    id: 1,
    title: "My status",
    icon: require("../assets/images/users/Group-39.png"),
    message: "Have a nice day?",
    deliveredTime: "2 min ago",
    badgeCount: "4",
  },
  {
    id: 2,
    title: "Adil",
    icon: require("../assets/images/users/Group-13.png"),
    message: "Hello, sir?",
    deliveredTime: "1 hour ago",
    badgeCount: "1",
  },
  {
    id: 3,
    title: "Marina",
    icon: require("../assets/images/users/Group-14.png"),
    message: "Hello, whats app?",
    deliveredTime: "13:50",
    badgeCount: "0",
  },
  {
    id: 4,
    title: "Dean",
    icon: require("../assets/images/users/Group-15.png"),
    message: "How are you?",
    deliveredTime: "10:50",
    badgeCount: "6",
  },
  {
    id: 5,
    title: "Max",
    icon: require("../assets/images/users/Group-17.png"),
    message: "Don't miss to attend the meeting.",
    deliveredTime: "8:50",
    badgeCount: "0",
  },
];

const ChatLists = () => {
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
          message={item.message}
          deliveredTime={item.deliveredTime}
          badgeCount={item.badgeCount}
        />
      )}
    />
  );
};
const UserItem = ({ title, icon, message, deliveredTime, badgeCount }) => {
  return (
    <Link href={{
      pathname: '/home/[id]',
      params: { id: 'bacon' }
    }} asChild>
    <Pressable>
      <View style={styles.card}>
        <View style={styles.imgBox}>
          <Image source={icon} style={styles.userItem} />
        </View>
        <View style={styles.contentBox}>
          <View style={styles.cardList}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{message}</Text>
          </View>
          <View style={styles.cardListEnd}>
            <View style={styles.notificationDelivered}>
              <Text style={styles.subtitleText}>{deliveredTime}</Text>
            </View>
            {badgeCount > 0 ? (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeNumber}>{badgeCount}</Text>
              </View>
            ) : (
              ""
            )}
          </View>
        </View>
      </View>
    </Pressable>
    </Link>
  );
};
const styles = StyleSheet.create({
  flatlistContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    alignSelf: "center",
  },
  card: {
    // backgroundColor: 'red',
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardList: {
    width: "70%",
    flexDirection: "column",
    padding: 5,
  },
  cardListEnd: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "space-evenly",
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
    fontSize: 15,
    fontWeight: "400",
    color: Colors.light.tabIconDefault,
  },
  notificationDelivered: {
    top: 0,
    textAlign: 'center',
    justifyContent: "flex-end",
    alignSelf: "flex-end"
  },
  notificationBadge: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    textAlign: "center",
    alignSelf: "flex-end",
    backgroundColor: Colors.light.notificationBadge,
  },
  badgeNumber: {
    fontSize: 15,
    fontWeight: "400",
    color: Colors.light.background,
    textAlign: "center",
  },
});
export default ChatLists;
