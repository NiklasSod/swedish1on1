import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useT } from "../../locales/i18n";

export default function AuthLayout() {
  const { role } = useLocalSearchParams();
  const t = useT("auth");
  const roleLower = typeof role === "string" ? role.toLowerCase() : "";

  return (
    <View style={{ flex: 1 }}>
      <Text>{t("loginTitle", { roleLower })}</Text>
      <Pressable onPress={() => router.push(`./register?role=${role}`)}>
        <Text>{t("registerLink", { roleLower })}</Text>
      </Pressable>
    </View>
  );
}