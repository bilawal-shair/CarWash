import { View, Text, Image, TextInput, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity, Alert, AppState, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Group1 from "../assets/Group1.png"
import Star from "../assets/Star.png"
import Group2 from "../assets/Group2.png"
import Grr from "../assets/Grr.svg"
import Notification from "../assets/Notification.svg"
import NotificationBack from "../assets/NotificationBack.svg"
import Arrow1 from "../assets/Arrow1.svg"
import Location from "../assets/location.svg"
import Rectangle from "../assets/Rectangle.png"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore  from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; 
// import { useIsFocused } from '@react-navigation/native';
import Km from "../assets/Km.svg"
import Time from "../assets/Time.svg"
import Icon from "../assets/icon.svg"

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused("");
  const [activeIndex, setActiveIndex] = useState(1);
  const [starRating, setStarRating] = useState(0);
  const [selectedItem, setSelectedItem] = useState("ServicesStation");
  
  const [serviceStations, setServiceStations] = useState([]);
  const [isAppInBackground, setIsAppInBackground] = useState(false);

   const addServiceStation = async (name, rating, distance, duration, imageUrl, description,location) => {
    try {
      const currentUser = auth().currentUser;

      if (!currentUser) {
        console.error("No user logged in.");
        return;
      }
      // Check if a service station with the same name exists
      const existingStation = await firestore().collection('serviceStations').where('name', '==', name).get();
      if (!existingStation.empty) {
        console.log(`Service station "${name}" already exists. Skipping addition.`);
        return;
      }
  
      // If the service station does not exist, add it to Firestore
      await firestore().collection('serviceStations').add({

        name: name,
        rating: rating,
        distance: distance,
        duration: duration,
        imageUrl: imageUrl,
        description: description,
        location:location,
        userId: currentUser.uid, // Include the user UID

      });

      console.log('Service station added successfully!');
    } catch (error) {
      console.error('Error adding service station: ', error);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {

      try {
          // Simulate a delay of 1 second before fetching data
      await new Promise(resolve => setTimeout(resolve, 1000));
        // Fetch service stations from Firestore
        const snapshot = await firestore().collection('serviceStations').limit(3).get();
        const stations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setServiceStations(stations);
      } catch (error) {
        console.error('Error fetching service stations: ', error);
      }

    };

    // Call addServiceStation for each service station
    addServiceStation(
      "Rahim chacha car wash",
      4.5,
      0.5,
      0.3,
      "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
      "Customer description  is the dummy text. Customer description. lorem ipsum...",
      'Chaklala Can’tt, Rawalpindi'
     );
    addServiceStation(
      "Ramo kaka car wash",
      4.5,
      0.5,
      0.3,
      "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
      "Customer description  is the dummy text. Customer description. lorem ipsum...",
      'Chaklala Can’tt, Rawalpindi'
    );
    addServiceStation(
      "Ijaz chacha car wash",
      4.5,
      0.5,
      0.3,
      "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
      "Customer description  is the dummy text. Customer description. lorem ipsum...",
      'Chaklala Can’tt, Rawalpindi'
     
      
    );
    addServiceStation(
      "Noman car wash",
      4.5,
      0.5,
      0.3,
      "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
      "Customer description  is the dummy text. Customer description. lorem ipsum...",
      'Chaklala Can’tt, Rawalpindi'
    );

    fetchData();
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
      return true;
    };

    const backHandler = isFocused && BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler && backHandler.remove();
  }, [isFocused]);

  const handleSelectItem = async (item) => {
    try {
          setSelectedItem(item === selectedItem ? null : item);
      // Add the selected service to Firestore
      try {
        await firestore().collection("services").add({
          service: item,
          timestamp: firestore.FieldValue.serverTimestamp()
        });
        console.log("Selected service added to Firestore successfully");
      } catch (error) {
        console.error("Error adding selected service to Firestore: ", error);
      }
       // Navigate to the service screen and pass the selected service station's name as a parameter
      
    } catch (error) {
      console.error("Error retrieving current user:", error);
    }
  };

  const handleStarPress = (rating) => {
    setStarRating(rating);
  };

  const images = [
    "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
    "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais",
    "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais"
  ];

  const handleScroll = (event) => {
    const slideWidth = Dimensions.get('window').width;
    const offset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offset / slideWidth); // Round to the nearest index
    setActiveIndex(currentIndex);
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>

      <View style={{ width: "100%", height: "100%" }}>

        <View style={{ width: wp("100%"), height: hp("32%"), backgroundColor: "#2B91DB", borderBottomLeftRadius: wp("8%"), borderBottomRightRadius: wp("8%") }}>
          <View style={{ flexDirection: "row", marginTop: hp("7%"), justifyContent: "space-between" }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#FFF", paddingLeft: wp("8%") }}>Location</Text>
            <TouchableOpacity>
              <NotificationBack style={{ right: wp("8%") }} size={hp("4%")} />
              <View style={{ position: 'absolute', right: wp("10%"), top: hp("1%") }}>
                <Notification size={hp("4%")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
            <Location style={{ marginLeft: wp("8%"), marginTop: hp("1%") }} size={30} />
            <Text style={{ fontSize: 21, fontWeight: "900", color: "#FFF", marginLeft: wp("2%") }}>Chaklala Cantt, RWL</Text>
            <MaterialIcons style={{ marginTop: hp("0.2%") }} name="keyboard-arrow-down" color="#FFF" size={hp("4%")} />
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("4%"), alignSelf: "center" }}>
            <View style={{ width: wp("70%"), flexDirection: 'row', alignItems: 'center', backgroundColor: "#FFF", borderRadius: 12 }}>
              <Feather name="search" color="#2B91DB" size={23} style={{ marginLeft: wp("4%") }} />
              <TextInput
                style={{ flex: 1, height: hp("6%"), paddingLeft: wp("1%") }} // Adjusted paddingLeft to provide space after the icon
                placeholder='Search'
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={{ width: hp("6%"), height: hp("6%"), backgroundColor: "#FFF", borderRadius: 12, marginLeft: wp("2%") }}>
              <Grr color="blue" style={{ alignSelf: "center", marginTop: hp("1.8%") }} />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: hp("1.5%"), justifyContent: "space-between", right: wp("3%") }}>
          <Text style={{ paddingLeft: ("8%"), fontWeight: "900", fontSize: 16, color: "#242424" }}>SPECIAL FOR YOU</Text>
          <View style={{ flexDirection: "row", width: ("14%"), height: ("2.5"), backgroundColor: "#2B91DB", borderRadius: 12, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 9, fontWeight: "bold", color: "#FFF", top: hp("0.5%"), left: wp("1%") }}>See all</Text>
            <Arrow1 style={{ top: hp("0.7%"), right: wp("1%") }} color="black" size={30} />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator >
          <View style={{ width: "100%", height: hp("25%"), marginTop: hp("0.5%") }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
            >
              {images.map((uri, index) => (
                <View
                  key={index}
                  style={[styles.slide, { marginLeft: index === 0 ? wp("2%") : 0}]}
                >
                  <Image
                    source={{ uri }}
                    style={styles.image}
                  />
                  <View style={{ flexDirection: "row", position: "absolute" }}>
                    <View>
                      <Text style={{ fontFamily: 'Rockybilly', top: hp("2.5%"), left: wp("7%"), fontSize: wp("4%"), fontWeight: "900", color: "#FFF" }}>Car Wash Package</Text>
                    </View>
                    <View style={{ left: wp("10%"), top: hp("3%") }}>
                      <Text style={{ fontSize: 12, fontWeight: "700", color: "#FFF" }}>2 Premium Wash</Text>
                      <Text style={{ fontSize: 12, fontWeight: "700", color: "#FFF", top: 3 }}>3 Simple Wash</Text>
                    </View>
                  </View>

                  <View style={{ borderRadius: 10, width: wp("28%"), height: hp("4%"), borderWidth: 1, borderColor: "#FFF", position: "absolute", marginLeft: wp("6%"), margin: hp("8%") }}>
                    <Text style={{ fontSize: 9, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: hp("1%") }}>05 Wash Per Month</Text>
                  </View>

                  <View style={{ position: "absolute", flexDirection: "row", marginTop: hp("14%") }}>
                    <View style={{ flexDirection: "row", marginLeft: wp("8%") }}>
                      <Text style={{ fontSize: 18, fontWeight: "900", color: "#FFF" }}>Rs:</Text>
                      <Text style={{ fontSize: 18, fontWeight: "900", color: "#FFF", marginLeft: 10 }}>4,000</Text>
                    </View>
                    <View style={{ marginHorizontal: wp("15%"), width: wp("26%"), height: hp("4%"), backgroundColor: "#FFF", borderRadius: 8 }}>
                      <Text style={{ fontSize: 15, fontWeight: "900", alignSelf: "center", color: "#00467F", top: hp("0.5%") }}>Avail Now</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.paginationDots}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    { backgroundColor: index === activeIndex ? '#2B91DB' : 'gray' },
                  ]}
                />
              ))}
            </View>

          </View>
          <View style={{ width: "100%", height: hp("20%") }}>
            <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", marginLeft: wp("6%"), marginTop: hp("0.5%") }}>SERVICES</Text>
            <View style={{ flexDirection: "row", top: hp("2%") }}>
              <TouchableOpacity onPress={() => handleSelectItem('ServicesStation')} style={{ borderColor: selectedItem === 'ServicesStation' ? "#2B91DB" : "#DEDEDE", borderWidth: 1.5, width: wp('40%'), height: hp('12%'), marginTop: hp('1.5%'), borderRadius: 29, marginLeft: wp('6%')}}>
                <Image source={Group1} style={{ width: 47, height: 47, alignSelf: "center", marginTop: hp("1%") }} />
                <Text style={{ fontSize: 13, fontWeight: "900", color: selectedItem === 'ServicesStation' ? "#2B91DB" : "#DEDEDE", alignSelf: "center", marginTop: hp('1%') }}>Services Station</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectItem('HomeServices')} style={{ borderColor: selectedItem === 'HomeServices' ? "#2B91DB" : "#DEDEDE", borderWidth: 1.5, width: wp('40%'), height: hp('12%'), marginTop: hp('1.5%'), borderRadius: 29, marginLeft: wp('6%') }}>
                <Image source={Group2} style={{ width: 47, height: 47, alignSelf: "center", marginTop: hp("1%") }} />
                <Text style={{ fontSize: 13, fontWeight: "900", color: selectedItem === 'HomeServices' ? "#2B91DB" : "#DEDEDE", alignSelf: "center", marginTop: hp("1%") }}>Home Services</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("3%"), justifyContent: "space-between" }}>
            <Text style={{ paddingLeft: wp("5%"), fontWeight: "900", fontSize: 16, color: "#242424" }}>Recommended Service Stations</Text>
            <TouchableOpacity onPress={() => navigation.navigate("popularServiceStation")} style={{ flexDirection: "row", width: ("14%"), height: ("2.5"), backgroundColor: "#2B91DB", borderRadius: 12, justifyContent: "space-between", right: wp("3%") }}>
              <Text style={{ fontSize: 9, fontWeight: "bold", color: "#FFF", top: hp("0.5%"), left: wp("1%") }}>See all</Text>
              <Arrow1 style={{ top: hp("0.7%"), right: wp("1%") }} color="black" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: hp("21%"), bottom: hp("2%"), top: hp("2%") }}>
          <ScrollView horizontal>

         {serviceStations.map(station => (
          <TouchableOpacity
          key={station.id}
          // onPress={handleSelectItem}
         
          onPress={() => navigation.navigate("service", { stationName: station.name })}
         
          style={{
            elevation: 2,
            paddingTop: 10,
            position: "relative",
            backgroundColor: "#FFF",
            borderRadius: 12,
            marginBottom: hp("2.5%"),
            marginHorizontal: wp("1%")
          }}
          >
          <Image source={{ uri: station.imageUrl }} style={{ bottom: hp("1%"), width: wp("40%"), height: hp("13%"), borderRadius: 12, marginHorizontal: wp("1%") }} />

          {/* Common components on top of Image 1 */}
          <View style={{ position: "absolute", top: hp("1%"), left: wp("34%"), alignItems: "center" }}>
            {/* Replace Icon with your actual component */}
            <Icon />
          </View>
          <View style={{ position: "absolute", top: hp("11%"), left: 20, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF" }}>Rating</Text>
            <Image source={Star} style={{ width: 45, height: 8 }} />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF", marginLeft: 6, marginTop: 2 }}>{station.rating}</Text>
          </View>
          <Text style={{ fontSize: 10, fontWeight: "900", color: "black", bottom: hp("0.5%"), left: wp("5%") }}>{station.name}</Text>
          <View style={{ flexDirection: 'row', left: wp("5%") }}>
            <Km />
            <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', marginLeft: wp("1%") }}>
              {station.distance}
            </Text>
            <Text style = {{left:wp("1%"),fontSize:9,fontWeight:"900",color:"black"}}>km</Text>
            <Time style={{ left: wp("2%") }} />
            <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', left: wp("3%") }}>
              {station.duration}
            </Text>
            <Text style = {{left:wp("4%"),fontSize:9,fontWeight:"900",color:"black"}}>minutes</Text>
          </View>
        </TouchableOpacity>
         ))}
          </ScrollView>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width - 85,
    height: hp("19%"),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -hp("1%"),
  },
  image: {
    width: Dimensions.get('window').width - 95,
    height: hp("19%"),
    borderRadius: 30,
    marginRight: 5,
    top: hp("1%")

  },
  paginationDots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: wp("1%"),
    marginTop: hp("1%"),
    backgroundColor: '#2B91DB',  // Set the default color for dots
  },
});



