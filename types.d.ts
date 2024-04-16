type AuthFrame = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void | NavigationProp<ReactNavigation.RootParamList>;
};

type jobType = {
  id: string;
  company: string;
  role: string;
  logo: string;
  mode: string;
  time: any;
  location: string;
  description: string;
};

type User = {
  name: string;
  email: string;
  password: string;
  profession: string;
  uid: string;
  photo: ImageSourcePropType;
  refreshToken: string;
};

type StackParamList = {
  Home: { item: jobType };
  jobfullinfo: { item: jobType };
  searchresult: { searchQuery: string };
  webview: { url: string };
};

type JobToSaveType = {
  id: string;
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  jobDescription: string;
  jobTitle: string;
  jobMode: string;
  timeStamp: string;
};

interface BookmarksType {
  bookmarkedJobs: jobType[];
  status: string;
  error: null | string;
}

type ErrorResponse = {
  message: string;
};
