import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      // TODO: Add api call to login
      // TODO: role needs to be included!
      console.warn("Missing credentials");
      return;
    }
    console.log("Login with", { email, password, roleLower });
  };

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
            <LineInput
              placeholder={t("emailPlaceholder")}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <LineInput
              placeholder={t("passwordPlaceholder")}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {/* TODO create dashboard page teacher / student after login */}
            <Pressable onPress={() => handleLogin()}>
              <Text style={loginStyles.loginLink}>{t("auth.loginLink")}</Text>
            </Pressable>
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
