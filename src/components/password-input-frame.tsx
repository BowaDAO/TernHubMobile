import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { RADIUS, COLORS, SIZE, GAP, FONT, icon } from "../../constants";
import { useState } from "react";

type Prop = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
};

const PasswordInputFrame = ({ label, value, onChangeText }: Prop) => {
  const [isPasswordVisible, setPasswordIsVisible] = useState<Boolean>(false);

  const togglePasswordIcon = () => {
    setPasswordIsVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible ? false : true}
        textContentType="password"
      />

      <TouchableOpacity style={styles.visibility} onPress={togglePasswordIcon}>
        <Image
          source={isPasswordVisible ? icon.hidepassword : icon.showpassword}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: RADIUS.small,
    borderWidth: 1,
    borderColor: COLORS.purple,
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
    top: "50%",
  },
});

export default PasswordInputFrame;
