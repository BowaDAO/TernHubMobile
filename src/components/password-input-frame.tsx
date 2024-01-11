import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  RADIUS,
  COLORS,
  SIZE,
  GAP,
  FONT,
  icon,
  PADDING,
} from "../../constants";
import { useState } from "react";

type Prop = {
  label: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

const PasswordInputFrame = ({ label, onChangeText, placeholder }: Prop) => {
  const [isPasswordVisible, setPasswordIsVisible] = useState<Boolean>(false);

  const togglePasswordIcon = () => {
    setPasswordIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible ? false : true}
        textContentType="password"
        placeholder={placeholder}
      />

      <TouchableOpacity style={styles.visibility} onPress={togglePasswordIcon}>
        <Image
          source={isPasswordVisible ? icon.showpassword : icon.hidepassword}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: PADDING.large,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.black,
    height: 52,
    fontSize: SIZE.lg,
  },
  container: {
    gap: GAP.regular,
  },
  label: {
    fontWeight: "400",
    fontSize: SIZE.lg,
    fontFamily: FONT.regular,
  },
  icon: {
    width: 24,
    height: 24,
  },
  visibility: {
    position: "absolute",
    right: 10,
    top: "47%",
  },
});

export default PasswordInputFrame;
