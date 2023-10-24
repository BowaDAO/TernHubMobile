import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../types/type";
import { SingleJobInfoHeader, SingleJobInfoBody } from "../components";
import { FullButton } from "../components/button";
import { GAP, PADDING } from "../../constants";
import { useScreen } from "../hooks";

type Prop = {
  route: RouteProp<StackParamList, "jobfullinfo">;
};

const JobFullInfo: React.FC<Prop> = ({ route }) => {
  const { item } = route.params;

  const { onScroll } = useScreen();

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={1}
      >
        <View style={styles.container}>
          <SingleJobInfoHeader item={item} />
          <SingleJobInfoBody item={item} />
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 60,
          zIndex: 100,
          alignSelf: "center",
          paddingHorizontal: PADDING.normal,
        }}
      >
        <FullButton label="Apply" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default JobFullInfo as React.FC;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    gap: GAP.normal,
    padding: PADDING.normal,
  },
});
