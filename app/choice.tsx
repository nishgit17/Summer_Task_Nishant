import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const choice = () => {
  return (
    <View className='flex-1 justify-center items-center'>
        <Link href="/Dindex" asChild>
            <TouchableOpacity className='w-80 h-20 bg-slate-200 rounded-[30px] mb-5 justify-center items-center flex flex-row'>
                <Icon name="directions-car" size={20} color="blue" />
                <Text style={styles.buttonText}>  SignIn as a Captain</Text>
            </TouchableOpacity>
        </Link>
        <Link href="/login" asChild>
            <TouchableOpacity className='w-80 h-20 bg-slate-200 rounded-[30px] mt-5 justify-center items-center flex flex-row'>
                <Icon name="person" size={20} color="red" />
                <Text style={styles.buttonText}>  SignIn as a Rider</Text>
            </TouchableOpacity>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18, 
    color: '#000000', 
    fontWeight: 'bold',
  },
});

export default choice