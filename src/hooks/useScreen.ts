import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useState } from "react";

const useScreen = () => {
  const [showTitle, setShowTitle] = useState<boolean>(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = Math.round(e.nativeEvent.contentOffset.y);

    if (scrollY > 60) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  };

  return { showTitle, onScroll };
};

export default useScreen;
