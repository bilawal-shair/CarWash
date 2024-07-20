import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import arrow2 from "../assets/arrow2.png"
import { useNavigation } from '@react-navigation/native'
import Rectangle from "../assets/Rectangle.png"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import location from "../assets/location.png"
import time from "../assets/time.png"
import Minut from "../assets/Minut.png"
import Star from "../assets/Star.png"
import Km from "../assets/Km.svg"
import Time from "../assets/Time.svg"
import Rectang from "../assets/Rectang.svg"
import SelectArrow from "../assets/SelectArrow.svg"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';


const PopularServiceStation = () => {

    const navigation = useNavigation();
    const [serviceStations, setServiceStations] = useState([]);

    // const [starRating, setStarRating] = useState(0);
    // const handleStarPress = (rating) => {
    //     setStarRating(rating);
    // };

    useEffect(() => {
        // Function to fetch service stations from Firestore
        const fetchServiceStations = async () => {
            try {
                const snapshot = await firestore().collection('serviceStations').get();
                const stations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setServiceStations(stations);
            } catch (error) {
                console.error('Error fetching service stations: ', error);
            }
        };

        fetchServiceStations(); // Call the fetchServiceStations function when component mounts
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() =>navigation.navigate("service", { stationName: item.name })} style={{
            alignSelf: "center", flexDirection: 'row',
            width: wp("95%"), height: hp("25%"), backgroundColor: '#FFF',
            marginTop: hp("1.5%"), borderRadius: 9, elevation: 5, shadowColor: "gray"
        }}>
            <View style={{ top: hp("1.5%"), left: wp("1.5%") }}>
                <Image source={{ uri: item.imageUrl }} style={{ width: wp("40%"), height: hp("22%"), borderRadius: 9 }} />
            </View>
            <View>
                <View style={{ flexDirection: 'row', marginTop: hp("1.5%") }}>

                    <View style = {{width:wp("46%"),height:hp("5%"),left:wp("2%")}}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', left: wp("3%") }} >
                        {item.name}
                    </Text>

                    </View>
                   
                    <View style={{ left: wp("4%") }}>
                        <Rectang  />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginLeft: wp("5%"), alignItems: 'center' }}>
                    <Text style={{ fontSize: 10, fontWeight: '900', color: 'black' }}>Rating:</Text>
                    <Image source={Star} style={{ width: 51, height: 9, marginLeft: wp("1%"), marginRight: wp("1%") }} />
                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginLeft: 6, marginTop: 2 }}>4.5</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Image source={location} style={{ width: 13, height: 15, borderRadius: 10, marginLeft: wp("5%") }} />
                    <Text style={{ fontSize: 10, fontWeight: '700', color: '#242424', marginLeft: wp("1%") }}>{item.location}</Text>
                </View>
                <Text style={{ fontSize: 8, fontWeight: '500', color: '#82828B', marginLeft: wp("4%"), marginTop: hp("1%") }}>
                    <Text>{item.description.split('. ').slice(0, 3).join('.\n')}</Text>
                </Text>

                <View style={{ flexDirection: 'row', marginTop: hp("4%") }}>
                    <View style={{ flexDirection: 'row', left: wp("4%") }}>
                        <Km />
                        {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: 18 }} /> */}
                        <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                            {item.distance}
                        </Text>
                        <Time style={{ left: wp("1%") }} />
                        {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: 18 }} /> */}
                        <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', left: wp("2%") }}>
                            {item.duration}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("service", { stationName: item.name })} style={{ flexDirection: 'row', width: wp("20%"), height: ("130%"), backgroundColor: '#2B91DB', borderRadius: 12, left: wp("7%") }}>
                        <Text style={{ marginLeft: wp("1%"), fontSize: 9, fontWeight: '500', color: '#FFF', marginTop: hp("0.4%") }}>More Details</Text>
                        <FontAwesome6 style={{ marginTop: hp("0.6%"), left: wp("2%") }} name="arrow-right-long" color={'#FFF'} size={10} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', marginBottom: hp("3%") }}>
            <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("6%") }}>
                <TouchableOpacity onPress={() => navigation.navigate('home')} style={{ marginLeft: wp("5%"), width: wp("7%"), height: hp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
                    <SelectArrow style={{ alignSelf: "center", top: hp("1%") }} size={30} />
                </TouchableOpacity>
                <View style={{ paddingRight: wp("19%") }}>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>Recommended  Stations</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: '90%', marginTop: hp("1%") }}>
                <FlatList
                   data={serviceStations}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default PopularServiceStation