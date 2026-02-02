import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LogoIcon from "@/components/LogoIcon";
import { LineInput } from "@/components/LineInputField";
import { registerSchema, RegisterFormValues } from "@/schemas/auth";
import { useT } from "@/locales/i18n";
import { loginStyles } from "@/styles/login.styles";
import { COLORS } from "@/styles/colors";
import { useScreenOrientation } from "@/hooks/useScreenOrientation";

const RegisterPage = () => {
  useScreenOrientation("PORTRAIT_UP");

  const apiDevUrl = process.env.API_URL_DEV;
  const apiProdUrl = process.env.API_URL_PROD;
  const BASE_URL = __DEV__ ? apiDevUrl : apiProdUrl;
  const { role } = useLocalSearchParams();
  // const roleLower = typeof role === "string" ? role.toLowerCase() : "";
  const roleLower = "teacher"; // Temporary hardcode for testing // TODO: Fix better controll on roleLower
  const t = useT("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegister = (data: RegisterFormValues) => {
    // TODO: Add API call + include role
    // console.log("Register", { ...data, roleLower });
    fetch("https://unshammed-dean-creakily.ngrok-free.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, role: roleLower }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle successful registration (e.g., navigate to login)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle registration error
      });
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
              {t("auth.registerTitle", { roleLower })}
            </Text>

            {/* Username */}
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <>
                  <LineInput
                    placeholder={t("usernamePlaceholder")}
                    value={value}
                    onChangeText={onChange}
                  />
                  {errors.username && (
                    <Text style={{ color: "red" }}>
                      {errors.username.message}
                    </Text>
                  )}
                </>
              )}
            />

            {/* Email */}
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <LineInput
                    placeholder={t("emailPlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={{ color: "red" }}>{errors.email.message}</Text>
                  )}
                </>
              )}
            />

            {/* Password */}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <LineInput
                    placeholder={t("passwordPlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{ color: "red" }}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />

            {/* Confirm Password */}
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <>
                  <LineInput
                    placeholder={t("confirmPasswordPlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry
                  />
                  {errors.confirmPassword && (
                    <Text style={{ color: "red" }}>
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Pressable onPress={handleSubmit(onRegister)}>
              <Text style={loginStyles.loginLink}>
                {t("auth.registerButton")}
              </Text>
            </Pressable>

            <Pressable onPress={() => router.push("./login")}>
              <Text style={loginStyles.forgotPassword}>
                {t("auth.loginInsteadLink")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterPage;
