const ON_SETTING = "/setting/ON_SETTING";
const OFF_SETTING = "/setting/OFF_SETTING";

export const onSetting = () => ({ type: ON_SETTING });
export const offSetting = () => ({ type: OFF_SETTING });

const initialState = {
  isSettingOn: false
};

const setting = (state = initialState, action) => {
  switch (action.type) {
    case ON_SETTING:
      return { ...state, isSettingOn: true };

    case OFF_SETTING:
      return { ...state, isSettingOn: false };

    default:
      return state;
  }
};

export default setting;
