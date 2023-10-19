import { StyleSheet, Text, SafeAreaView } from "react-native";

const Splash = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
