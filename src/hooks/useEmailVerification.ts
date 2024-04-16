import { sendEmailVerification } from "firebase/auth";
import { auth } from "@/server/firebase/config";
import { Alert } from "react-native";

const useEmailVerification = () => {
  const actionCodeSettings = {
    url: "https://theternhub.netlify.app/internships",
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    handleCodeInApp: true,
  };

  const sendEmailVerificationCode = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser).catch((error) => {
        if (error.code === "auth/too-many-requests") {
          Alert.alert("Too many requests!");
        }
      });
    }
  };

  return { sendEmailVerificationCode };
};

export default useEmailVerification;
