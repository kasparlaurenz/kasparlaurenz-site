import { motion, useTransform } from "framer-motion";

export const createOpacityTransform = (
  motionVal: any,
  start: number,
  end: number,
  outputRange: number[]
) => {
  return useTransform(motionVal, [start, 0, end], outputRange);
};
