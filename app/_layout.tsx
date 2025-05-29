import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
       name="index"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
       name="nextindex"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
       name="choice"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
       name="login"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
       name="Dmail"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
        name="Dverify"
        options= {{ 
          headerTitle: 'Verify Password',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerBackTitle : '.',
        }}
      />
      <Stack.Screen
       name="Dindex"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
       name="Dlogin"
       options= {{ headerShown: false}}
      />
      <Stack.Screen
        name="verify"
        options= {{ 
          headerTitle: 'Verify Password',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerBackTitle : '.',
        }}
      />
      <Stack.Screen
       name="Home"
       options= {{ headerShown: false}}
      />
    
    </Stack>
  );
}
