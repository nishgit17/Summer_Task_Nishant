//web 329804095155-pd5upfiin7djuhhuk2iisrjajhp8ihtk.apps.googleusercontent.com
//ios 329804095155-b8tpp0jjvlqmh8viilms89h4lrgp33p3.apps.googleusercontent.com
//android 329804095155-6oda1ti9qjs28kpsd74tf5au0psvl1b5.apps.googleusercontent.com

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the 'Login' route
      navigation.navigate('nextindex');
    }, 1000); // Adjust the delay (in milliseconds) as needed

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-yellow-400">
      <Text className="text-7xl text-black-600 font-bold">rapido</Text>
    </View>
  );
}


  