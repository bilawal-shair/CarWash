import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Done from "../assets/Done.png"
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Submitted = () => {
    const navigation = useNavigation();
  return (
    <View style = {{flex:1,backgroundColor:"#FFF"}}>
      <View style = {{width:"98%",height:"100%",alignSelf:"center"}}>

        <View style = {{alignItems:"center",top:hp("45%")}}>
            <Image source={Done} style = {{width:160,height:160}}/>
            <Text style = {{fontSize:29,fontWeight:"900",color:"#2B91DB",alignSelf:"center",marginTop:hp("1%")}}>Congratulation!</Text>
            <Text style = {{fontSize:18,fontWeight:"700",color:"#8A8A8A",alignSelf:"center",marginTop:hp("4%")}}>You have successfully your booking</Text>
        </View>


        <TouchableOpacity onPress={()=>navigation.navigate("home")} style={{ position: "absolute", width: wp("94%"), height: hp("8%"), backgroundColor: '#2B91DB', borderRadius: 12, alignSelf: "center", bottom: hp("5%")}}>
                    <Text style={{ fontSize: 16, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: hp("2%") }}>Done</Text>
       </TouchableOpacity>
       </View>
      
    </View>
  )
}

export default Submitted