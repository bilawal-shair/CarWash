import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import arrow2 from "../assets/arrow2.png"
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
import { useNavigation } from '@react-navigation/native'
import Sedan from "../assets/Sedan.svg"
import Cuv from "../assets/CUV.svg"
import Suv from "../assets/SUV.svg"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategorySelect = (item)=>{
    setSelectedCategory(item);
    console.log(item.name);
}


  useEffect(() => {
    // Fetch categories from Firestore
    const fetchCategories = async () => {
      try {
        const categoriesSnapshot = await firestore().collection('categories').get();
        const categoriesData = categoriesSnapshot.docs.map(doc => doc.data());
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
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

 const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
        onPress={() => handleCategorySelect(item)} // Change console.log to your logic
        style={{
            // Adjust marginTop as needed
            justifyContent: "space-between",
            flexDirection: "row",
            width: '96%',
            height: 60,
            backgroundColor: "#FBFBFB",
            alignSelf: "center",
            top:20,// Adjust top position as needed
            borderRadius: 10,
            elevation: 3,
            borderWidth: 1,
            borderColor:  selectedCategory === item ? "#2B91DB" : "transparent",
            marginBottom:23
            
          }}
        >
        {/* You may need to adjust or provide the renderImage function */}
        {renderImage(item.name)} 
        <Text style={{ top: 18, right: 20, fontSize: 13, fontWeight: "900", color: "#2B91DB" }}>{item.name}</Text>
    </TouchableOpacity>
);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style = {{width:"98%",height:"100%",alignSelf:"center"}}>
      <View style={{ height:("10%"),borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("4%")}}>
        <TouchableOpacity onPress={() => navigation.navigate('service')} style={{ marginLeft: wp("4.2%"),width: wp("7%"), height: hp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
           <SelectArrow  style = {{alignSelf:"center",top:hp("1%")}} size= {30}/>
        </TouchableOpacity>
        <View style={{ paddingRight: wp("25%") }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>Select Categories</Text>
        </View>
      </View>

      <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.name}
      />
      <TouchableOpacity onPress={()=>navigation.navigate("selectServices")} style={{ top: wp("2%"),alignSelf: "center", width: wp("95%"), height: hp("8%"),elevation:3, marginBottom: hp("3%"), backgroundColor: '#2B91DB', borderRadius: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: '900', color: '#FFF', alignSelf: 'center', marginTop: hp("2.5%")}}>BOOK NOW</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Categories;
