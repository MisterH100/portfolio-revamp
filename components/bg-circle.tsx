import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Circle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
  <motion.div
    ref={ref}
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: "spring" }}
    className={cn(
      "absolute w-[300px] h-[300px] rounded-full bg-accent transition-all duration-150",
      className
    )}
  ></motion.div>
));
