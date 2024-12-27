import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, {useEffect} from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { scale, verticalScale, moderateScale } from "../../components/scale.js";
import { Colors } from "@/constants/Colors";
import ContactsList from "../../components/contactLists.js";
import SearchBar from "../../components/searchBar.js";
import { Stack, useNavigation } from 'expo-router';

const ContactScreen = () => {

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerLargeTitle: true,
      headerSearchBarOptions:{
        placeholder: "Search",
        onchangeText: (e) => console.log('kkk')
      }
     });
  }, [navigation]);

  const searchElements = () => {
    console.log('jjjj');
    <SearchBar updateQuery={updateQuery} />
  }

  const updateQuery = input => {
    console.log('jjjj')
    if (input) {
      console.log('')
    }
  };
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
              onPress={()=> searchElements()}
            />
            <SearchBar updateQuery={updateQuery} />
          </Pressable>
        </View>
        <Text style={styles.headerText}>Home</Text>
        <View style={styles.iconOuter}>
          <Pressable>
            <FontAwesome
              name="user-circle-o"
              size={40}
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
          {/*contacts list*/}
          <View style={styles.chatList}>
            <View style={styles.content}>
              <Text style={styles.text}>My Contacts</Text>
              <Text style={styles.text}>A</Text>
            </View>
            
            <ContactsList />
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
    //gap: 15,
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
    marginBottom: 10
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
  contactsList: {
    flex: 1,
    margin: 20,
    width: "90%",
  },
  chatList: {
    flex: 4,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.light.background,
  },
  content: {
    paddingTop: 5,
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  text:{
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '600'
  }
});
export default ContactScreen;
