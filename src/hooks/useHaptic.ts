import * as Haptics from "expo-haptics";

const useHaptic = () => {
  const triggerVibration = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  return { triggerVibration };
};

export default useHaptic;
