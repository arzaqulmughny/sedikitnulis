"use client";

import { useRef } from "react";
import Button from "@/src/components/ui/Button";
import {
  PersonOutlined,
  ReplyAllOutlined,
  ReplyOutlined,
  SendOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

const MAX_ROWS = 5;
const LINE_HEIGHT = 50; // text-sm = 0.875rem ≈ 20px

const CommentSection = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const maxHeight = MAX_ROWS * LINE_HEIGHT;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  };

  return (
    <>
      <section>
        <h2
          className="text-paragraph font-bold text-sm lg:text-lg leading-0 flex items-center gap-x-2"
          id="comment"
        >
          Komentar
          <span className="bg-primary/10 rounded-full text-[10px] w-5 h-5 flex items-center justify-center leading-0 font-bold">
            12
          </span>
        </h2>

        <div className="flex gap-x-4 bg-white p-4 rounded-xl shadow-xl/5 shadow-black/30 mt-6">
          <div className="bg-primary/10 w-6 min-w-6 h-6 min-h-6 flex items-center justify-center rounded-full">
            <PersonOutlined sx={{ fontSize: 12 }} />
          </div>

          <div className="flex flex-col gap-y-8 items-end w-full">
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              placeholder="Apa pendapatmu tentang tulisan ini?"
              className="w-full resize-none border-b border-b-paragraph/5 text-xs lg:text-sm focus:outline-none text-paragraph overflow-y-auto scrollbar-none"
            ></textarea>

            <Button className="flex items-center gap-x-2">
              <SendOutlined fontSize="inherit" />
              Kirim
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-4 mt-10">
            <div className="bg-primary/10 w-6 min-w-6 h-6 min-h-6 flex items-center justify-center rounded-full">
              <PersonOutlined sx={{ fontSize: 12 }} />
            </div>
            <div className="bg-white p-3.5 rounded-xl shadow-xl/5 shadow-black/30 w-full">
              <div className="flex gap-x-4">
                <h3 className="text-xs font-bold">@arza_dev</h3>
                <p className="text-xs text-paragraph/70">2 jam yang lalu</p>
              </div>

              <p className="text-xs lg:text-sm text-paragraph/79 mt-2">
                Penjelasan tentang komponen sangat mudah dipahami. Btw, apakah
                akan ada tulisan lanjutan tentang State Management?
              </p>

              <div className="mt-8 flex gap-x-3">
                <button className="flex items-center gap-x-1">
                  <ThumbUpOutlined
                    className="text-paragraph/70"
                    fontSize="inherit"
                    sx={{ fontSize: 12 }}
                  />
                  <p className="text-xs text-paragraph/70">Suka</p>
                </button>
                <button className="flex items-center gap-x-1">
                  <ReplyOutlined
                    className="text-paragraph/70"
                    fontSize="inherit"
                    sx={{ fontSize: 12 }}
                  />
                  <p className="text-xs text-paragraph/70">Balas</p>
                </button>
              </div>
            </div>
          </div>

          <div className="border-l border-l-paragraph/20 ml-11 pl-4 mt-4 flex gap-x-4">
            <div className="bg-primary/10 w-6 min-w-6 h-6 min-h-6 flex items-center justify-center rounded-full">
              <PersonOutlined sx={{ fontSize: 12 }} />
            </div>

            <div className="bg-primary/10 rounded-md p-3 w-full">
              <div className="flex gap-x-4">
                <h3 className="text-xs font-bold">@arza_dev</h3>
                <p className="text-xs text-paragraph/70">2 jam yang lalu</p>
              </div>
              <div className="mt-2">
                <p className="text-paragraph text-xs lg:text-sm">
                  Terima kasih! Ya, tulisan tentang State Management sedang saya
                  siapkan, tunggu saja ya.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-x-3">
                <button className="flex items-center gap-x-1">
                  <ThumbUpOutlined
                    className="text-paragraph/70"
                    fontSize="inherit"
                    sx={{ fontSize: 12 }}
                  />
                  <p className="text-xs text-paragraph/70">Suka</p>
                </button>

                <button className="flex items-center gap-x-1">
                  <ReplyOutlined
                    className="text-paragraph/70"
                    fontSize="inherit"
                    sx={{ fontSize: 12 }}
                  />
                  <p className="text-xs text-paragraph/70">Balas</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
