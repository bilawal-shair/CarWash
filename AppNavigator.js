import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TabNavigator from './TabNavigator';
import LogoutScreen from './screens/LogoutScreen';
import MapView from 'react-native-maps';
import MapViewScreen from './screens/ExploreScreen';
import CarDetailScreen from './screens/CarDetailScreen';
import ChooseScreen from './screens/ChooseScreen';
import OTPScreen from './screens/OTPScreen';
import PopularServiceStation from './screens/PopularServiceStation';
import Services from './screens/Services';
import SelectServices from './screens/SelectServices';
import Confirmation from './screens/Confirmation';
import Submitted from './screens/Submitted';
import ProfileInformation from './screens/ProfileInformation';
import GoogleProfile from './screens/GoogleProfile';
import Categories from './screens/Categories';
import SplashScreen from './screens/SplashScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen name="splash" component={SplashScreen}  options={{ headerShown: false }}/> 
        <Stack.Screen name="choose" component={ChooseScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignupScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="otp" component={OTPScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="tab" component={TabNavigator}  options={{ headerShown: false }}/>
        <Stack.Screen name="logout" component={LogoutScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="mapView" component={MapViewScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="details" component={CarDetailScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="popularServiceStation" component={PopularServiceStation}  options={{ headerShown: false }}/>
        <Stack.Screen name="service" component={Services}  options={{ headerShown: false }}/>
        <Stack.Screen name="selectServices" component={SelectServices}  options={{ headerShown: false }}/>
        <Stack.Screen name="confirm" component={Confirmation}  options={{ headerShown: false }}/>
        <Stack.Screen name="submitted" component={Submitted}  options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileInfo" component={ProfileInformation}  options={{ headerShown: false }}/>
        <Stack.Screen name="googleProfile" component={GoogleProfile}  options={{ headerShown: false }}/>
        <Stack.Screen name="categories" component={Categories}  options={{ headerShown: false }}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator