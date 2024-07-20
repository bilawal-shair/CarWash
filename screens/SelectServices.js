import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Exterior from "../assets/Exterior.png";
import Interior from "../assets/Interior.png";
import Polishing from "../assets/Polishing.png";
import Tire from "../assets/Tire.png";
import SelectArrow from "../assets/SelectArrow.svg";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';

const SelectServices = ({ navigation }) => {
    const [selectedViews, setSelectedViews] = useState("Exterior");
    const [services, setServices] = useState([]);

    const handleSelectView = (view) => {
        if (selectedViews.includes(view)) {
            setSelectedViews(selectedViews.filter(item => item !== view));
        } else {
            setSelectedViews([...selectedViews, view]);
        }
    };

    useEffect(() => {
        const addDummyDataToFirestore = async () => {
            try {
                const servicesCollection = firestore().collection('manyServices');
    
                await servicesCollection.doc('Exterior').set({
                    name: 'Exterior Washing',
                    image: Exterior,
                });
                await servicesCollection.doc('Interior').set({
                    name: 'Interior Cleaning',
                    image: Interior,
                });
                await servicesCollection.doc('Polishing').set({
                    name: 'Waxing and Polishing',
                    image: Polishing,
                });
                await servicesCollection.doc('Tire').set({
                    name: 'Tire and Wheel Cleaning',
                    image: Tire,
                });
    
                console.log('Dummy data added to Firestore successfully');
            } catch (error) {
                console.error('Error adding dummy data to Firestore: ', error);
            }
        };
    
        addDummyDataToFirestore();
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicesSnapshot = await firestore().collection('manyServices').get();
                const servicesData = servicesSnapshot.docs.map(doc => doc.data());
                setServices(servicesData);
            } catch (error) {
                console.error('Error fetching services from Firestore: ', error);
            }
        };

        fetchServices();
    }, []);

    const handleNextButton = () => {
        navigation.navigate("confirm");
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ width: "98%", height: "100%", alignSelf: "center"}}>
                <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("5%") }}>
                    <TouchableOpacity onPress={() =>navigation.navigate("service")} style={{ marginLeft: wp("8%"), width: wp("7%"), height: hp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
                        <SelectArrow style={{ alignSelf: "center", top: hp("1%") }} size={30} />
                    </TouchableOpacity>
                    <View style={{ paddingRight: wp("27%") }}>
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>Select Services</Text>
                    </View>
                </View>

                <View style={{ marginTop: hp("4%"),height: "70%", }}>
                    {services.map((service, index) => (
                        <TouchableOpacity key={index} onPress={() => handleSelectView(service.name)} style={{ borderRadius: 12, elevation: 3, flexDirection: "row", width: wp("96%"), height: hp("8%"), borderColor: selectedViews.includes(service.name) ? '#2B91DB' : '#FBFBFB', alignSelf: "center", marginTop: index !== 0 ? hp("2.5%") : 0, borderWidth: 1, backgroundColor: "#FBFBFB" }}>
                            <View style={{ alignSelf:"center", width: wp("12%"), height: hp("6%"), backgroundColor: "#EAF4FB", marginLeft: wp("4%"), borderRadius: 7 }}>
                                <Image source={service.image} style={{ width: 24, height: 22, alignSelf: "center", marginTop: hp("1.5%") }} />
                            </View>
                            <View style={{ width: 1.5, height: 40, backgroundColor: selectedViews.includes(service.name) ? '#2B91DB' : '#D6D6D6', alignSelf: "center", marginLeft: wp("2%") }}></View>
                            <Text style={{ fontSize: 16, fontWeight: selectedViews.includes(service.name) ? "900" : "600", color: '#2B91DB', marginTop: hp("2%"), marginLeft: wp("4%") }}>{service.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity onPress={handleNextButton} style={{ width: wp("95%"), height: hp("8%"),alignSelf:"center", backgroundColor: "#2B91DB", borderRadius: 12, top:hp("5%"), }}>
                    <Text style={{ fontSize: 16, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: 20 }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SelectServices;
