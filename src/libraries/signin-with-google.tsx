import SigninFrame from "@/components/signin-frame";
import { icon } from "@/constants";

const SigninWithGoogle = ({ label }: { label: string }) => {
  return <SigninFrame icon={icon.google} label={label} onPress={() => {}} />;
};

export default SigninWithGoogle;
