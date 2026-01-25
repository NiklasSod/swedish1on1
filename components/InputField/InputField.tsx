import { TextInput, TextInputProps } from "react-native";
import { inputFieldStyles } from "./InputField.styles";

interface InputFieldProps extends TextInputProps {
  placeholder: string;
}

const InputField = ({ placeholder, ...props }: InputFieldProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={inputFieldStyles.input}
      {...props}
    />
  );
};

export default InputField;