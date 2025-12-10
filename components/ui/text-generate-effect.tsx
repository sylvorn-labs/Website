"use client";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, JSX } from "react";

import { cn } from "@/lib/utils";

const AnimatedWord = ({
  word,
  index,
  totalWords,
  scrollYProgress,
  filter,
}: {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
  filter: boolean;
}) => {
  // Calculate when this word should start and finish animating
  const start = index / totalWords;
  const end = (index + 1) / totalWords;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const blurValue = useTransform(
    scrollYProgress,
    [start, end],
    filter ? [10, 0] : [0, 0],
  );

  return (
    <motion.span
      className="dark:text-white text-black inline-block"
      style={{
        opacity,
        filter: filter ? blurValue : "none",
      }}
    >
      {word}{" "}
    </motion.span>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  as: Tag = "p",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const wordsArray = words.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <Tag className={cn("font-bold", className)}>
      <motion.div ref={ref}>
        {wordsArray.map((word, idx) => (
          <AnimatedWord
            key={word + idx}
            word={word}
            index={idx}
            totalWords={wordsArray.length}
            scrollYProgress={scrollYProgress}
            filter={filter}
          />
        ))}
      </motion.div>
    </Tag>
  );
};
