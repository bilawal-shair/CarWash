import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import washPoint from "../assets/washPoint.png"
import background from "../assets/background.png"
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChooseScreen = () => {

  const navigation = useNavigation();
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
        <View style={{ alignSelf: "center", marginTop: hp('35%')}}>
          <Image source={washPoint} style={{ width: wp('45%'), height: hp('20%'), borderRadius: 10 }} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("login")} style={{  width: wp('90%'), height: hp('8%'), backgroundColor: "#2B91DB", borderRadius: 12, alignSelf: "center",  marginTop: hp('10%') }}>
          <Text style={{ fontSize: 16, fontWeight: "900", alignSelf: "center", color: "#FFF", marginTop: hp('2.5%') }}> Login With Wash Point</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("signup")} style={{ width: wp('90%'), height: hp('8%'), borderColor: "#FFF", borderWidth: 1, borderRadius: 12, alignSelf: "center", marginTop: hp('3%') }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", alignSelf: "center", color: "#FFF", marginTop: 20 }}>Create New Account</Text>
        </TouchableOpacity>


        <View style={{ alignSelf: "center",marginTop: hp('8%') }}>
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#FFF", marginLeft: 50 }}>By Continuing, you agree to our </Text>
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#FFF", marginTop: 6 }}>
            <Text style={{ textDecorationLine: "underline" }}>Terms of Service</Text> -{" "}
            <Text style={{ textDecorationLine: "underline" }}>Privacy Policy</Text> -{" "}
            <Text style={{ textDecorationLine: "underline" }}>Content Policy</Text>
          </Text>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(36, 36, 36, 0.7)', // Use rgba for transparency
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default ChooseScreen