import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import LogoIcon from "../components/LogoIcon/LogoIcon";
import LogoText from "../components/LogoText/LogoText";
import { homeStyles } from "../styles/index.styles";
import { useT } from "../locales/i18n";

export default function Index() {
  const router = useRouter();
  const t = useT("");
  return (
    <ScrollView
      scrollEnabled={true}
      contentContainerStyle={homeStyles.container}
    >
      <LogoIcon />
      <LogoText />
      <Text style={homeStyles.text}>
        {t("startPage.welcomeText")}
      </Text>
      <View style={homeStyles.button}>
        <Pressable onPress={() => router.push(`./(auth)/login?role=${t("student")}`)}>
          <Text style={homeStyles.buttonText}>{t("student")}</Text>
        </Pressable>
        <Pressable onPress={() => router.push(`./(auth)/login?role=${t("teacher")}`)}>
          <Text style={homeStyles.buttonText}>{t("teacher")}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
