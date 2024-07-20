import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import VideoPlayer from "react-native-video-player"
import BackArrow from "../assets/BackArrow.png"
import Rectangle1 from "../assets/Rectangle1.png"
import Ellipse from "../assets/Ellipse.png"
import Sedan from "../assets/Sedan.svg"
import Cuv from "../assets/CUV.svg"
import Suv from "../assets/SUV.svg"
import Micro from "../assets/MICRO.svg"
import HatchBack from "../assets/HatchBack.svg"
import RoadSter from "../assets/RoadSter.svg"
import Pickup from "../assets/Pickup.svg"
import Van from "../assets/Van.svg"
import SelectArrow from "../assets/SelectArrow.svg"
import Coupe from "../assets/Coupe.svg"
import SuperCar from "../assets/SuperCar.svg"
import CamperVan from "../assets/CamperVan.svg"
import MiniTruck from "../assets/MiniTruck.svg"
import Group18 from "../assets/Group18.png"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';

// Add more categories with images as needed];
const Services = () => {

    const navigation = useNavigation();

    const [selectedTab, setSelectedTab] = useState('services');
    const [starRating, setStarRating] = useState(0);
    const [selectedViews, setSelectedViews] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const dummyData = [

        { name: 'SEDAN', imageUrl: 'Sedan' },
        { name: 'CUV', imageUrl: 'Cuv' },
        { name: 'SUV', imageUrl: 'Suv' },
        { name: 'MICRO', imageUrl: 'Micro' },
        { name: 'HATCHBACK', imageUrl: 'HatchBack' },
        { name: 'ROADSTER', imageUrl: 'RoadSter' },
        { name: 'PICKUP', imageUrl: 'Pickup' },
        { name: 'VAN', imageUrl: 'Van' },
        { name: 'COUPE', imageUrl: 'Coupe' },
        { name: 'SUPERCAR', imageUrl: 'SuperCar' },
        { name: 'CAMPERVAN', imageUrl: 'CamperVan' },
        { name: 'MINITRUCK', imageUrl: 'MiniTruck' },

    ];

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const snapshot = await firestore().collection('categories').limit(3).get();
                const categoriesData = snapshot.docs.map(doc => doc.data());
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();

    }, []);

    const renderImage = (imageName) => {
        switch (imageName) {
            case 'SEDAN':
                return <Sedan style={{ left: 20 }} uri={Sedan} width="60" height="60" />;
            case 'CUV':
                return <Cuv style={{ left: 20 }} uri={Cuv} width="60" height="60" />;
            case 'SUV':
                return <Suv style={{ left: 20 }} uri={Suv} width="60" height="60" />;
            case 'MICRO':
                return <Micro style={{ left: 20 }} uri={Micro} width="60" height="60" />;
            case 'HATCHBACK':
                return <HatchBack style={{ left: 20 }} uri={HatchBack} width="60" height="60" />;
            case 'ROADSTER':
                return <RoadSter style={{ left: 20 }} uri={RoadSter} width="60" height="60" />;
            case 'PICKUP':
                return <Pickup style={{ left: 20 }} uri={Pickup} width="60" height="60" />;
            case 'VAN':
                return <Van style={{ left: 20 }} uri={Van} width="60" height="60" />;
            case 'COUPE':
                return <Coupe style={{ left: 20 }} uri={Coupe} width="60" height="60" />;
            case 'MINITRUCK':
                return <MiniTruck style={{ left: 20 }} uri={MiniTruck} width="60" height="60" />;
            case 'SUPERCAR':
                return <SuperCar style={{ left: 20 }} uri={SuperCar} width="60" height="60" />;
            case 'SUPERCAR':
                return <SuperCar style={{ left: 20 }} uri={SuperCar} width="60" height="60" />;
            case 'CAMPERVAN':
                return <SuperCar style={{ left: 20 }} uri={SuperCar} width="60" height="60" />;
            default:
                return null;
        }
    };

    const addDummyDataToFirestore = async () => {
        try {
            const categoryRef = firestore().collection('categories');
            const snapshot = await categoryRef.get();
    
            // Check if categories collection already exists
            if (snapshot.empty) {
                // Iterate through dummy data and add each object to Firestore
                await Promise.all(dummyData.map(async (data) => {
                    await categoryRef.add(data);
                }));
                console.log('Dummy data added to Firestore successfully');
            } else {
                console.log('Dummy data already exists in Firestore');
            }
        } catch (error) {
            console.error('Error adding dummy data to Firestore:', error);
        }
    };
    
    useEffect(() => {
        // Call addDummyDataToFirestore when the component mounts
        addDummyDataToFirestore();
    }, []);

    // const route = useRoute();
    // const { stationName } = route.params;

    const handleCategorySelect = (category)=>{
        setSelectedCategory(category);
        console.log(category.name);
    }

    const handlePress = (item) => {

        if (selectedItem === item) {
            // If the same category is pressed again, deselect it
            setSelectedItem(null);
        } else {
            // Otherwise, select the new category
            setSelectedItem(item);
        }
    };

    const handleStarPress = (rating) => {
        setStarRating(rating);
    };
    const isAnyViewSelected = selectedViews.length > 0;
    const thumbnailUri = 'https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais'; // Replace with your thumbnail URI
    const renderContent = () => {
        switch (selectedTab) {
            case 'services':
                return (

                    <View style={{ width: "100%", height: 400 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", marginLeft: wp("2%") }}>Categories</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("categories")} style={{ width: 60, height: 20, elevation: 2, backgroundColor: "#EAF4FB", marginRight: wp("2%"), borderRadius: 35 }}>
                                <Text style={{ fontSize: 10, fontWeight: "900", color: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%") }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {/* Display categories */}
                            {categories.map((category, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleCategorySelect(category)} // Change console.log to your logic
                                    style={{
                                        // Adjust marginTop as needed
                                        justifyContent: "space-between",
                                        flexDirection: "row",
                                        width: '96%',
                                        height: 60,
                                        backgroundColor: "#FBFBFB",
                                        alignSelf: "center",
                                        top: 20,// Adjust top position as needed
                                        borderRadius: 10,
                                        elevation: 3,
                                        borderWidth: 1,
                                        borderColor:  selectedCategory === category ? "#2B91DB" : "transparent",
                                        marginBottom: 20,
                                    }}>
                                    {renderImage(category.name)}
                                    <Text style={{ top: 18, right: 20, fontSize: 13, fontWeight: "900", color: "#2B91DB" }}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                    </View>
                );
            case 'gallery':
                return (
                    // Content for 'gallery' tab
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", marginLeft: wp("2%") }}>Gallery Images</Text>
                            <View style={{ width: 60, height: 20, backgroundColor: "#EAF4FB", marginRight: wp("2%"), borderRadius: 35 }}>
                                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#2B91DB", alignSelf: "center", marginTop: hp("0.4%"), elevation: 3 }}>View All</Text>
                            </View>
                        </View>

                        <View style={{ width: 400, height: 330, alignSelf: "center" }}>
                            <ScrollView style={{ marginBottom: 70 }}>
                                <View style={{ flexDirection: "row", marginTop: hp("3%"), justifyContent: "space-evenly" }}>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the first item */}
                                        <Image source={{ uri: "https://img.freepik.com/free-photo/man-polishing-car-inside-car-service_1303-26881.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the second item */}
                                        <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193619.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: hp("3%"), justifyContent: "space-evenly" }}>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the third item */}
                                        <Image source={{ uri: "https://img.freepik.com/free-photo/man-cleaning-car-by-water-from-high-pressure-water-gun_651396-2791.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the fourth item */}
                                        <Image source={{ uri: "https://img.freepik.com/premium-photo/man-washing-his-black-car-with-blue-sponge-clean-dirt_479128-173.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: hp("3%"), justifyContent: "space-evenly" }}>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the fifth item */}
                                        <Image source={{ uri: "https://img.freepik.com/free-photo/man-polishing-car-inside-car-service_1303-26881.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                    <View style={{ borderRadius: 7, width: 160, height: 140 }}>
                                        {/* Your content for the sixth item */}
                                        <Image source={{ uri: "https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212211.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 160, height: 140, borderRadius: 7 }} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                );
            case 'reviews':
                return (
                    // Content for 'reviews' tab
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", marginLeft: wp("2%") }}>Customer Reviews</Text>
                            <View style={{ width: 60, height: 20, backgroundColor: "#EAF4FB", marginRight: wp("2%"), borderRadius: 35 }}>
                                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#2B91DB", alignSelf: "center", marginTop: hp("0.4%"), elevation: 3 }}>View All</Text>
                            </View>
                        </View>

                        <View style={{ width: 400, height: 330, alignSelf: "center" }} >
                            <ScrollView style={{ marginBottom: 70 }} >

                                <View style={{ width: wp("95%"), height: hp("20%"), elevation: 1, backgroundColor: "#FBFBFB", alignSelf: "center", marginTop: hp("2%"), borderRadius: 12 }}>

                                    <View style={{ flexDirection: "row", marginTop: hp("2%") }}>
                                        <View style={{ marginLeft: wp("2%"), width: 56, height: 56, borderWidth: 1, borderColor: "white", borderRadius: 56 }}>
                                            <Image source={{ uri: "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 52, height: 52, borderRadius: 56 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: "900", color: "#242424", marginLeft: wp("1%") }}>Bilawal Shair</Text>
                                            <View style={{ flexDirection: "row", marginLeft: wp("1%"), marginTop: hp("1%") }}>

                                                {[1, 2, 3, 4, 5].map((index) => (
                                                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                                                        <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                                                            <AntDesign name="star" color={index <= starRating ? '#FFDD00' : 'gray'} size={10} />
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424", marginLeft: wp("1") }}>05 days ago</Text>
                                            </View>

                                            <View style={{ marginLeft: wp("1%"), marginTop: hp("1%") }}>
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424" }}>
                                                    Verified Customer
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B", marginTop: hp("1%") }}>
                                                    Customer description is here lorem ipsum is the dummy
                                                    text.
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B" }}>
                                                    Customer description is here lorem ipsum is the
                                                    dummy text. lorem ipsum...
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ width: wp("95%"), height: hp("20%"), elevation: 1, backgroundColor: "#FBFBFB", alignSelf: "center", marginTop: hp("2%"), borderRadius: 12 }}>

                                    <View style={{ flexDirection: "row", marginTop: hp("2%") }}>
                                        <View style={{ marginLeft: wp("2%"), width: 56, height: 56, borderWidth: 1, borderColor: "white", borderRadius: 56 }}>
                                            <Image source={{ uri: "https://img.freepik.com/free-photo/young-successful-businessman-posing-dark-wall_176420-54.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 52, height: 52, borderRadius: 56 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: "900", color: "#242424", marginLeft: hp("1%") }}>Atif</Text>
                                            <View style={{ flexDirection: "row", marginLeft: wp("1%"), marginTop: hp("1%") }}>

                                                {[1, 2, 3, 4, 5].map((index) => (
                                                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                                                        <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                                                            <AntDesign name="star" color={index <= starRating ? '#FFDD00' : 'gray'} size={10} />
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424", marginLeft: wp("1%") }}>05 days ago</Text>
                                            </View>

                                            <View style={{ marginLeft: wp("1%"), marginTop: hp("1%") }}>
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424" }}>
                                                    Verified Customer
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B", marginTop: hp("1%") }}>
                                                    Customer description is here lorem ipsum is the dummy
                                                    text.
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B" }}>
                                                    Customer description is here lorem ipsum is the
                                                    dummy text. lorem ipsum...
                                                </Text>
                                            </View>
                                        </View>

                                    </View>

                                </View>
                                <View style={{ width: wp("95%"), height: hp("20%"), elevation: 1, bottom: 2, backgroundColor: "#FBFBFB", alignSelf: "center", marginTop: hp("2%"), borderRadius: 12 }}>

                                    <View style={{ flexDirection: "row", marginTop: hp("2%") }}>
                                        <View style={{ marginLeft: wp("2%"), width: 56, height: 56, borderWidth: 1, borderColor: "white", borderRadius: 56 }}>
                                            <Image source={{ uri: "https://img.freepik.com/free-photo/young-successful-businessman-posing-dark-wall_176420-54.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 52, height: 52, borderRadius: 56 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: "900", color: "#242424", marginLeft: 10 }}>Ali</Text>
                                            <View style={{ flexDirection: "row", marginLeft: wp("1%"), marginTop: hp("1%") }}>

                                                {[1, 2, 3, 4, 5].map((index) => (
                                                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                                                        <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                                                            <AntDesign name="star" color={index <= starRating ? '#FFDD00' : 'gray'} size={10} />
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424", marginLeft: wp("1%") }}>05 days ago</Text>
                                            </View>

                                            <View style={{ marginLeft: wp("1%"), marginTop: hp("1%") }}>
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#242424" }}>
                                                    Verified Customer
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B", marginTop: hp("1%") }}>
                                                    Customer description is here lorem ipsum is the dummy
                                                    text.
                                                </Text>

                                                <Text style={{ fontSize: 8, fontWeight: "bold", color: "#82828B" }}>
                                                    Customer description is here lorem ipsum is the
                                                    dummy text. lorem ipsum...
                                                </Text>
                                            </View>


                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                );
            case 'about':
                return (
                    // Content for 'about' tab
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", marginLeft: 20 }}>About Us</Text>
                            <View style={{ width: 60, height: 20, backgroundColor: "#EAF4FB", marginRight: wp("2%"), borderRadius: 35 }}>
                                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%"), elevation: 3 }}>View All</Text>
                            </View>
                        </View>

                        <View style={{ width: wp("95%"), height: hp("70%"), backgroundColor: "#FFF", alignSelf: "center" }}>

                            <Text style={{ fontSize: 14, fontWeight: "400", color: "#82828B", marginTop: hp("2%") }}>
                                At our company, we are committed to delivering high-quality
                                products and exceptional service to our customers. With years of
                                experience in the industry, we have established ourselves as a trusted and
                                reliable provider. Our mission is to exceed customer expectations by offering
                                innovative solutions that meet their unique needs. We strive to continuously
                                improve our products and services, utilizing the latest technologies and staying
                                ahead of industry trends.
                            </Text>

                        </View>
                    </View>
                );
            default:
                return null;
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>

            <View style={{ width: "100%", height: "100%" }}>

                <View style={{
                    backgroundColor: "#9C9C9C",
                }}>
                    <>
                        <View style={{

                            overflow: 'hidden',
                        }}>
                            <VideoPlayer
                                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                videoWidth={1800}
                                videoHeight={1200}
                                thumbnail={{ uri: thumbnailUri }}
                            />
                        </View>
                    </>
                </View>
                <View style={{ position: "absolute", marginTop: hp("3%"), width: '100%', paddingHorizontal: wp("3%") }}>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("popularServiceStation")}>
                            <Image source={BackArrow} style={{ width: 39, height: 39, borderRadius: 10, marginTop: hp("1%") }} />
                        </TouchableOpacity>

                        <Image source={Rectangle1} style={{ width: 21, height: 25, marginTop: hp("1%") }} />
                    </View>

                    <View style={{ flexDirection: "row", marginTop: hp("15%"), left: wp("5%") }}>
                        <View style={{ width: 58, height: 61, borderRadius: 7, backgroundColor: "white" }}>
                            <Image source={{ uri: "https://img.freepik.com/premium-photo/process-professional-car-wash-with-chemical-detergent-high-pressure-washer_95891-6057.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 55, height: 58, alignSelf: "center", borderRadius: 7, marginTop: 1 }} />
                        </View>
                        <View style={{ width: 58, height: 61, borderRadius: 7, backgroundColor: "white", marginLeft: wp("1%") }}>
                            <Image source={{ uri: "https://img.freepik.com/free-photo/man-polishing-car-inside-car-service_1303-26881.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 55, height: 58, alignSelf: "center", borderRadius: 7, marginTop: 1 }} />
                        </View>
                        <View style={{ width: 58, height: 61, borderRadius: 7, backgroundColor: "white", marginLeft: wp("1%") }}>
                            <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193619.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 55, height: 58, alignSelf: "center", borderRadius: 7, marginTop: 1 }} />
                        </View>
                        <View style={{ width: 58, height: 61, borderRadius: 7, backgroundColor: "white", marginLeft: wp("1%") }}>
                            <Image source={{ uri: "https://img.freepik.com/premium-photo/cleaning-car-wheel-with-brush-water_179755-10310.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 55, height: 58, alignSelf: "center", borderRadius: 7, marginTop: 1 }} />
                        </View>
                        <View style={{ width: 58, height: 61, borderRadius: 7, backgroundColor: "white", marginLeft: wp("1%") }}>
                            <Image source={{ uri: "https://img.freepik.com/premium-photo/man-washing-his-black-car-with-blue-sponge-clean-dirt_479128-173.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 55, height: 58, alignSelf: "center", borderRadius: 7, marginTop: 1 }} />
                        </View>
                        <View>
                            <AntDesign style={{ marginTop: hp("1.5%"), marginLeft: wp("10%") }} name="arrowright" color={'#FFF'} size={30} />
                        </View>
                    </View>
                </View>
                <View style={{ width: "98%", height: "100%", alignSelf: "center" }}>
                    {/* Contents of the existing view */}

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("2%") }}>
                        {/* <Text style={{ fontSize: 20, fontWeight: "900", color: "#242424", marginLeft: wp("4%") }}>
                            {stationName}
                        </Text> */}
                        <View style={{ flexDirection: "row", marginRight: wp("4%") }}>
                            <AntDesign name="star" color={'#FD0'} size={20} />
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#9C9C9C", marginLeft: wp("1%") }}>
                                4.5
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: 230, height: 40, backgroundColor: "#EAF4FB", elevation: 1, borderRadius: 41, marginLeft: wp("4%"), marginTop: hp("2%") }}>
                        <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                            <Text style={{ fontSize: 13, fontWeight: "500", color: "#2B91DB", marginLeft: wp("2%") }}>Chaklala Can’tt, Rawalpindi</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("mapView")} style={{ marginLeft: wp("3%"), position: 'relative' }}>
                                <Image source={Ellipse} style={{ width: 23, height: 23, borderRadius: 10 }} />
                                <View style={{ position: "absolute", top: hp("1%"), left: wp("1%") }}>
                                    <Image source={Group18} style={{ width: 12, height: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: wp("100%"), height: hp("3%"), alignSelf: "center", marginTop: hp("2.5%") }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1%") }}>
                            <TouchableOpacity onPress={() => setSelectedTab('services')}>
                                <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'services' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase", marginLeft: wp("4%") }}>Select</Text>
                                {selectedTab === 'services' && <View style={{ marginLeft: wp("4%"), width: wp("13%"), height: hp("0.2%"), backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%") }} />}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedTab('gallery')}>
                                <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'gallery' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase" }}>Gallery</Text>
                                {selectedTab === 'gallery' && <View style={{ width: wp("13%"), height: hp("0.2%"), backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%") }} />}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedTab('reviews')}>
                                <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'reviews' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase" }}>Reviews</Text>
                                {selectedTab === 'reviews' && <View style={{ width: wp("13%"), height: hp("0.2%"), backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%") }} />}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedTab('about')}>
                                <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'about' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase", right: wp("4%") }}>About</Text>
                                {selectedTab === 'about' && <View style={{ right: wp("4%"), width: wp("13%"), height: hp("0.2%"), backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("0.5%") }} />}
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ width: "100%", height: "100%", marginTop: 8 }}>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#9C9C9C", alignSelf: "center" }}
                        ></View>
                        {renderContent()}
                        <TouchableOpacity onPress={() => navigation.navigate("selectServices")} style={{ position: "absolute", width: wp("95%"), height: hp("8%"), backgroundColor: isAnyViewSelected ? '#2B91DB' : '#A6A6A6', borderRadius: 12, alignSelf: "center", marginTop: hp("37%") }}>
                            <Text style={{ fontSize: 16, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: hp("2.2%") }}>SELECT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Services

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
});