import { View, Text, TouchableOpacity, TextInput, Modal, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation, useRoute } from '@react-navigation/native'
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';


const CarDetailScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [profile, setProfile] = useState(null);
  const [userSelectedImage, setUserSelectedImage] = useState(null);

  const handleArrowPress1 = () => {
    setModal1Visible(true);

  };

  const handleArrowPress2 = () => {
    setModal2Visible(true);

  };

  useEffect(() => {
    // Set initial state based on route params
    const { profile: routeProfile } = route.params || {};
    setProfile(routeProfile || null);

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

  const saveProfile = () => {
    // Save the data and navigate back to EditProfile screen
    navigation.navigate('', {
      profile,


    });
  };

  const renderModalContent1 = () => (
    <View style={{ marginBottom: 125, marginLeft: 110, backgroundColor: 'white', padding: 40, borderRadius: 10, borderColor: "gray", borderWidth: 0.5 }}>
      <TouchableOpacity onPress={() => handleItemPress1('Item 1')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemPress1('Item 2')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemPress1('Item 3')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item 3</Text>
      </TouchableOpacity>
    </View>
  );
  const renderModalContent2 = () => (
    <View style={{ marginTop: 95, marginLeft: 110, backgroundColor: 'white', padding: 40, borderRadius: 10, borderColor: "gray", borderWidth: 0.5 }}>
      <TouchableOpacity onPress={() => handleItemPress2('Item A')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item A </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemPress2('Item B')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item B</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemPress2('Item C')}>
        <Text style={{ fontSize: 16, marginBottom: 10, fontSize: 18, fontWeight: "bold", color: "black" }}>Item C</Text>
      </TouchableOpacity>
    </View>
  );

  const handleItemPress1 = (item) => {
    setSelectedItem1(item);
    // Handle the selected item as needed
    console.log(`Selected Item: ${item}`);
    setModal1Visible(false); // Close the modal after selection
  };

  const handleItemPress2 = (item) => {
    setSelectedItem2(item);
    // Handle the selected item as needed
    console.log(`Selected Item: ${item}`);
    setModal2Visible(false); // Close the modal after selection
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: 430, height: 120, backgroundColor: "white", alignSelf: "center" }}>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <TouchableOpacity onPress={() => navigation.navigate("washshine")} style={{ marginLeft: 30 }}>
            <MaterialIcons name="keyboard-arrow-left" color="black" size={35} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center", color: "black", marginLeft: 60 }}> Add Car details</Text>
        </View>
      </View>

      <View style={{ width: "100%", height: 720, backgroundColor: "white", marginTop: 10 }}>

        <View style={{ marginLeft: 30, marginTop: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Add car details</Text>
        </View>

        <ScrollView>

          <View style={{ width: 380, height: 80, borderWidth: 0.5, borderColor: "gray", alignSelf: "center", marginTop: 30, borderRadius: 15 }}>

            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-evenly" }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", marginRight: 130 }}>{selectedItem1 || 'Company name'}</Text>
              <TouchableOpacity onPress={handleArrowPress1}>
                <MaterialIcons name="keyboard-arrow-down" color="black" size={35} />
              </TouchableOpacity>
            </View>

            <Modal
              transparent={true}
              visible={isModal1Visible}
              onRequestClose={() => setModal1Visible(false)}
            >
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPressOut={() => setModal1Visible(false)}
              >
                {renderModalContent1()}
              </TouchableOpacity>
            </Modal>
          </View>

          <View style={{ width: 380, height: 80, borderWidth: 0.5, borderColor: "gray", alignSelf: "center", marginTop: 30, borderRadius: 15 }}>

            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-evenly" }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "black", marginRight: 130 }}>{selectedItem2 || 'Modal name'}</Text>
              <TouchableOpacity onPress={handleArrowPress2}>
                <MaterialIcons style={{ marginLeft: 20 }} name="keyboard-arrow-down" color="black" size={35} />
              </TouchableOpacity>
            </View>

            <Modal
              transparent={true}
              visible={isModal2Visible}
              onRequestClose={() => setModal2Visible(false)}
            >
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPressOut={() => setModal2Visible(false)}
              >
                {renderModalContent2()}
              </TouchableOpacity>
            </Modal>
          </View>

          <View style={{ width: 380, height: 80, borderWidth: 0.5, borderColor: "gray", alignSelf: "center", marginTop: 30, borderRadius: 15 }}>

            <TextInput style={{ marginTop: 15, marginLeft: 15 }} placeholder='Enter vehicle number' />
          </View>
          <View style={{ position: "absolute", marginLeft: 25, marginTop: 230 }}>
            <Text style={{ marginLeft: 60, fontSize: 17, fontWeight: "bold", color: "black", marginLeft: 25 }}>Vehicle number</Text>
          </View>


          <View style={{ width: 400, height: 290, backgroundColor: "#E0E0E0", alignSelf: "center", marginTop: 20, borderRadius: 10 }}>

            <TouchableOpacity onPress={openImagePicker} style={{ marginTop: 100 }}>
              {profile ? (
                <Image source={{ uri: profile }} style={{ width: 180, height: 120, borderRadius: 20, marginLeft: 110 }} />
              ) : (
                <MaterialCommunityIcons name="camera-outline" color="black" size={40} style={{ marginLeft: 180 }} />
              )}
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 150 }}>Upload Photo</Text>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate("appointment")} style={{ width: 330, height: 70, backgroundColor: "#33C7FF", alignSelf: "center", marginTop: 20, borderRadius: 20, marginBottom: 20 }}>
            <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", color: "white", marginTop: 20 }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
export default CarDetailScreen;
