import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Image2 from '../assets/images/Riderlogin.png';

const Dmail = () => {
  const [email, setEmail] = useState('');

  return (
    <View className='flex-1 justify-start items-left'>
        <Image
            source={Image2}
            style={{ width: '100%', height: 400 }}
            resizeMode="cover"
        />
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

      <Text className='pl-10 pr-10 pt-60 text-center text-gray-600'>
        By continuing, you agree to the T&C and Privacy
      </Text>
      <Text className='pl-10 pb-5 text-center text-gray-600'>Policy</Text>

      <Link href={{ pathname: '/Dverify', params: { email } }} asChild>
        <TouchableOpacity className='w-110 h-12 bg-slate-200 rounded-[25px] ml-5 mr-5 justify-center items-center'>
          <Text>Next</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Dmail;

const styles = StyleSheet.create({});