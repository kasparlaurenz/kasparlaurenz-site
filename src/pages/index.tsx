import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import { type NextPage } from "next";
import { createOpacityTransform } from "~/utils/create-opacity.motion";

import { Caveat } from "next/font/google";
import NavModal from "~/components/Navigation/Nav";
import { useState } from "react";
const font = Caveat({ weight: "400", subsets: ["latin"] });

const Index: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drag = useMotionValue(0);

  const outputRangeLeft = [0.7, 0, 0];
  const outputRangeRight = [0, 0, 0.7];

  const GuestOpacities: { [key: string]: MotionValue<number> } = {
    G: createOpacityTransform(drag, -500, 0, outputRangeLeft),
    u: createOpacityTransform(drag, -400, 0, outputRangeLeft),
    e: createOpacityTransform(drag, -300, 0, outputRangeLeft),
    s: createOpacityTransform(drag, -200, 0, outputRangeLeft),
    t: createOpacityTransform(drag, -100, 0, outputRangeLeft),
  };

  const MenuOpacities: { [key: string]: MotionValue<number> } = {
    M: createOpacityTransform(drag, 0, 100, outputRangeRight),
    e: createOpacityTransform(drag, 0, 250, outputRangeRight),
    n: createOpacityTransform(drag, 0, 400, outputRangeRight),
    u: createOpacityTransform(drag, 0, 500, outputRangeRight),
  };

  const close = () => setIsOpen(false);

  return (
    <div
      className={`${font.className} flex h-screen w-full items-center justify-between`}
    >
      <motion.div className="text-3xl">
        {Object.keys(GuestOpacities).map((letter) => (
          <motion.span key={letter} style={{ opacity: GuestOpacities[letter] }}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-3xl">Drag</div>
        <motion.div
          className="h-6 w-6 cursor-pointer rounded-full bg-yellow-500"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          drag
          dragSnapToOrigin
          style={{ x: drag }}
          dragElastic={0.2}
          dragConstraints={{ right: 500, left: -500, top: -50, bottom: 50 }}
          whileDrag={{ scale: 0.8 }}
          onDrag={(_, info) => {
            info.offset.x >= 450 && !isOpen && setIsOpen(true);
          }}
        ></motion.div>
      </div>
      <motion.div className="text-3xl">
        {Object.keys(MenuOpacities).map((letter) => (
          <motion.span key={letter} style={{ opacity: MenuOpacities[letter] }}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && <NavModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
