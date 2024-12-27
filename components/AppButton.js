import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
//import colors from "./../app/style/colors.js";
import { scale, verticalScale } from '../components/scale.js';
const AppButton = ({onPress, title, size,  backgroundColor}) => (

  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer,
      size === 'lg' && {
        paddingVertical: 6,
        elevation: 6,
        width: '90%',
      },
        backgroundColor && {backgroundColor}]}>
    <Text style={styles.appButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    padding: 2,
    // width: scale(300),
     //height: verticalScale(35),
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 6,
    elevation: 6,
  },
  appButtonText: {
    //color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    padding: 5,
    letterSpacing: 1,
    justifyContent: 'space-between',
  },
});