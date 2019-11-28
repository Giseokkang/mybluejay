import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSetting, offSetting } from "../reducers/setting";

const useSetting = () => {
  const { isSettingOn } = useSelector(state => state.setting);

  const dispatch = useDispatch();
  const turnOnSetting = useCallback(() => dispatch(onSetting()), [dispatch]);
  const turnOffSetting = useCallback(() => dispatch(offSetting()), [dispatch]);

  return {
    isSettingOn,
    turnOnSetting,
    turnOffSetting
  };
};

export default useSetting;
