import { type NextPage } from "next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Index: NextPage = () => {
  const drag = useMotionValue(0);
  const opacityLeft = useTransform(drag, [-1000, 0, 200], [0.7, 0, 0]);
  const opacityRight = useTransform(drag, [-200, 0, 1000], [0, 0, 0.7]);

  console.log(drag.get());
  return (
    <div className="flex h-screen w-full items-center justify-between">
      <motion.div className="text-3xl" style={{ opacity: opacityLeft }}>
        Guest
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-3xl">Drag</div>
        <motion.div
          className="z-20 h-6 w-6 cursor-pointer rounded-full bg-yellow-500"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          drag
          dragSnapToOrigin
          style={{ x: drag }}
          dragElastic={0.2}
          dragConstraints={{ right: 500, left: -500, top: -50, bottom: 50 }}
          whileDrag={{ scale: 0.8 }}
        ></motion.div>
      </div>
      <motion.div className="text-3xl" style={{ opacity: opacityRight }}>
        Menu
      </motion.div>
    </div>
  );
};

export default Index;
