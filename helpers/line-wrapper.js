import * as React from "react";
import { m } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

const LetterWrapper = ({ children, countIndex }) => {
  return (
    <div className="relative inline-block">
      <span style={{ opacity: 0 }}>{children}</span>
      <span className="absolute inset-0 w-full h-full overflow-hidden">
        <m.span
          className="inline-block"
          transition={{
            ease: [0.215, 0.61, 0.355, 1],
            duration: 0.8,
            delay: 0.03 * countIndex,
          }}
          initial={{ y: "-110%", scaleY: 1 }}
          animate={{ y: "0%", originX: 0.5, originY: 0.5, scaleY: 1 }}
        >
          {children}
        </m.span>
      </span>
    </div>
  );
};

const WordWrapper = ({ children }) => {
  return <span style={{ whiteSpace: "pre" }}>{children}</span>;
};

export const MemoizedLetterWrapper = React.memo(LetterWrapper);
export const MemoizedWordWrapper = React.memo(WordWrapper);

function linewrapper() {
  return (
    <>
      <SplitText
        LetterWrapper={MemoizedLetterWrapper}
        WordWrapper={MemoizedWordWrapper}
      >
        Dive into nature with bloom
      </SplitText>
    </>
  );
}
