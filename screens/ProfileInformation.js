import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import arrow2 from "../assets/arrow2.png"
import Profile1 from "../assets/Profile1.png"
import EditName from "../assets/EditName.png"
import Email from "../assets/Email.png"
import EditNumber from "../assets/EditNumber.png"
import SelectArrow from "../assets/SelectArrow.svg"
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ProfileInformation = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        // Set initial state based on route params
        const { profile: routeProfile, name: routeName, email: routeEmail, phoneNumber: routePhoneNumber } = route.params || {};
        setProfile(routeProfile || null);
        setName(routeName || '');
        setEmail(routeEmail || '');
        setPhoneNumber(routePhoneNumber || '');
    }, [route.params]);

    const openImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true,
            });
            setProfile(image.path);
        } catch (error) {
            console.error('Error picking image', error);
        }
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setCountryPickerVisible(false);
    };

    const toggleCountryPicker = () => {
        setCountryPickerVisible(!isCountryPickerVisible);
    };

    const saveProfile = () => {
        // Save the data and navigate back to EditProfile screen
        navigation.navigate('Profile', {
            profile,
            name,
        });
    };
  

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style = {{width:"98%",height:"100%",alignSelf:"center"}}>
            <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("6%") }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ width: wp("7%"), height: hp("4%"), marginLeft: wp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
                    <SelectArrow style = {{alignSelf:"center",top:7}} size= {30}/>
                </TouchableOpacity>
                <View style={{  marginRight: wp("35%")}}>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>My Profile</Text>
                </View>
            </View>

            <TouchableOpacity onPress={openImagePicker} style={{ width: wp("20%"), height: hp("10%"), borderRadius: 96, borderWidth: 2, alignSelf: "center", borderColor: "rgba(0, 0, 0, 0.25), 0px 0px 6px 0px", marginTop: hp("2.5%") }}>
                <Image source={profile ? { uri: profile }:{ uri: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{width: wp("20%"), height: hp("10%"), borderRadius: 94 }} />
            </TouchableOpacity>
            <View style={{ position: "absolute", alignSelf: "center", top: hp("18%") }}>
                <Image source={Profile1} style={{ width: wp("6%"), height: hp("3%"), left: wp("8%")  }} />
            </View>

            <View style={{ width: wp("98%"), height: hp("100%"), alignSelf: "center", marginTop: hp("3%") }}>

                <Text style={{ fontSize: 13, fontWeight: "600", color: "#C2C2C2", marginLeft: wp("5%") }}>Your Name</Text>

                <View style={{width: wp("90%"), height: hp("7%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12,  flexDirection: "row", justifyContent: "space-between",  alignSelf: "center", marginTop: hp("1%") }}>
                   
                        <TextInput
                         style = {{paddingLeft:wp("2%"),top:hp("0.5%"),width: wp("40%"), height: hp("6%")}}
                         placeholder='Bilawal Shair'
                         value={name}
                         onChangeText={(text) => setName(text)}
                        />
                        {/* <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 20, color: "#838383" }}>Bilawal Shair</Text> */}
                        <View style = {{top:hp("2%"),right:wp("3%")}}>
                            <Image source={EditName} style={{ width: 20, height: 18}} />
                        </View>
                </View> 
                <Text style={{ fontSize: 13, fontWeight: "600", color: "#C2C2C2", marginLeft: wp("5%"), marginTop: hp("2%") }}>Your Email</Text>

                <View style={{flexDirection: "row", marginTop: hp("1%"), justifyContent: "space-between",width: wp("90%"), height: hp("7%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12,  flexDirection: "row", justifyContent: "space-between",  alignSelf: "center",  marginTop: hp("1%") }}>
                   
                        {/* <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 20, color: "#838383" }}>theskofficial1@gmail.com</Text> */}
                        <TextInput
                         style = {{paddingLeft:wp("2%"),top:hp("0.5%"),width: wp("45%"), height: hp("6%")}}
                         placeholder='theskofficial1@gmail.com'
                         value={email}
                         onChangeText={(text) => setEmail(text)}
                        />
                        <View style = {{top:hp("2%"),right:wp("3%")}}>
                            <Image source={Email} style={{ width: 20, height: 18 }} />
                        </View>
                   
                </View>
                
                <Text style={{ fontSize: 13, fontWeight: "600", color: "#C2C2C2",marginLeft: wp("5%"), marginTop: hp("2%")  }}>Phone Number</Text>

                <View style={{flexDirection: "row",marginTop: hp("1%"), justifyContent: "space-between",width: wp("90%"), height: hp("7%"), borderWidth: 0.5, borderColor: "#C2C2C2", borderRadius: 12,  flexDirection: "row", justifyContent: "space-between",  alignSelf: "center",  marginTop: hp("1%") }}>
                   
                   {/* <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 20, color: "#838383" }}>theskofficial1@gmail.com</Text> */}
                   <TextInput
                    style = {{paddingLeft:wp("2%"),top:hp("0.5%"),width: wp("40%"), height: hp("6%")}}
                    placeholder='+92 3044234012'
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                   />
                   <View style = {{top:hp("2%"),right:wp("3%")}}>
                       <Image source={EditNumber} style={{ width: 20, height: 18 }} />
                   </View>
              
                </View>
                 <TouchableOpacity onPress={saveProfile} style={{ position: "absolute", width: wp("90%"), height: hp("8%"),backgroundColor: "#2B91DB", borderRadius: 12, alignSelf: "center",top:hp("62%") }}>
                        <Text style={{ fontSize: 16, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: hp("2.5%") }}>UPDATE</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

export default ProfileInformation;
