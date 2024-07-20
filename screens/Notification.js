import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const Notification = () => {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>


      <View style={{ flexDirection: "row", backgroundColor: "white", width: "100%", height: 100 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ marginLeft: 20, marginTop: 35 }}>
          <MaterialIcons name="keyboard-arrow-left" color="black" size={35} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center", color: "black", marginLeft: 100 }}>Notifications</Text>
      </View>


      <View style={{ width: 400, height: 100, backgroundColor: "white", marginTop: 30, alignSelf: "center" }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginLeft: 20 }} name="notifications" color="black" size={25} />
            <Text style={{ marginLeft: 20 }}>Friends and family Deal</Text>
          </View>
          <Text style={{ marginRight: 20 }}>3 h ago</Text>
        </View>
        <Text style={{ marginLeft: 65 }}>15% discount</Text>
      </View>


      <View style={{ width: 400, height: 100, backgroundColor: "white", marginTop: 20, alignSelf: "center" }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginLeft: 20 }} name="notifications" color="black" size={25} />
            <Text style={{ marginLeft: 20 }}>Friends and family Deal</Text>
          </View>
          <Text style={{ marginRight: 20 }}>3 h ago</Text>
        </View>
        <Text style={{ marginLeft: 65 }}>15% discount</Text>
      </View>


      <View style={{ width: 400, height: 100, backgroundColor: "white", marginTop: 20, alignSelf: "center" }}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginLeft: 20 }} name="notifications" color="black" size={25} />
            <Text style={{ marginLeft: 20 }}>Friends and family Deal</Text>
          </View>
          <Text style={{ marginRight: 20 }}>3 h ago</Text>
        </View>
        <Text style={{ marginLeft: 65 }}>15% discount</Text>
      </View>



    </View>
  )
}

export default Notification