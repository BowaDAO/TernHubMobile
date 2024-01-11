import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../types/type";

type Prop = {
  route: RouteProp<StackParamList, "webview">;
};

const WebViewScreen: React.FC<Prop> = ({ route }) => {
  const { url } = route.params;

  return (
    <SafeAreaView style={styles.browser_container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

export default WebViewScreen as React.FC;

const styles = StyleSheet.create({
  browser_container: {
    flex: 1,
  },
});
