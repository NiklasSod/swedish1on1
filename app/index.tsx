import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import LoginIcon from "../components/LoginIcon/LoginIcon";
import { homeStyles } from "./index.styles";

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={homeStyles.container}>
      <LoginIcon />
      <Text style={homeStyles.text}>Welcome. {"\n"}Are you a Student or Teacher?</Text>
      <View style={homeStyles.button}>
        <Pressable onPress={() => router.push("./(auth)/login?role=student")}>
          <Text style={homeStyles.buttonText}>Student</Text>
        </Pressable>
        <Pressable onPress={() => router.push("./(auth)/login?role=teacher")}>
          <Text style={homeStyles.buttonText}>Teacher</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
