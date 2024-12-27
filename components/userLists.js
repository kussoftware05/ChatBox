import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
export const USERS_LISTS = [
  {
    id: 1,
    title: "My status",
    icon: require("../assets/images/users/Group-39.png"),
  },
  {
    id: 2,
    title: "Adil",
    icon: require("../assets/images/users/Group-13.png"),
  },
  {
    id: 3,
    title: "Marina",
    icon: require("../assets/images/users/Group-14.png"),
  },
  {
    id: 4,
    title: "Dean",
    icon: require("../assets/images/users/Group-15.png"),
  },
  { id: 5, title: "Max", icon: require("../assets/images/users/Group-17.png") },
];

const UserLists = () => {
  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={USERS_LISTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <UserItem title={item.title} icon={item.icon} />
      )}
    />
  );
};
const UserItem = ({ title, icon }) => {
  return (
    <TouchableOpacity>
      <View style={styles.imageBox}>
        <Image source={icon} style={styles.userItem} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  flatlistContainer: {
    width: 650,
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    alignSelf:'flex-start'
  },
  imageBox: {
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  userItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: Colors.light.background,
    borderWidth: 2,
    shadowColor: Colors.light.background,
    shadowOpacity: 6,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.light.background
  },
});
export default UserLists;
