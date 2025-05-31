//web 329804095155-pd5upfiin7djuhhuk2iisrjajhp8ihtk.apps.googleusercontent.com
//ios 329804095155-b8tpp0jjvlqmh8viilms89h4lrgp33p3.apps.googleusercontent.com
//android 329804095155-6oda1ti9qjs28kpsd74tf5au0psvl1b5.apps.googleusercontent.com

import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/nextindex');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FACC15' }}>
      <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#000' }}>rapido</Text>
    </View>
  );
}


  