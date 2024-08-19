"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";
import Toolbar from "./Toolbar";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import Image from "@tiptap/extension-image";

const TipTap = ({
  content,
  onChange,
}: {
  content: string;
  onChange: (s: string) => void;
}) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    editable: true,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Blockquote,
      Image,
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-base pt-4 rounded-bl-md rounded-br-md outline-none min-h-96 max-h-[500px] overflow-y-scroll",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });
  return (
    <div className="w-full [&_ul>li]:list-disc [&_ol>li]:list-decimal">
      <h1 className="text-center text-2xl md:text-3xl text-sky-400 font-mono uppercase mb-10">
        My rich text editor 🎉
      </h1>
      <Toolbar editor={editor} content={content} />
      <EditorContent editor={editor} />
      <p className="text-center mt-5">
        <small className="text-gray-400 font-[Arial] text-center">
          Build with ❤️ by{" "}
          <span className="underline italic text-sky-400">ledevmatheux</span>
        </small>
      </p>
    </div>
  );
};

export default TipTap;
