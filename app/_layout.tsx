import { Stack } from "expo-router";
import { RootSiblingParent } from 'react-native-root-siblings';


export default function RootLayout() {
  
  return (

    <RootSiblingParent>
      <Stack>
        <Stack.Screen name="index" options={{
          title: "Home",
          headerShown: false,
        }} />
    </Stack>
    
  </RootSiblingParent>
    
  );
}