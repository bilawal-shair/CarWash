import { View, Text, Image, TouchableOpacity, Button, TextInput, Alert, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import washPoint from "../assets/washPoint.png"
import apple from "../assets/Apple.png"
import google from "../assets/Google.png"
import arrow2 from "../assets/arrow2.png"
import { useNavigation } from '@react-navigation/native'
import CodeInput from 'react-native-confirmation-code-field';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import SelectArrow from "../assets/SelectArrow.svg"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OTPScreen = ({ route, navigation }) => {

  const [focusedIndex, setFocusedIndex] = useState(null);
  const textInputs = useRef(Array(6).fill(null));
  const [code, setCode] = useState(Array(6).fill(''));

  // const handleFocus = (index) => {
  //   setFocusedIndex(index);
  // };

  const handleFocus = index => {
    inputRefs.current[index].focus();
  };


  const handleBlur = () => {
    setFocusedIndex(null);
  };

  // const { verificationId } = route.params;
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);

  const verifyOtp = async () => {
    try {
      // Ensure OTP is provided
      if (!otp) {
        Alert.alert('Error', 'Please enter the OTP code');
        return;
      }

      // Create PhoneCredential using verificationId and entered OTP
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);

      // Sign in with the credential
      await auth().signInWithCredential(credential);

      // If successful, navigate to the next screen
      console.log('OTP verified successfully');
      Alert.alert('Success', 'OTP verified successfully');
      navigation.navigate('tab');
    } catch (error) {
      // If an error occurs during OTP verification, log the error
      console.error('Error verifying OTP', error);
      Alert.alert('Error', 'Error verifying OTP');
    }
  };
  
   return (
    <View style={{ flex: 1 , backgroundColor: "#FFF"}}>

      <View style={{ width: "95%", height: "100%", backgroundColor: "#FFF",alignSelf:"center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("login")} style={{ width: wp("7%"), height: hp("4%"), marginLeft: wp("3%"), marginTop: hp("4%"), borderRadius: 5, borderWidth: 0.3, borderColor: "gray" }}>
          <SelectArrow style = {{alignSelf:"center",top: hp("1%")}}/>
        </TouchableOpacity>

        <View style={{ alignSelf: "center", marginTop: hp("3%") }}>
          <Image source={washPoint} style={{width: wp("65%"), height: hp("30%") }} />
        </View>

        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#242424" }}>OTP Verification</Text>
        </View>

        <View style={{ alignSelf: "center", marginTop: hp("1.5%"), flexDirection: "row" }}>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#242424" }}>Enter the OTP send to</Text>
          <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}> +92 3333213533</Text>
        </View>

       <View style={styles.otpInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, {
              borderColor: focusedIndex === index ? '#2B91DB' : '#DADADA',
              color: 'black',
            }]}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onChangeText={text => {
              setOtp(prevOtp => {
                const updatedOtp = prevOtp.split('');
                updatedOtp[index] = text;
                return updatedOtp.join('');
              });
              if (text && index < 5) {
                inputRefs.current[index + 1].focus();
              }
            }}
            ref={ref => inputRefs.current[index] = ref}
          />
        ))}
      </View>
        <View>
      
          <TouchableOpacity  onPress= {() => navigation.navigate('tab')} style={{width: wp("90%"), height: hp("8%"), backgroundColor: "#2B91DB", alignSelf: "center", borderRadius: 12, marginTop: hp("3%") }}>
            <Text style={{ fontSize: 16, fontWeight: "900", alignSelf: "center", color: "#FFF", marginTop: hp("2.5%") }}>Verify to Proceed</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: hp("3%"), alignSelf: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#4A4A4A" }}>Don’t receive the OTP ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={{ fontSize: 13, fontWeight: "900", color: "#2B91DB", marginLeft: 4 }}>Resend</Text>
            </TouchableOpacity>

          </View>

          <View style={{ flexDirection: "row", marginTop: hp("5%"), alignSelf: "center" }}>
            <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
            <Text style={{ fontSize: 13, fontWeight: "600", color: "#4A4A4A", marginHorizontal: 8 }}>
              Or Sign in with google or apple
            </Text>
            <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("2%"),justifyContent:"space-between" }}>
            <View style={{ width: wp("40%"), height: hp ("5%"), borderWidth: 1, borderColor: "#DADADA", borderRadius: 12,left:wp("5%") }}>
              <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                <Image source={apple} style={{ width: 15, height: 15, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Apple</Text>
              </View>
            </View>
             <TouchableOpacity onPress={() => { signIn(); }} style={{ width: wp("40%"), height: hp ("5%"), borderWidth: 1, borderColor: "#DADADA",borderRadius: 12,right:wp("5%") }}>
              <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                <Image source={google} style={{ width: 15, height: 15, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: "center",top:hp("3%")}}>
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
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  
  otpInputContainer: {
    flexDirection: 'row',
    alignSelf:"center",
    marginTop:hp("4%"),
  },

  otpInput: {
    width: wp("11.%"),
    height: wp("13%"),
    borderRadius:12,
    borderWidth: 1,
    marginHorizontal: wp("1%"),
    textAlign: 'center',
    fontSize:18,
    fontWeight:"900",
   }

})