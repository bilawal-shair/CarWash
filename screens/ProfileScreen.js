import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import arrow2 from "../assets/arrow2.png"
import Profile1 from "../assets/Profile1.png"
import Personal from "../assets/Personal.png"
import Arrow3 from "../assets/Arrow3.png"
import Address from "../assets/Address.png"
import Password from "../assets/Password.png"
import Setting from "../assets/Setting.png"
import Privacy from "../assets/Privacy.png"
import SelectArrow from "../assets/SelectArrow.svg"
import ProfileArrow from "../assets/ProfileArrow.svg"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth'; // Import Firebase auth module

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth().signOut();

      // Navigate to the choose screen after logout
      navigation.navigate('splash'); // Replace 'ChooseScreen' with the name of your choose screen
    } catch (error) {
      console.error('Error signing out: ', error);
      // Handle error
    }
  };

  // Retrieve params
  const { profile, name } = route.params || {};

  const [currentProfileData, setCurrentProfileData] = useState({
    profile: profile || null,
    name: name || '',

  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // When the screen is focused, update the state with the latest profile data
      setCurrentProfileData({
        profile: profile || null,
        name: name || '',

      });
    });

    // Clean up the listener when the component is unmounted
    return unsubscribe;
  }, [navigation, profile, name]);

  return (
    // <View style={{ flex: 1, backgroundColor: '#990000' }}>
    //   <View style={{ width: '100%', height: 230, backgroundColor: 'white', alignSelf: 'center',borderBottomLeftRadius:10,borderBottomRightRadius:10 }}>
    //     <View style={{ flexDirection: 'row', marginTop: 40 }}>
    //       <TouchableOpacity onPress={() => navigation.navigate('home')} style={{ marginLeft: 20 }}>
    //         <MaterialIcons name="keyboard-arrow-left" color="black" size={35} />
    //       </TouchableOpacity>
    //       <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: 'black', marginLeft: 80 }}>
    //         Profile Details
    //       </Text>
    //       <TouchableOpacity onPress={() => navigation.navigate('editProfile')} style={{ marginLeft: 88,marginTop:5 }}>
    //         <FontAwesome name="pencil" color="black" size={23
    //         } />
    //       </TouchableOpacity>
    //     </View>
    //     <TouchableOpacity style={{ alignSelf: 'center', marginTop: 25 }}>
    //       <Image
    //         source={
    //           currentProfileData.profile
    //             ? { uri: currentProfileData.profile }
    //             : {
    //                 uri:
    //                   'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=sph',
    //               }
    //         }
    //         style={{ width: 100, height: 100, borderRadius: 50 }}
    //       />
    //     </TouchableOpacity>
    //   </View>

    //   <View style={{ width: 415, height: 100, backgroundColor: 'white', alignSelf: 'center', marginTop: 10,borderRadius:10 }}>
    //     <View style={{ marginTop: 28 }}>
    //       <View style={{ marginLeft: 60, flexDirection: 'row' }}>
    //         <FontAwesome5 name="user" color="black" size={20} />
    //         <Text style={{ marginLeft: 20,fontSize:15,fontWeight:"bold",color:"black" }}>Name</Text>
    //       </View>
    //     </View>

    //     <View style={{ marginLeft: 90, marginTop: 15 }}>
    //       <Text style = {{fontSize:13,fontWeight:"bold",color:"black"}}>{currentProfileData.name}</Text>
    //     </View>
    //   </View>

    //   <View style={{borderRadius:10, width: 415, height: 100, backgroundColor: 'white', alignSelf: 'center', marginTop: 10 }}>
    //     <View style={{ marginTop: 28 }}>
    //       <View style={{ marginLeft: 60, flexDirection: 'row' }}>
    //         <Fontisto name="email" color="black" size={20} />
    //         <Text style={{marginLeft: 20,fontSize:15,fontWeight:"bold",color:"black"}}>Email</Text>
    //       </View>
    //     </View>

    //     <View style={{ marginLeft: 90, marginTop: 15 }}>
    //       <Text style = {{fontSize:13,fontWeight:"bold",color:"black"}} >{currentProfileData.email}</Text>
    //     </View>
    //   </View>

    //   <View style={{ borderRadius:10, width: 415, height: 100, backgroundColor: 'white', alignSelf: 'center', marginTop: 10 }}>
    //     <View style={{ marginTop: 28 }}>
    //       <View style={{ marginLeft: 60, flexDirection: 'row' }}>
    //         <Ionicons name="call-outline" color="black" size={20} />
    //         <Text  style={{marginLeft: 20,fontSize:15,fontWeight:"bold",color:"black"}}>Phone Number</Text>
    //       </View>
    //     </View>

    //     <View style={{ marginLeft: 90, marginTop: 15 }}>
    //       <Text style = {{fontSize:13,fontWeight:"bold",color:"black"}}>{currentProfileData.phoneNumber}</Text>
    //     </View>

    //   </View>
    // </View>
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ width: "98%", height: "100%", alignSelf: "center" }}>
        <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("6%") }}>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={{ width: wp("7%"), height: hp("4%"), marginLeft: wp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
            <SelectArrow style={{ alignSelf: "center", top: hp("1%") }} size={30} />
          </TouchableOpacity>
          <View style={{ marginRight: wp("35%") }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>My Profile</Text>
          </View>
        </View>

        <TouchableOpacity style={{ width: wp("20%"), height: hp("10%"), borderRadius: 96, borderWidth: 2, alignSelf: "center", borderColor: "rgba(0, 0, 0, 0.25), 0px 0px 6px 0px", marginTop: hp("2.5%") }}>
          <Image source={
            currentProfileData.profile
              ? { uri: currentProfileData.profile }
              : {
                uri:
                  'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais',
              }
          } style={{ width: wp("20%"), height: hp("10%"), borderRadius: 94 }} />
        </TouchableOpacity>
        <View style={{ position: "absolute", alignSelf: "center", top: hp("18%") }}>
          <Image source={Profile1} style={{ width: wp("6%"), height: hp("3%"), left: wp("8%") }} />
        </View>

        <View style={{ marginTop: hp("1%") }}>
          <Text style={{ fontSize: 17, fontWeight: "900", color: "#242424", alignSelf: "center" }}>{currentProfileData.name}</Text>
        </View>
        <View style={{ width: wp("100%"), height: hp("100%"), alignSelf: "center" }}>

          <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} style={{ width: wp("90%"), height: hp("8%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12, alignSelf: "center", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
                <Image source={Personal} style={{ width: 20, height: 20, marginLeft: wp("4%"),top:("2%") }} />
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#2B91DB", left: wp("8%"),top:("2%") }}>Personal Information</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} >
                <ProfileArrow style={{ right: wp("4%"),top: hp("0.5%") }}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: wp("90%"), height: hp("8%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12, alignSelf: "center", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
              <Image source={Address} style={{ width: 20, height: 22,  marginLeft: wp("4%"),top:("2%") }} />
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#2B91DB", left: wp("8%"),top:("2%") }}>Manage Address</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} >
                <ProfileArrow style={{ right: wp("4%"),top: hp("0.5%") }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={{ width: wp("90%"), height: hp("8%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12, alignSelf: "center", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
              <Image source={Password} style={{ width: 20, height: 25, marginLeft: wp("4%"),top:("2%") }} />
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#2B91DB", left: wp("8%"),top:("2%") }}>Password</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} >
                <ProfileArrow style={{ right: wp("4%"),top: hp("0.5%") }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={{ width: wp("90%"), height: hp("8%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12, alignSelf: "center", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
              <Image source={Setting} style={{ width: 22, height: 20, marginLeft: wp("4%"),top:("2%") }}/>
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#2B91DB", left: wp("8%") }}>Settings</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} >
                <ProfileArrow style={{ right: wp("4%"),top: hp("0.5%") }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={{ width: wp("90%"), height: hp("8%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12, alignSelf: "center", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "row", marginTop: hp("2%"), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
              <Image source={Privacy} style={{ width: 20, height: 20,  marginLeft: wp("4%"),top:("2%") }} />
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#2B91DB", left: wp("8%") }}>Privacy Policy</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfileInfo")} >
                <ProfileArrow style={{ right: wp("4%"),top: hp("0.5%") }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style = {{alignSelf:"center",top:hp("6%")}}>
            <Text style = {{fontSize:15,fontWeight:"900",color:"black"}}>Logout</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

export default ProfileScreen;
