import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
  const { className, children, animate = false } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline-[6px]  relative",
        className
      )}
    >
      <motion.div
        animate={animate && { rotate: 360 }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "outline absolute inset-0 rounded-full border-t-4 border-[6px] border-transparent  outline-fuchsia-500/10 -outline-offset-[6px] ",
          animate && "border-t-fuchsia-500/30"
        )}
      ></motion.div>
      {children}
    </div>
  );
};
