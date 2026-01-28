import { TextInput, View } from "react-native";
import { styles } from "../styles/lineInputField.styles";

interface LineInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

export const LineInput = ({
  placeholder,
  secureTextEntry = false,
}: LineInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

// add "eye" icon to toggle password visibility
