import { View, Text } from 'react-native'
import React from 'react'

const GoogleProfile = ({route}) => {
    const { usrInfo } = route.params;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Profile</Text>
        <Text>Name: {usrInfo.user.name}</Text>
        <Text>Email: {usrInfo.user.email}</Text>
        {/* Display other user information as needed */}
      </View>
    );
}

export default GoogleProfile