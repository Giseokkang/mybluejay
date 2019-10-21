import React, { useCallback, useState } from "react";

export const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    },
    [value]
  );
  return [value, onChange];
};
