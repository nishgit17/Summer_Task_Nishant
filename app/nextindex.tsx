import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the 'Login' route
      navigation.navigate('choice');
    }, 500); // Adjust the delay (in milliseconds) as needed

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-7xl text-black-600 font-bold">rapido</Text>
    </View>
  );
}
  