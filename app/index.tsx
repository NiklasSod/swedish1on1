import { Pressable, ScrollView, Text, View } from "react-native";
import { homeStyles } from "./index/index.styles";
import LoginIcon from "./index/login_icon";

export default function Index() {
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={homeStyles.container}>
      <LoginIcon />
      <Text style={homeStyles.text}>Welcome. {"\n"}Are you a Student or Teacher?</Text>
      <View style={homeStyles.button}>
        <Pressable>
          <Text style={homeStyles.buttonText}>Student</Text>
        </Pressable>
        <Pressable>
          <Text style={homeStyles.buttonText}>Teacher</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
