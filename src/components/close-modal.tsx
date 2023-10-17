import { StyleSheet, Pressable, Image } from "react-native";
import { icon } from "../../constants";

type CloseModalProp = {
  onPress: () => void;
};

const CloseModal = ({ onPress }: CloseModalProp) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={icon.close} resizeMode="contain" style={styles.icon} />
    </Pressable>
  );
};

export default CloseModal;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});
