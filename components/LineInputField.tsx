import { TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/lineInputField.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "@/styles/colors";

interface LineInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

export const LineInput = ({
  placeholder,
  secureTextEntry = false,
}: LineInputProps) => {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={isHidden}
        style={styles.input}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsHidden((prev) => !prev)} // better approach if it works
        >
          <Ionicons
            name={isHidden ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={COLORS.colors.grayDark}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
