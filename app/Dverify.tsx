import { useLocalSearchParams } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase/firebaseConfig';


const Dverify = () => {
  const [password, setPassword] = useState('');
  const { email } = useLocalSearchParams() as { email: string };

  const handleLogin = async () => {
    if (!password) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error:any) {
      Alert.alert('Login failed', error.message);
    }
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
        onPress={handleLogin}
        className='w-110 h-12 bg-slate-200 rounded-[25px] mt-80 ml-5 mr-5 justify-center items-center'
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dverify;
