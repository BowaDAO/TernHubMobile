import { Pressable, StyleSheet, Text, View } from "react-native";

interface ErrorType {
  errorMessage: string;
  handleReset: () => void;
}

const CustomError = ({ errorMessage, handleReset }: ErrorType) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{errorMessage} </Text>

      <Pressable onPress={handleReset}>
        <Text>Try again</Text>
      </Pressable>
    </View>
  );
};

export default CustomError;

const styles = StyleSheet.create({});
