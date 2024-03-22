"use client";
// Inspired by https://github.dev/modulz/stitches-site code demo
import React from "react";

import CodeBlock, {CodeBlockProps} from "./code-block";

import {CopyButton} from "./copy-button";

export interface CodeWindowProps extends CodeBlockProps {
  showCopy?: boolean;
}

export const CodeWindow: React.FC<CodeWindowProps> = ({ showCopy, ...props}) => {
  const wrapperRef = React.useRef<HTMLPreElement>(null);

  return (
    <div className="relative">
      <CodeBlock ref={wrapperRef} {...props} />
      {showCopy && <CopyButton value={props.value} />}
    </div>
  );
};
