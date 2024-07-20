import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';
import HomeIcon from "./assets/Home.svg"
import ExploreIcon from "./assets/Explore.svg"
import Booking from "./assets/Booking.svg"
import Profile from "./assets/Profile.svg"
import Number from "./assets/Number.svg"



const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="home"

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2B91DB',
        tabBarLabelStyle: { fontWeight: 'bold' },
        tabBarIconStyle: { marginBottom: -10 }, // Adjust as needed
      }}

    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={25} />
            // <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'EXPLORE',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="location-dot" color={color} size={21} />
            //  <ExploreIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="book"
        component={BookingScreen}
        options={{
          tabBarLabel: 'MY BOOKING',
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: 'relative' }}>
              {/* <Booking color={color} size={30} /> */}
              <MaterialIcons name="bookmark" color={color} size={24} />
              {/* NumberBack positioned on top right */}
              <View style={{ position: 'absolute', top: -3, right: 0, left: 10 }}>
                <Number />
                {/* Display your number here */} 
                 <Text style={{ color: 'white', position: "absolute", fontSize: 12, fontWeight: "900", top: -3, left: 3 }}>1</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-large" color={color} size={21} />
            // <Profile size= {30}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator