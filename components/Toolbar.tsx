import React, { MouseEvent, useCallback } from "react";
import { Editor } from "@tiptap/react";
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
import clsx from "clsx";
import { commands } from "@/constants";

// const commands = [
//   {
//     icon: <Bold className="size-5" />,
//     command: "bold",
//   },
//   {
//     icon: <Italic className="size-5" />,
//     command: "italic",
//   },
//   {
//     icon: <Strikethrough className="size-5" />,
//     command: "strike",
//   },
//   {
//     icon: <Underline className="size-5" />,
//     command: "underline",
//   },
//   {
//     icon: <List className="size-5" />,
//     command: "bulletList",
//   },
//   {
//     icon: <ListOrdered className="size-5" />,
//     command: "orderedList",
//   },
//   {
//     icon: <Quote className="size-5" />,
//     command: "blockquote",
//   },
//   {
//     icon: <Code className="size-5" />,
//     command: "code",
//   },
//   // {
//   //   icon: <Heading1 className="size-5" />,
//   //   command: "heading",
//   // },
//   {
//     icon: <Heading2 className="size-5" />,
//     command: "heading",
//   },
//   // {
//   //   icon: <Heading3 className="size-5" />,
//   //   command: "heading",
//   // },
//   {
//     icon: <AlignLeft className="size-5" />,
//     command: "left",
//   },
//   {
//     icon: <AlignCenter className="size-5" />,
//     command: "center",
//   },
//   {
//     icon: <AlignJustify className="size-5" />,
//     command: "justify",
//   },
//   {
//     icon: <AlignRight className="size-5" />,
//     command: "right",
//   },
//   {
//     icon: <Link className="size-5" />,
//     command: "link",
//   },
//   {
//     // eslint-disable-next-line jsx-a11y/alt-text
//     icon: <Image className="size-5" />,
//     command: "image",
//   },
//   {
//     icon: <Undo className="size-5" />,
//     command: "undo",
//   },
//   {
//     icon: <Redo className="size-5" />,
//     command: "redo",
//   },
// ];

const Toolbar = ({
  content,
  editor,
}: {
  editor: Editor | null;
  content: string;
}) => {
  // Upload image
  const addImage = useCallback(() => {
    const input = window.document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.addEventListener("change", () => {
      const files = input.files;
      if (files) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = function () {
          editor
            ?.chain()
            .focus()
            .setImage({ src: reader.result as string })
            .run();
        };
        reader.readAsDataURL(file);
      }
    });
  }, [editor]);

  // Add and update link
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor)
    return (
      <div className="border-gray-700 border rounded-lg w-full min-h-96" />
    );

  // Handle click on the button
  const handleClick = (e: MouseEvent<HTMLButtonElement>, command: string) => {
    e.preventDefault();
    const base = editor.chain().focus();
    switch (command) {
      case "bold":
        base.toggleBold().run();
        break;

      case "italic":
        base.toggleItalic().run();
        break;

      case "strike":
        base.toggleStrike().run();
        break;

      case "code":
        base.toggleCode().run();
        break;

      case "blockquote":
        base.toggleBlockquote().run();
        break;

      case "underline":
        base.toggleUnderline().run();
        break;

      case "bulletList":
        base.toggleBulletList().run();
        break;

      case "orderedList":
        base.toggleOrderedList().run();
        break;

      case "heading":
        base.toggleHeading({ level: 2 }).run();
        break;

      case "undo":
        base.undo().run();
        break;

      case "redo":
        base.redo().run();
        break;

      case "link":
        setLink();
        break;

      case "left":
        base.setTextAlign("left").run();
        break;

      case "justify":
        base.setTextAlign("justify").run();
        break;

      case "center":
        base.setTextAlign("center").run();
        break;

      case "right":
        base.setTextAlign("right").run();
        break;

      default:
        addImage();
        break;
    }
  };

  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700 bg-gray-800/20">
      <div className="flex justify-start items-center gap-5 w-full flex-wrap">
        {commands.map(({ Icon, command }, idx) => (
          <button
            key={idx}
            onClick={(e) => handleClick(e, command)}
            className={clsx(
              ["undo", "redo"].includes(command)
                ? "text-sky-400"
                : editor.isActive(command) ||
                  editor.isActive({ textAlign: command })
                ? "text-sky-400"
                : "text-gray-700",
              "disabled:text-gray-700"
            )}
            disabled={
              (command === "undo" && !editor.can().undo()) ||
              (command === "redo" && !editor.can().redo())
            }
          >
            <Icon className="size-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
