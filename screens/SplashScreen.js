import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Import Firebase auth module

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        setTimeout(() => {
          navigation.navigate('tab'); // Replace 'HomeScreen' with the name of your home screen
        }, 2000); // Change the delay time as needed (2000 milliseconds = 2 seconds)
      } else {
        // User is signed out
        setTimeout(() => {
          navigation.navigate('choose'); // Replace 'AuthStack' with the name of your authentication stack
        }, 2000); // Change the delay time as needed (2000 milliseconds = 2 seconds)
      }
    });

    // Clean up listener
    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#2B91DB", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>Car Wash</Text>
    </View>
  );
};

export default SplashScreen;
