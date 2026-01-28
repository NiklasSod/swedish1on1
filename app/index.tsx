import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import LogoIcon from "../components/LogoIcon";
import LogoText from "../components/LogoText";
import { homeStyles } from "../styles/index.styles";
import { useT } from "../locales/i18n";


export default function Index() {
  const router = useRouter();
  const t = useT("");

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScrollView
      scrollEnabled={true}
      contentContainerStyle={homeStyles.container}
    >
      <LogoIcon style={[homeStyles.icon, { marginTop: isLandscape ? 10 : 50 }]} />
      <LogoText style={homeStyles.image} />
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
