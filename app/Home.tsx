import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import Image2 from '../assets/images/#goRapido.png';

const Home = () => {
  const [location, setLocation] = useState('');
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="ml-5 mr-5 mt-24 flex flex-row items-center border border-black rounded-[15px] h-16">
        <TextInput
          className="flex-1 pl-4 text-lg justify-center items-center"
          keyboardType="default"
          placeholder="🔍 What's your destination?📍"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <View className='ml-5 mt-10 mb-6'>
        <Text className='text-2xl font-bold'>Explore</Text>
      </View>
      <View className='flex flex-row'>
        <View className="ml-5 mr-4 w-28 flex flex-row items-center border border-black rounded-[15px] h-16">
          <MaterialCommunityIcons name="package-variant-closed" size={36} color="brown" />
          <Text> Parcel</Text>
        </View>
        <View className="ml-5 mr-4 w-28 flex flex-row items-center border border-black rounded-[15px] h-16">
          <Ionicons name='car' size={36} color="black" />
          <Text> Cab</Text>
        </View>
        <View className="ml-5 mr-4 w-28 flex flex-row items-center border border-black rounded-[15px] h-16">
          <Ionicons name='bicycle' size={36} color="red" />
          <Text> Bike</Text>
        </View>
      </View>
      
      <View className='mt-16'>
        <Image
          source={Image2}
          style={{ width: '100%', height: 400 }}
          resizeMode="cover"
        />
      </View>

    </ScrollView>
  );
};

export default Home;
