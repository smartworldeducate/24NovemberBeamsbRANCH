import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import Check from 'react-native-vector-icons/AntDesign';
import Wrench from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/AntDesign';
import Gte from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Feather';
import colors from '../Styles/colors';
import {Div, ThemeProvider, Radio} from 'react-native-magnus';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
const Wfh = props => {
  return (
    <View>
      <MainHeader
        text={'W.F.H Request'}
        iconName={'arrowleft'}
        onpressBtn={() => props.navigation.goBack()}
      />

      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          iconName={'arrowright'}
          placeholder={'Adjustment Date'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          //  value={employeeId}
          //  onChangeText={onChangeEmpId}
          //  keyboardType={'numeric'}
          //  maxLength={11}
          //  returnKeyType={'done'}
          iconName={'calendar'}
          placeholder={'Off Day Worked'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          iconName={'calendar'}
          placeholder={'2 Days'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>

      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: wp(90),
            height: hp(15),
            backgroundColor: '#fff',
            borderRadius: hp(1.5),
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 8,
          }}>
          <View style={{marginHorizontal: hp(2), marginVertical: hp(1)}}>
            <TextInput placeholder="type something here" multiline={true} />
          </View>
        </View>
      </View>
      <View
        style={{width: wp(90), marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <ViewInput
          iconName={'adduser'}
          placeholder={'Muhammad Qasim Ali Khan'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          style={styles.textInputCustomStyle}
        />
      </View>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate('WorkFromHome')}
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          height: hp(6.5),
          justifyContent: 'center',
          backgroundColor: '#1C37A4',
          position: 'absolute',
          top: hp(90),
          borderRadius: hp(50),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#fff'}}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Wfh;

const styles = StyleSheet.create({
  textInputView: {
    marginTop: hp('2'),
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
  textInputCustomStyle: {
    fontSize: hp('1.65'),
    height: hp('6.3'),
    letterSpacing: -0.05,
    paddingLeft: wp('6'),
    color: colors.loginIconColor,
  },
  loginWithGoogle: {
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),

    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
});