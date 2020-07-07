import { useEffect, useRef } from "react";
import { inactivityDelay } from "../constants";

export const useInactivityDelay = (afterDelayCallback) => {
  const timerId = useRef(null);

  const setTimer = () => timerId.current = setTimeout(afterDelayCallback, inactivityDelay);
  const clearTimer = () => timerId.current = clearTimeout(timerId.current);

  useEffect(() => {
    setTimer();
    return clearTimer;
  }, []);

  return clearTimer;
};