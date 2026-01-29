import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useScreenOrientation } from "@/hooks/useScreenOrientation";
import LogoIcon from "@/components/LogoIcon";
import { useT } from "@/locales/i18n";
import { loginStyles } from "@/styles/login.styles";
import { COLORS } from "@/styles/colors";
import { LineInput } from "@/components/LineInputField";

export default function AuthLayout() {
  useScreenOrientation("PORTRAIT_UP");
  const { role } = useLocalSearchParams();
  const t = useT("");
  const roleLower = typeof role === "string" ? role.toLowerCase() : "";

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, zIndex: 0 }}>
      <LogoIcon style={loginStyles.image} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, ...loginStyles.container }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={loginStyles.innerContainer}>
            <Text style={loginStyles.titleText}>
              {t("auth.loginTitle", { roleLower })}
            </Text>
            <LineInput placeholder={t("emailPlaceholder")} />
            <LineInput placeholder={t("passwordPlaceholder")} secureTextEntry />
            <Pressable onPress={() => router.push(`./register?role=${role}`)}>
              <Text style={loginStyles.registerLink}>
                {t("auth.registerLink", { roleLower })}
              </Text>
            </Pressable>
            <Pressable onPress={() => router.push("./forgotPassword")}>
              <Text style={loginStyles.forgotPassword}>
                {t("auth.forgotPassword")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

// add handler for login button
// add login button
