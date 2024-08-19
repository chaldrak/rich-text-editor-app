import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Link,
  Image,
  AlignLeft,
  AlignCenter,
  AlignJustify,
  AlignRight,
} from "lucide-react";

export const commands = [
  {
    Icon: Bold,
    command: "bold",
  },
  {
    Icon: Italic,
    command: "italic",
  },
  {
    Icon: Strikethrough,
    command: "strike",
  },
  {
    Icon: Underline,
    command: "underline",
  },
  {
    Icon: List,
    command: "bulletList",
  },
  {
    Icon: ListOrdered,
    command: "orderedList",
  },
  {
    Icon: Quote,
    command: "blockquote",
  },
  {
    Icon: Code,
    command: "code",
  },
  {
    Icon: Heading2,
    command: "heading",
  },
  {
    Icon: AlignLeft,
    command: "left",
  },
  {
    Icon: AlignCenter,
    command: "center",
  },
  {
    Icon: AlignJustify,
    command: "justify",
  },
  {
    Icon: AlignRight,
    command: "right",
  },
  {
    Icon: Link,
    command: "link",
  },
  {
    Icon: Image,
    command: "image",
  },
  {
    Icon: Undo,
    command: "undo",
  },
  {
    Icon: Redo,
    command: "redo",
  },
];
