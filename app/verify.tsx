{/*
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Verify = () => {
  const [password, setPassword] = useState('');
  const { email } = useLocalSearchParams() as { email: string };
  const router = useRouter(); // for navigation

  const handleNext = () => {
    // Navigate to next screen regardless of password
    router.push('/Home'); // change '/Home' to your desired route
  };

  return (
    <View>
      <Text className="font-bold text-2xl ml-8 mb-4 mt-7">
        Enter your password
      </Text>

      <View className='items-center'>
        <Text className="text-gray-500 mb-2">Email: {email}</Text>
        <TextInput
          className="border border-black h-12 w-96 rounded-lg px-4 mt-4 mb-64"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleNext}
        className='w-110 h-12 bg-slate-200 rounded-[25px] mt-80 ml-5 mr-5 justify-center items-center'
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
*/}
