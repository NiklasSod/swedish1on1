import { ScrollView, Text } from "react-native";
import { useT } from "@/locales/i18n";
// import { ????? } from "@/styles/?????.styles";

export default function Index() {
  const t = useT("");

  return (
    <ScrollView
      scrollEnabled={true}
      // contentContainerStyle={}
    >
      <Text>{t("forgotPassword.welcomeText")}</Text>
    </ScrollView>
  );
}
