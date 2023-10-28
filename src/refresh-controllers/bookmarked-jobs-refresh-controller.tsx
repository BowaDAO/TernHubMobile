import { RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { getAUserBookmarkedJobs } from "../redux/slice/bookmarks-slice";

const BookmarkedJobsRefreshController = () => {
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

export default BookmarkedJobsRefreshController;
