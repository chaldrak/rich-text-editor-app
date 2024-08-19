"use client";

import React, { useState } from "react";
import TipTap from "./TipTap";

const Editor = () => {
  const [content, setContent] = useState("");
  const handleChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <TipTap
      content={content}
      onChange={(content: string) => handleChange(content)}
    />
  );
};

export default Editor;
