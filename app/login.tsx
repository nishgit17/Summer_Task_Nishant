import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Image2 from '../assets/images/Untitled.png';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <View className='flex-1 justify-start items-left'>
      <Image source={Image2} style={{ height: 200, width: 390 }} resizeMode='contain' />
      <Text className="text-2xl font-bold text-left pt-3 pl-5 pb-4">What's your email?</Text>

      <View className="ml-5 mr-5 flex flex-row items-center border border-black rounded-[15px] h-16">
        <TextInput
          className="flex-1 pl-4 text-lg"
          keyboardType="email-address"
          placeholder="example@example.com"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text className='pl-10 pr-10 pt-[400px] text-center text-gray-600'>
        By continuing, you agree to the T&C and Privacy
      </Text>
      <Text className='pl-10 pb-5 text-center text-gray-600'>Policy</Text>

      <Link href={{ pathname: '/verify', params: { email } }} asChild>
        <TouchableOpacity className='w-110 h-12 bg-slate-200 rounded-[25px] ml-5 mr-5 justify-center items-center'>
          <Text>Next</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});