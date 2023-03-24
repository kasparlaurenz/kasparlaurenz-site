import { MotionValue, useTransform } from "framer-motion";

export const createOpacityTransform = (
  motionVal: MotionValue<number>,
  start: number,
  end: number,
  outputRange: number[]
) => {
  return useTransform(motionVal, [start, 0, end], outputRange);
};
