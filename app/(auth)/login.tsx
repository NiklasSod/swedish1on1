import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function AuthLayout() {
  const { role } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Text>Login Page for {role}</Text>
      <Pressable onPress={() => router.push(`./register?role=${role}`)}>
        <Text>Register instead as a {role}</Text>
      </Pressable>
    </View>
  );
}