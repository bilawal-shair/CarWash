import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Vibration, View, Image, Text, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Km from "../assets/Km.svg"
import Time from "../assets/Time.svg"
import Star from "../assets/Star.png"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "../assets/icon.svg"
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 37.3317876,
      longitude: -122.0054812,
    },
    {
      latitude: 37.771707,
      longitude: -122.4053769,
    },
  ]);

  const mapView = useRef(null);

  const onMapPress = (e) => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={mapView}
        onPress={onMapPress}
      >
        {coordinates.map((coordinate, index) => (
          <Marker key={`coordinate_${index}`} coordinate={coordinate} />
        ))}
        {coordinates.length >= 2 && (
          <MapViewDirections
            origin={coordinates[0]}
            waypoints={coordinates.length > 2 ? coordinates.slice(1, -1) : undefined}
            destination={coordinates[coordinates.length - 1]}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);

              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
     
      <View style={{  position: 'absolute',width: "100%", height: hp("21%"), bottom: hp("2%"), top: hp("75%") }}>
            <ScrollView horizontal >
              {/* Image 1 */}
              <TouchableOpacity onPress={() => navigation.navigate("popularServiceStation")} style={{ elevation: 2, paddingTop: 10, position: "relative", backgroundColor: "#FFF", borderRadius: 12, marginBottom: hp("2.5%"), marginHorizontal: wp("1%") }}>
                <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ bottom: hp("1%"), width: wp("40%"), height: hp("13%"), borderRadius: 12, marginHorizontal: wp("1%") }} />

                {/* Common components on top of Image 1 */}
                <View style={{ position: "absolute", top: hp("1%"), left: wp("34%"), alignItems: "center" }}>
                  <Icon/>
               </View>
                <View style={{ position: "absolute", top: hp("11%"), left: 20, flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF" }}>Rating:</Text>
                  <Image source={Star} style={{ width: 45, height: 8 }} />
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF", marginLeft: 6, marginTop: 2 }}>4.5</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: "900", color: "black",  bottom: hp("0.5%") ,left:wp("5%")}}>Rahim chacha car wash</Text>
                <View style={{ flexDirection: 'row', left: wp("5%") }}>
                  <Km />
                  {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', marginLeft: wp("1%") }}>
                    0.5 km
                  </Text>
                  <Time style={{ left: wp("1%")}} />
                  {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', left: wp("2%")}}>
                    0.3 minuts
                  </Text>
                </View>

              </TouchableOpacity>
              {/* Repeat the above structure for Image 2 and Image 3 */}
              {/* Image 2 */}

              <TouchableOpacity onPress={() => navigation.navigate("popularServiceStation")} style={{ elevation: 2, paddingTop: 10, position: "relative", backgroundColor: "#FFF", borderRadius: 12, marginBottom: hp("2.5%"), marginHorizontal: wp("1%") }}>
                <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ bottom: hp("1%"), width: wp("40%"), height: hp("13%"), borderRadius: 12, marginHorizontal: wp("1%") }} />

                {/* Common components on top of Image 1 */}
                <View style={{ position: "absolute", top: hp("1%"), left: wp("34%"), alignItems: "center" }}>
                  <Icon/>
               </View>
                <View style={{ position: "absolute", top: hp("11%"), left: 20, flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF" }}>Rating:</Text>
                  <Image source={Star} style={{ width: 45, height: 8 }} />
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF", marginLeft: 6, marginTop: 2 }}>4.5</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: "900", color: "black",  bottom: hp("0.5%") ,left:wp("5%")}}>Rahim chacha car wash</Text>
                <View style={{ flexDirection: 'row', left: wp("5%") }}>
                  <Km />
                  {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', marginLeft: wp("1%") }}>
                    0.5 km
                  </Text>
                  <Time style={{ left: wp("1%")}} />
                  {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', left: wp("2%")}}>
                    0.3 minuts
                  </Text>
                </View>

              </TouchableOpacity>

              {/* Image 3 */}
              <TouchableOpacity onPress={() => navigation.navigate("popularServiceStation")} style={{ elevation: 2, paddingTop: 10, position: "relative", backgroundColor: "#FFF", borderRadius: 12, marginBottom: hp("2.5%"), marginHorizontal: wp("1%") }}>
                <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ bottom: hp("1%"), width: wp("40%"), height: hp("13%"), borderRadius: 12, marginHorizontal: wp("1%") }} />

                {/* Common components on top of Image 1 */}
                <View style={{ position: "absolute", top: hp("1%"), left: wp("34%"), alignItems: "center" }}>
                  <Icon/>
               </View>
                <View style={{ position: "absolute", top: hp("11%"), left: 20, flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF" }}>Rating:</Text>
                  <Image source={Star} style={{ width: 45, height: 8 }} />
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#FFF", marginLeft: 6, marginTop: 2 }}>4.5</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: "900", color: "black",  bottom: hp("0.5%") ,left:wp("5%")}}>Rahim chacha car wash</Text>
                <View style={{ flexDirection: 'row', left: wp("5%") }}>
                  <Km />
                  {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', marginLeft: wp("1%") }}>
                    0.5 km
                  </Text>
                  <Time style={{ left: wp("1%")}} />
                  {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: 18 }} /> */}
                  <Text style={{ fontSize: 9, fontWeight: '600', color: '#242424', left: wp("2%")}}>
                    0.3 minuts
                  </Text>
                </View>

              </TouchableOpacity>
            </ScrollView>
      </View>
    
      </View>
      
  );
};

export default ExploreScreen;
