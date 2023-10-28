import { RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { getJobs } from "../redux/slice/job-slice";
import { getAUserBookmarkedJobs } from "../redux/slice/bookmarks-slice";

const RefreshController = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: DispatchType = useDispatch();

  const refreshScreen = useCallback(() => {
    setRefreshing(true);

    dispatch(getJobs());

    dispatch(getAUserBookmarkedJobs());

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return <RefreshControl refreshing={refreshing} onRefresh={refreshScreen} />;
};

export default RefreshController;
