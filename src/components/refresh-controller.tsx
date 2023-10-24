import { RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { getJobs } from "../redux/slice/job-slice";

const RefreshController = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch: DispatchType = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    dispatch(getJobs());

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default RefreshController;
