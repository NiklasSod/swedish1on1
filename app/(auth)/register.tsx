import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerStyles } from "@/styles/register.styles";
import InputField from "@/components/InputField/InputField";
import { registerSchema, RegisterFormValues } from "@/schemas/auth";
import { useT } from "@/locales/i18n";

const RegisterPage = () => {
    const { role } = useLocalSearchParams();
    const roleLower = typeof role === "string" ? role.toLowerCase() : "";
    const t = useT("auth");

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  const onRegister = (data: RegisterFormValues) => {
    console.log(`Registering ${data.username} as a ${roleLower}`, data);
  };
  
  return (
    <ScrollView contentContainerStyle={registerStyles.container}>
      <Text>{t("registerTitle", { roleLower })}</Text>

      {/* Username Field */}
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <InputField placeholder="Username" onBlur={onBlur} onChangeText={onChange} value={value} />
            {errors.username && <Text style={{ color: 'red' }}>{errors.username.message}</Text>}
          </View>
        )}
      />

      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <InputField placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} keyboardType="email-address" />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
          </View>
        )}
      />

      {/* Password Field */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <InputField 
              placeholder="Password" 
              onBlur={onBlur} 
              onChangeText={onChange} 
              value={value} 
              secureTextEntry 
              autoCapitalize="none"
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
          </View>
        )}
      />

      {/* Confirm Password Field */}
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <InputField 
              placeholder="Confirm Password" 
              onBlur={onBlur} 
              onChangeText={onChange} 
              value={value} 
              secureTextEntry 
              autoCapitalize="none"
            />
            {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}
          </View>
        )}
      />

      <Pressable onPress={handleSubmit(onRegister)}>
        <Text style={registerStyles.buttonText}>{t("registerButton", { roleLower })}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default RegisterPage;
