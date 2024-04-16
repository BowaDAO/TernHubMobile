import { useState, useCallback } from "react";
import { DispatchType } from "@/redux/store";
import { useDispatch } from "react-redux";
import { RefreshControl } from "react-native";
import { getJobs } from "@/redux/slice/job-slice";

const AllJobsRefreshController = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: DispatchType = useDispatch();

  const refreshScreen = useCallback(() => {
    setRefreshing(true);

    dispatch(getJobs());

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return <RefreshControl refreshing={refreshing} onRefresh={refreshScreen} />;
};

export default AllJobsRefreshController;
