import '../locales/i18n'; 
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#d3effeff"
      />
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}