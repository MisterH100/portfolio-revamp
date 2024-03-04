import * as React from "react";
import { cn } from "@/lib/utils";

export const Circle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute w-[400px] h-[400px] rounded-full bg-[#c62df3]",
      className
    )}
    {...props}
  ></div>
));
