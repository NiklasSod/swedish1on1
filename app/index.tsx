import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import LogoIcon from "../components/LogoIcon/LogoIcon";
import LogoText from "../components/LogoText/LogoText";
import { homeStyles } from "../styles/index.styles";

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={homeStyles.container}>
      <LogoIcon />
      <LogoText />
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
