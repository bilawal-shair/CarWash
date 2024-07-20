import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, Button } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import washPoint from "../assets/washPoint.png"
import background from "../assets/background.png"
import apple from "../assets/Apple.png"
import google from "../assets/Google.png"
import icon from "../assets/icon.png"
import flag from "../assets/flag.png"
import arrow from "../assets/arrow.png"
import { useNavigation } from '@react-navigation/native'
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { Picker } from '@react-native-picker/picker'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import CountryPicker, { CountryModalProvider } from 'react-native-country-picker-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [number, setNumber] = useState('');
  const [user, setUser] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({
    cca2: 'PK', // ISO 3166-1 alpha-2 country code for Pakistan
    callingCode: ['92'], // Country calling code for Pakistan as an array
    name: 'Pakistan', // Name of the country
    flag: '🇵🇰', // Emoji flag for Pakistan (optional)
  });

  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [isInputFocused, setInputFocused] = useState(null);

  const handleFocus = (inPutName) => {
    setInputFocused(inPutName);
  }

  const handleBlur = () => {
    setInputFocused(null);
  }

  const sendOtp = async () => {
    try {
      // Ensure user UID is provided
    if (!firebase.auth().currentUser) {
      console.error('Please log in with a valid user');
      return;
    }

    // Get the current user's UID from Firebase authentication
    const userId = firebase.auth().currentUser.uid;
    console.log('Current user UID:', userId);

    // Query Firestore to find user by UID
    const userQuery = await firebase.firestore().collection('users').where('userId', '==', userId).get();

    if (userQuery.empty) {
      console.error('User with provided UID not found');
      return;
    }

    // Assuming there's only one user with this UID, get the first document
    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();

   
  
      console.log('User found with Phone Number or UID:', userData);
  
    //  Format the phone number in E.164 format
      const formattedPhoneNumber = `+${selectedCountry.callingCode}${number}`;

      const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
       
      console.log('OTP sent successfully:', confirmation);
      navigation.navigate('otp', { verificationId: confirmation.verificationId });
      // Handle navigation or further actions here
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };
  
  
  

  // const sendOtp = async () => {
  //   try {
  //     // Ensure phone number is provided
  //     if (!phoneNumber) {
  //       console.error('Please enter a phone number');
  //       return;
  //     }

  //     // Format the phone number in E.164 format
  //     const formattedPhoneNumber = `+${selectedCountry.callingCode}${phoneNumber}`;

  //     const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
       
  //     console.log('OTP sent successfully:', confirmation);
  //     navigation.navigate('otp', { verificationId: confirmation.verificationId });
  //     // Handle navigation or further actions here
  //   } catch (error) {
  //     console.error('Error sending OTP', error);
  //   }
  // };



  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryPickerVisible(false);
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!isCountryPickerVisible);
  };


  return (
    <View style={{ flex: 1 }}>
      {/* Background Image */}
      <Image
        source={background}
        style={styles.backgroundImage}
      />

      {/* Overlay View */}
      <View style={styles.overlay}>
        {/* Your overlay content goes here */}
        <View style={{ alignSelf: "center", marginTop: hp('7%') }}>
          <Image source={washPoint} style={{ width: wp('45%'), height: wp('40%') }} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("choose")} style={{
          position: "absolute",
          top: hp('3%'),
          left: wp('5%'),
          width: wp('12%'),
          height: wp('12%'),
          borderRadius: wp('6%'),
        }}>
          <Image source={arrow} style={{
            width: wp('8%'),
            height: wp('8%'),
            marginLeft: wp('1.5%'),
            marginTop: hp("1%")

          }} />
        </TouchableOpacity>

        <View style={{
          backgroundColor: '#FFF',
          borderRadius: wp('5%'),
          width:wp("100%"),height:("70%"),
          marginTop: hp('10%'),
        }}>
        <View style = {{width:wp("95%"),height:("89%"),backgroundColor:"#FFF",alignSelf:"center",top:hp("3%")}}>

          <Text style={{ fontSize: 28, fontWeight: "900", color: "black", alignSelf: "center", marginTop: hp('0.5%') }}>Welcome Back</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black", alignSelf: "center", marginTop: hp('1%'), color: "#4A4A4A" }}>We will send a code to verify your phone </Text>
          <View>
            <View style={[
              styles.countryPickerContainer,
              { borderColor: isInputFocused ? '#2B91DB' : '#DADADA' }
            ]}>
              <View style={styles.countryPickerButton}>
                <CountryPicker
                  withFilter
                  withFlag
                  withCountryNameButton
                  withAlphaFilter
                  onSelect={handleCountrySelect}
                  containerButtonStyle={styles.countryPickerButton}
                  visible={isCountryPickerVisible}
                  onClose={() => setCountryPickerVisible(false)}
                />
              </View>
              <Text style={styles.selectedCountryCode}>{`${selectedCountry.flag} +${selectedCountry.callingCode}`}</Text>
              <TouchableOpacity onPress={toggleCountryPicker}>
                <MaterialIcons style={{ marginLeft: -5, marginTop: 5 }} name="keyboard-arrow-down" size={23}color={isInputFocused ? '#2B91DB' : '#DADADA'} />
              </TouchableOpacity>
              <View style={{ width: 1, height: 40, backgroundColor: isInputFocused ? '#2B91DB' : '#DADADA', alignSelf: "center", marginLeft: 3, marginTop: 6 }}></View>
              <TextInput
                style={[
                  styles.phoneNumberInput,
                  { color: isInputFocused === 'number' ? '#2B91DB' : 'black' }
                ]}
                placeholder="3059955677"
                keyboardType="numeric"
                placeholderTextColor={"gray"}
                value={number}
                onChangeText={(text) => setNumber(text)}
                onFocus={() => handleFocus("number")}
                onBlur={handleBlur}

              />
            </View>
          </View>

          {/* onPress={()=>navigation.navigate("otp")}  */}

          <TouchableOpacity onPress = {sendOtp} style={{
            width: wp("90%"),
            height: hp('8%'),
            backgroundColor: "#2B91DB",
            borderRadius: wp('4%'),
            marginTop: hp('3%'),
            alignSelf: "center"

          }}>
            <Text style={{
              fontSize: wp('4%'),
              fontWeight: "900",
              color: "#FFF",
              alignSelf: "center",
              top: hp("2%")
            }}>Get OTP</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: hp("3%"), alignSelf: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#4A4A4A" }}>Don’t have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={{ fontSize: 13, fontWeight: "900", color: "#2B91DB", marginLeft: wp("1%") }}>Register Now</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("3%"), alignSelf: "center" }}>
            <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
            <Text style={{ fontSize: 13, fontWeight: "600", color: "#4A4A4A", marginHorizontal: 8 }}>
              Or Sign in with google or apple
            </Text>
            <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("1%"),justifyContent:"space-between" }}>

            <View style={{ width: wp("40%"), height: hp ("5%"), borderWidth: 1, borderColor: "#DADADA", borderRadius: 12,left:wp("5%") }}>
              <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                <Image source={apple} style={{ width: 15, height: 15, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Apple</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => {()=>navigation.navigate("otp")}} style={{ width: wp("40%"), height: hp ("5%"), borderWidth: 1, borderColor: "#DADADA",borderRadius: 12,right:wp("5%") }}>
              <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                <Image source={google} style={{ width: 15, height: 15, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: "center",top:hp("4%")}}>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#C2C2C2", alignSelf: "center" }}>By Continuing, you agree to our </Text>
            <Text style={{ fontSize: 12, color: "#C2C2C2", marginTop: 6 }}>
              <Text style={{ fontWeight: "bold" }}>
                <Text style={{ textDecorationLine: "underline", fontSize: 12, fontWeight: "900", color: "#C2C2C2", }}>Terms of Service</Text>
              </Text>
              {" - "}
              <Text style={{ fontWeight: "bold" }}>
                <Text style={{ textDecorationLine: "underline", fontSize: 12, fontWeight: "900", color: "#C2C2C2", }}>Privacy Policy</Text>
              </Text>
              {" - "}
              <Text style={{ fontWeight: "bold" }}>
                <Text style={{ textDecorationLine: "underline", fontSize: 12, fontWeight: "900", color: "#C2C2C2", }}>Content Policy</Text>
              </Text>
            </Text>
          </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: 'cover', // or 'stretch' or 'contain'
    marginTop: 10
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(36, 36, 36, 0.7)', // Use rgba for transparency
    position: 'absolute',
  },
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('4%'),
    borderRadius: wp('4%'),
    borderWidth: wp('0.4%'),
    borderColor: '#DADADA',
    width: wp("90%"),
    height: hp("7%"),
    alignSelf: "center"
  },
  countryPickerButton: {
    flex: 1,
    marginLeft: wp('3%'),
    marginRight: wp('1.5%'),
  },
  selectedCountryCode: {
    marginLeft: -wp('55%'),
    marginRight: wp('1.5%'),
   color: '#4A4A4A',
    fontSize: wp('4%'),
    fontWeight: "500"
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: wp('2%'),
    fontSize: wp('3.5%'),
    fontWeight: "500"
  },
});


