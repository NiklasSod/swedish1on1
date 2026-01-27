import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import LogoIcon from "../../components/LogoIcon/LogoIcon";
import { useT } from "../../locales/i18n";

export default function AuthLayout() {
  const { role } = useLocalSearchParams();
  const t = useT("auth");
  const roleLower = typeof role === "string" ? role.toLowerCase() : "";

  return (
    <ScrollView style={{ flex: 1 }}>
      <LogoIcon />
      <Text>{t("loginTitle", { roleLower })}</Text>
      <Pressable onPress={() => router.push(`./register?role=${role}`)}>
        <Text>{t("registerLink", { roleLower })}</Text>
      </Pressable>
    </ScrollView>
  );
}