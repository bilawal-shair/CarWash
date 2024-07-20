import { View, Text, TouchableOpacity, Image, TextInput, PermissionsAndroid, Alert, Linking, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import apple from "../assets/Apple.png"
import google from "../assets/Google.png"
import Password1 from "../assets/Password1.png"
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import { GoogleSignin, statusCodes, GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import  firebase from '@react-native-firebase/app';

const SignupScreen = ({ locationName }) => {
 const navigation = useNavigation()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPassword1Visible, setIsPassword1Visible] = useState('');
  const [isPassword2Visible, setIsPassword2Visible] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  const [focusedInput, setFocusedInput] = useState("firstName");

  const handleSignUp = async () => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userId = user.uid; // Use the user's UID as the custom ID
    // Add user data to Firestore with custom ID
       await firebase.firestore().collection('users').doc(userId).set({
        userId,
        firstName,
        lastName,
        email,
        number,
        password,
        confirmPassword
        // Add other user data as needed
      });
      
      // Navigate to login screen after successful sign-up
      navigation.navigate('login');
    } catch (error) {
      // Handle sign-up errors
      console.error('Sign-up Error:', error);
      setError(error.message);
    }
  };

  const handleFocus = (inPutName) => {
    setFocusedInput(inPutName);
  }

  const handleBlur = () => {
    setFocusedInput(null);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '203621304630-of8e95jh77lf6amkb3di24okkojkels8.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true
    });
    isSignedIn();

  }, [])


    const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log("User Info:", userInfo);
      setUser(userInfo);
      navigation.navigate('tab'); // 'MainTab' is the name of your tab screen
    } catch (error) {

      console.log("Message_", error.message,);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User Cancelled the login flow");
        // User cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("User Sign In");
        // Operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play Services not Avilable");
        // Play services not available or outdated
      } else {
        // Some other error happened
        console.error("Google Sign-In Error:", error);
      }
    }
  };


  // const SignOut = async () => {
  //    try {
  //     await GoogleSignin.signOut();
  //     setUserInfo(null); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //     console.error("Google Sign-Out Error:", error);
  //   }

  // }

  //////////////////33333333333333333////////////////////////////////
  // useEffect(() => {

  //   GoogleSignin.configure({
  //     webClientId: "203621304630-lqktcpikf1rri9i34j0d4l7k70qngt6h.apps.googleusercontent.com",
  //     offlineAccess: true,
  //     forceCodeForRefreshToken: true
  //   });
  //   isSignedIn()

  // }, [])


  // const signIn = async () => {
  //   try {

  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();

  //     console.log("due_", userInfo)
  //     setUser(userInfo)
  //       // Navigate to the tab screen after successful sign-in
  //      // Check if user is registered and then navigate to the tab screen
  //      if (userInfo) {
  //       navigation.navigate('tab'); // Replace 'TabScreenName' with the name of your tab screen
  //     } else {
  //       console.log('User is not registered.'); // Handle registration error
  //     }
  //   } catch (error) {

  //     console.log("Message_>", error.message);

  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('User Cancelled the Login Flow');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log("Signing in");

  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log("Play Services not Available");

  //     } else {
  //       console.log('Some other Error Happend');

  //     }

  //   }
  // };

  const isSignedIn = async () => {

    const isSignedIn = await GoogleSignin.isSignedIn()
    if (!!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log("Please Login")
    }

  }

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit_', user);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert("User has not signdIn")
        console.log("user has not signIn");

      } else {
        Alert("Something went wrong");
        console.log("Something Went Wrong");
      }

    }
  }


  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

    } catch (error) {

      console.error(error);
    }
  }
  /////////////////333333333333////////////////////////////

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const usrInfo = await GoogleSignin.signIn();

  //     setUserInfo(usrInfo);

  //     navigation.navigate('googleProfile', { usrInfo });
  //     console.log('User Info:', usrInfo); // Check if usrInfo is logged correctly

  //   } catch (error) {
  //     console.error('Google Sign-In Error:', error); // Log any errors that occur during sign-in
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // User cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // Operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // Play services not available or outdated
  //     } else {
  //       // Some other error happened
  //     }
  //   }
  // };



  //  const signInWithGoogle = async () => {
  //   try {
  //     // Trigger the Google sign-in flow
  //     const { idToken } = await GoogleSignin.signIn();

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     await auth().signInWithCredential(googleCredential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   // Request location permission
  //   requestLocationPermission();
  // }, []);

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Location Permission',
  //         message: 'This app needs access to your location.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // Permission granted
  //       getCurrentLocation();
  //     } else {
  //       setError('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // const getCurrentLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({ latitude, longitude });
  //     },
  //     error => setError(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   );
  // };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        if (error.code === 'TIMEOUT') {
          setError('Timeout while fetching location. Please try again.');
        } else {
          setError(error.message);
        }
      },
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 100 }, // Adjust timeout value as needed
    );
  };

  const togglePasswordvisibility1 = () => {
    setIsPassword1Visible(!isPassword1Visible);

  }
  const togglePasswordvisibility2 = () => {
    setIsPassword2Visible(!isPassword2Visible);

  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>

      <Text style={{ fontSize: 22, fontWeight: "900", color: "#242424", alignSelf: "center", marginTop: hp('1.5%'), color: "#242424" }}>Create New Account</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", color: "#242424", alignSelf: "center", marginTop: hp('1%'), color: "#4A4A4A" }}>Fill your full information</Text>

      <View style={{ flexDirection: "row", marginTop: hp('1%'), justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "firstName" ? "#2B91DB" : "#DADADA", marginLeft: wp('7%') }}>First Name</Text>
        <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "lastName" ? "#2B91DB" : "#DADADA", marginRight: wp('29%') }}>Last Name</Text>
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center", margin: hp('1%') }}>

        <TextInput
          style={{ color: focusedInput === "firstName" ? "#2B91DB" : "black", paddingLeft: 13, width: wp('42%'), height: hp('5%'), borderWidth: 1, borderRadius: 12, fontSize: 12, fontWeight: "900", borderColor: focusedInput === "firstName" ? "#2B91DB" : "#DADADA", }}
          placeholder='Bilawal'
          placeholderTextColor={"#DADADA"}
          value={firstName}
          onChangeText={text => setFirstName(text)}
          onFocus={() => handleFocus("firstName")}
          onBlur={handleBlur}
        />

        <TextInput
          style={{ color: focusedInput === "lastName" ? "#2B91DB" : "black", paddingLeft: 13, width: wp('42%'), height: hp('5%'), borderWidth: 1, marginLeft: 22, borderRadius: 12, fontSize: 12, fontWeight: "900", borderColor: focusedInput === "lastName" ? "#2B91DB" : "#DADADA", }}
          placeholder='Shair'
          placeholderTextColor={"#DADADA"}
          value={lastName}
          onChangeText={text => setLastName(text)}
          onFocus={() => handleFocus("lastName")}
          onBlur={handleBlur}
        />

      </View>

      <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "email" ? "#2B91DB" : "#DADADA", marginLeft: wp('7%') }}>Email</Text>
      <View>
        <TextInput style={{ color: focusedInput === "email" ? "#2B91DB" : "black", paddingLeft: 13, fontSize: 12, fontWeight: "900", width: wp('90%'), height: hp('5%'), borderWidth: 1, borderColor: focusedInput === "email" ? "#2B91DB" : "#DADADA", alignSelf: "center", marginTop: 8, borderRadius: 12 }}
          placeholder='theskofficial1@gmail.com'
          placeholderTextColor={"#DADADA"}
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
      </View>

      <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "number" ? "#2B91DB" : "#DADADA", marginLeft: wp('7%'), marginTop: 8 }}>Number</Text>
      <View>
        <TextInput style={{ color: focusedInput === "number" ? "#2B91DB" : "black", paddingLeft: 13, fontSize: 12, fontWeight: "900", width: wp('90%'), height: hp('5%'), borderWidth: 1, borderColor: focusedInput === "number" ? "#2B91DB" : "#DADADA", alignSelf: "center", marginTop: 8, borderRadius: 12 }}
          placeholder='+923334455622'
          placeholderTextColor={"#DADADA"}
          value={number}
          onChangeText={text => setNumber(text)}
          onFocus={() => handleFocus("number")}
          onBlur={handleBlur}
        />
      </View>
      <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "password" ? "#2B91DB" : "#DADADA", marginLeft: wp('7%'), marginTop: 8 }}>Password</Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <TextInput
          style={{
            color: focusedInput === "password" ? "#2B91DB" : "black",
            paddingLeft: 13,
            fontSize: 12,
            fontWeight: "900",
            marginTop: 8,
            width: wp('90%'), height: hp('5%'),
            borderWidth: 1,
            borderColor: focusedInput === "password" ? "#2B91DB" : "#DADADA",
            borderRadius: 12,
            paddingRight: 40, // Add paddingRight to create space for the icon
          }}
          placeholder='**********'
          placeholderTextColor={"#DADADA"}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!isPassword1Visible}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          onPress={togglePasswordvisibility1}
          style={{
            position: 'absolute',
            right: 15, // Adjust right position to align the icon
            alignSelf: 'center',
            top: hp("2%") // Adjust marginTop to vertically center the icon
          }}
        >
          <Ionicons name={isPassword1Visible ? "eye" : "eye-off"} color={focusedInput === "password" ? "#2B91DB" : "#4A4A4A"} size={20} />
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: "900", fontSize: 14, color: focusedInput === "confirmPassword" ? "#2B91DB" : "#DADADA", marginLeft: wp('7%'), marginTop: 8 }}>Confirm Password</Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }} >
        <TextInput style={{
          color: focusedInput === "confirmPassword" ? "#2B91DB" : "black",
          paddingLeft: 13,
          fontSize: 12,
          fontWeight: "900",
          marginTop: 8,
          width: wp('90%'), height: hp('5%'),
          borderWidth: 1,
          borderColor: focusedInput === "confirmPassword" ? "#2B91DB" : "#DADADA",
          borderRadius: 12,
          paddingRight: 40, // Add paddingRight to create space for the icon
        }}
          placeholder='**********'
          placeholderTextColor={"#DADADA"}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={!isPassword2Visible}
          onFocus={() => handleFocus("confirmPassword")}
          onBlur={handleBlur}

        />
        <TouchableOpacity style={{
          position: 'absolute',
          right: 15, // Adjust right position to align the icon
          alignSelf: 'center',
          top: hp("2%")// Adjust marginTop to vertically center the icon
        }} onPress={togglePasswordvisibility2}>
          <Ionicons name={isPassword2Visible ? "eye" : "eye-off"} color={focusedInput === "confirmPassword" ? "#2B91DB" : "#4A4A4A"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: wp("7%"), marginTop: hp("2%"), flexDirection: "row" }}>
        <TouchableOpacity style={{ width: 16, height: 16, backgroundColor: "#2B91DB", borderRadius: 2 }}>
          <MaterialIcons name="check" color="white" size={15} />
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#4A4A4A", marginLeft: 10 }}>Agree with</Text>
        <Text style={{ fontSize: 16, fontWeight: "900", color: "#4A4A4A", marginLeft: 5, color: "#2B91DB" }}>Terms & Conditions</Text>
      </View>


      <TouchableOpacity  onPress={handleSignUp} style={{ width: wp("90%"), height: hp("7%"), backgroundColor: "#2B91DB", alignSelf: "center", borderRadius: 12, marginTop: hp("4%") }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", alignSelf: "center", color: "#FFF", marginTop: hp("2%") }}>Register</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: hp("2%"), alignSelf: "center" }}>
        <Text style={{ fontSize: 13, fontWeight: "600", color: "#4A4A4A" }}>Don’t have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "#2B91DB", marginLeft: wp("1.5%"), textDecorationLine: "underline" }}>Login</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flexDirection: "row", marginTop: hp("3%"), alignSelf: "center" }}>
        <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
        <Text style={{ fontSize: 13, fontWeight: "600", color: "#4A4A4A", marginHorizontal: 8 }}>
          Or Sign in with google or apple
        </Text>
        <View style={{ width: "12%", height: "3%", backgroundColor: "#DADADA", marginTop: hp("1%") }} />
      </View>


      <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>

        <View style={{ width: wp("40%"), height: hp("5%"), borderWidth: 1, borderColor: "#DADADA", borderRadius: 12, left: wp("7%") }}>
          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
            <Image source={apple} style={{ width: 15, height: 15, borderRadius: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Apple</Text>
          </View>
        </View>

        {/* <TouchableOpacity onPress={() => { signIn(); }} style={{ width: wp("40%"), height: hp ("5%"), borderWidth: 1, borderColor: "#DADADA",borderRadius: 12,right:wp("7%") }}>
              <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                <Image source={google} style={{ width: 15, height: 15, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Google</Text>
              </View>
            </TouchableOpacity> */}
           <View style={{ flex: 1, justifyContent: "center", alignItems: "center",left:wp("10%") }}>
            {!user.idToken ?

              <TouchableOpacity onPress={() => { signIn(); }} style={{ width: wp("40%"), height: hp("5%"), borderWidth: 1, borderColor: "#DADADA", borderRadius: 12, right: wp("7%") }}>
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: hp("1%") }}>
                  <Image source={google} style={{ width: 15, height: 15, borderRadius: 10 }} />
                  <Text style={{ fontSize: 14, fontWeight: "900", marginLeft: 10, color: "#000" }}>Google</Text>
                </View>
              </TouchableOpacity> 
              
              :

              <TouchableOpacity onPress={signOut}>
                <Text>SignOut</Text>
              </TouchableOpacity>
            }
            </View>
        </View>

      <View style={{ alignSelf: "center", top: hp("3%") }}>
        <Text style={{ fontSize: 12, fontWeight: "900", color: "#C2C2C2", marginLeft: 50 }}>By Continuing, you agree to our </Text>
        <Text style={{ fontSize: 12, color: "#C2C2C2", marginTop: 1 }}>
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
  )
}
export default SignupScreen



