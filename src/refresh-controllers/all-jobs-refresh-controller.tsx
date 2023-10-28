import { useState, useCallback } from "react";
import { DispatchType } from "../redux/store";
import { useDispatch } from "react-redux";
import { getAUserBookmarkedJobs } from "../redux/slice/bookmarks-slice";
import { RefreshControl } from "react-native";

const AllJobsRefreshController = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: DispatchType = useDispatch();

  const refreshScreen = useCallback(() => {
    setRefreshing(true);

    dispatch(getAUserBookmarkedJobs());

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return <RefreshControl refreshing={refreshing} onRefresh={refreshScreen} />;
};

export default AllJobsRefreshController;
