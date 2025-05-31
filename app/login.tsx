import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Image2 from '../assets/images/Untitled.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/Home');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          router.push('/Home');
        } catch (createError: any) {
          Alert.alert('Signup Failed', createError.message);
        }
      } else {
        Alert.alert('Login Failed', error.message);
      }
    }
  };

  return (
    <View className='flex-1 justify-start'>
      <Image source={Image2} style={{ height: 200, width: '100%' }} resizeMode='contain' />

      <Text className='text-2xl font-bold pt-3 pl-5 pb-4'>Login with Email</Text>

      <View className='ml-5 mr-5 border border-black rounded-[15px] h-16 mb-4 justify-center'>
        <TextInput
          className='pl-4 text-lg'
          keyboardType='email-address'
          placeholder='example@example.com'
          placeholderTextColor='gray'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className='ml-5 mr-5 border border-black rounded-[15px] h-16 mb-6 justify-center'>
        <TextInput
          className='pl-4 text-lg'
          placeholder='Password'
          placeholderTextColor='gray'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text className='pl-10 pr-10 text-center text-gray-600'>
        By continuing, you agree to the T&C and Privacy Policy.
      </Text>

      <TouchableOpacity
        onPress={handleLogin}
        className='h-12 bg-slate-200 rounded-[25px] ml-5 mr-5 mt-6 justify-center items-center'
      >
        <Text className='text-lg font-semibold'>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
