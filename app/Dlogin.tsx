import { Link } from 'expo-router';
import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import Image2 from '../assets/images/Riderhome.png';

const Dlogin = () => {
  return (
    <View className="flex-1 bg-white">
      <Image
        source={Image2}
        style={{ width: '100%', height: 400 }}
        resizeMode="cover"
      />

      {/* Content Section */}
      <View className="flex items-center px-4 pt-6">
        <Text className="text-4xl font-bold text-center mb-2 mt-12">
          Drive and Earn up to 
        </Text>
        <Text className="text-4xl font-bold text-center mb-2 ">
          ₹15000/week
        </Text>
        <Text className="text-1xl text-black-500 mt-5 mb-44">Made in 🇮🇳</Text>

        <Link href="/Dmail" asChild>
          <TouchableOpacity className="bg-black rounded-full px-6 py-3 mb-4">
            <Text className="text-white text-base font-semibold">
              Start Driving
            </Text>
          </TouchableOpacity>
        </Link>

        <Text
          className="text-blue-600 underline"
          onPress={() => Linking.openURL('https://your-link.com')}>
          Book in the Customer App!
        </Text>
      </View>
    </View>
  );
};

export default Dlogin;
