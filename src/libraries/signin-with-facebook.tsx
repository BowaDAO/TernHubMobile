import SigninFrame from "../components/signin-frame";
import { icon } from "../../constants";

const SigninWithFacebook = ({ label }: { label: string }) => {
  return <SigninFrame icon={icon.facebook} label={label} onPress={() => {}} />;
};

export default SigninWithFacebook;
