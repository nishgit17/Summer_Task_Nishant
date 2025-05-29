// In your App.js or navigation file
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoiceScreen from './choice';
import DriverIndexSCreen from './Dindex';
import DriverLoginScreen from './Dlogin';
import DriverMailScreen from './Dmail';
import DriverPassScreen from './Dverify';
import HomeScreen from './Home';
import IndexScreen from './index'; // Corrected import path
import LoginScreen from './login'; // This should be correct as login.tsx is in the same directory
import NextIndexScreen from './nextindex';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index"> {/* Set Index as the initial screen */}
        <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} /> {/* Hide header for splash */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NextScreen" component={NextIndexScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Choice" component={ChoiceScreen} options={{ headerShown: false}} />
        <Stack.Screen name="DriverIndex" component={DriverIndexSCreen} options={{ headerShown: false}} />
        <Stack.Screen name="DriverLogin" component={DriverLoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="DriverMail" component={DriverMailScreen} options={{ headerShown: false}} />

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;