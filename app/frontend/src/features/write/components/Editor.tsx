"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import "./editor.styles.css";

const extensions = [
  TextStyleKit,
  StarterKit,
  Placeholder.configure({
    placeholder: "Mulai menulis artikel di sini...",
  }),
];

const Editor = () => {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions,

    content: "",

    immediatelyRender: false,
  });

  return (
    <>
      <div className="lg:flex gap-x-8 max-w-325 mx-auto w-full">
        <div className="lg:w-2/3 lg:shrink-0 border border-paragraph/5 lg:bg-white">
          <div className="sticky lg:top-15.5 z-9 top-14.5">
            {/* Toolbar */}
            <Toolbar editor={editor} />
          </div>

          <div className="mx-auto w-full max-w-325">
            {/* Title Input */}
            <div className="px-5 pt-6 pb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && title.trim()) {
                    e.preventDefault();
                    editor?.commands.focus();
                  }
                }}
                placeholder="Judul Artikel"
                className="w-full text-3xl font-bold text-gray-900 placeholder-gray-300 outline-none border-none focus:ring-0"
              />
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="w-1/3 sticky top-15.5 self-start right-0 hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Editor;
