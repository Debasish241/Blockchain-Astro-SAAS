import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline-[6px] outline outline-fuchsia-500/10 -outline-offset-[6px]  ",
        className
      )}
    >
      {children}
    </div>
  );
};
