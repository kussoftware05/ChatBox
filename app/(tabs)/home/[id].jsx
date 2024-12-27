import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from "react-native";
import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  GiftedChat,
  InputToolbar,
  LoadEarlier,
  Send,
  LeftAction,
  Bubble,
} from "react-native-gifted-chat";
import { Stack, useGlobalSearchParams, useNavigation, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ChatScreen = () => {
  // user=baconbrix & extra=info
  const { id } = useGlobalSearchParams();
  const [textMessage, setTextMessage] = useState("");
  const navigation = useNavigation();
  console.log("hello==" + id);
  const [messages, setMessages] = useState([]);
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       // <View style={{ marginLeft: 20 }}>
  //       //     <Avatar
  //       //         rounded
  //       //         source={{
  //       //             uri: 'https://placeimg.com/140/140/any',//auth?.currentUser?.photoURL,
  //       //         }}
  //       //     />
  //       // </View>
  //       <View style={styles.iconOuter}>
  //         <Link href="/settings" />
  //         <Pressable>
  //           <FontAwesome
  //             name="user-circle-o"
  //             size={40}
  //             color={Colors.light.chatBoxOwn}
  //           />
  //         </Pressable>
  //       </View>
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{
  //           marginRight: 10,
  //         }}
  //         //onPress={signOutNow}
  //       >
  //         <Text>logout</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer," + id,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://facebook.github.io/react/img/logo_og.png",
        },
        image: "https://facebook.github.io/react/img/logo_og.png",
        // You can also add a video prop:
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        // Mark the message as sent, using one tick
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        pending: true,
        // Any additional custom parameters are passed through
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    if (Platform.OS === "android") {
      let granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
      }
    }
  };

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.light.background,
          //borderTopColor: "#E8E8E8",
          //borderTopWidth: 1,
          padding: 8,
        }}
      />
    );
  };
  // Render bubble
  const renderBubble = (props) => {
    const message_sender_id = props.currentMessage.user._id;

    return (
      <Bubble
        {...props}
        //position={message_sender_id == currentLoggeduser ? 'right' : 'left'}
        position="right"
        textStyle={{
          right: {
            color: Colors.light.background,
            fontSize: 15,
          },
          left: {
            fontSize: 20,
          },
        }}
        // wrapperStyle={{
        //     right: {
        //         backgroundColor: Colors.light.chatBoxOwn,
        //         marginRight: 5,
        //         marginVertical: 5
        //     },
        //     left: {
        //         marginVertical: 5
        //     },

        // }}
        wrapperStyle={{
          right: {
            borderTopRightRadius: 15,
            backgroundColor: Colors.light.chatBoxOwn,
          },
          left: {
            borderTopLeftRadius: 15,
            backgroundColor: Colors.light.chatBoxUser,
          },
        }}
        containerToPreviousStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerToNextStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
      />
    );
  };
  return (
    // <View>
    // <Stack.Screen options={{headerStyle: `Hello,`+id}}>
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      showUserAvatar={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        //_id: auth?.currentUser?.email,
        name: "Admin",
        avatar: "https://i.pravatar.cc/300",
      }}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      messagesContainerStyle={{
        backgroundColor: Colors.light.chatBackground,
      }}
      minInputToolbarHeight={100}
      renderSend={(props) => {
        const { text, messageIdGenerator, user, onSend } = props;
        return (
          <TouchableOpacity
            onPress={() => {
              if (text && onSend) {
                onSend(
                  { text: text.trim(), user: user, _id: messageIdGenerator() },
                  true
                );
              }
            }}
            style={styles.sendButton}
          >
            <Send {...props}>
              <View style={styles.iconOuter}>
                <MaterialIcons
                  name="send"
                  type="ionicon"
                  size={25}
                  color={Colors.light.background}
                />
              </View>
            </Send>
          </TouchableOpacity>
        );
      }}
      textInputStyle={{
        backgroundColor: Colors.light.chatBoxInput,
        borderRadius: 12,
      }}
      placeholder="Write a message"
      // alwaysShowSend
      renderBubble={renderBubble}
      scrollToBottom={true}
      //scrollToBottomComponent={renderScrollToBottom}
      //text={textMessage}
      onInputTextChanged={(text) => setTextMessage(text)}
      inverted={false}
    />
    // </Stack.Screen>
    // </View>
  );
};
const styles = StyleSheet.create({
  iconOuter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.light.chatBoxOwn,
  },
});
export default ChatScreen;
