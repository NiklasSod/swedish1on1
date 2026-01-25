import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const RegisterPage = () => {
    const { role } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1 }}>
      <Text>Register Page for {role}</Text>
    </View>
  );
};

export default RegisterPage;