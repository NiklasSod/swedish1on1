import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import LogoIcon from "../../components/LogoIcon";
import { useT } from "../../locales/i18n";
import { loginStyles } from "../../styles/login.styles";

export default function AuthLayout() {
  const { role } = useLocalSearchParams();
  const t = useT("auth");
  const roleLower = typeof role === "string" ? role.toLowerCase() : "";

  return (
    <ScrollView style={{ flex: 1 }}>
      <LogoIcon style={loginStyles.image} />
      <Text>{t("loginTitle", { roleLower })}</Text>
      <Pressable onPress={() => router.push(`./register?role=${role}`)}>
        <Text>{t("registerLink", { roleLower })}</Text>
      </Pressable>
    </ScrollView>
  );
}