import SigninFrame from "../components/signin-frame";
import { icon } from "../../constants";

const SigninWithGoogle = () => {
  return (
    <SigninFrame
      icon={icon.google}
      label="Sign in with Google"
      onPress={() => {}}
    />
  );
};

export default SigninWithGoogle;
