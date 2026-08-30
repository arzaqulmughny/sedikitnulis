"use client";

import AuthInput from "@/src/components/AuthInput";
import {
  ArrowForward,
  ArrowRight,
  ArrowRightAltOutlined,
  CheckCircleOutlineOutlined,
  CloseOutlined,
  LockOutlined,
  LockResetOutlined,
  MailOutlined,
  SearchOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

type stepEnum = "input" | "preferences" | "confirm";

const topics = ["Programming", "Career", "Business", "Finance", "Technology"];

const Page = () => {
  const [step, setStep] = useState<stepEnum>("input");

  const getStepIndicatorWidth = (step: stepEnum): string => {
    switch (step) {
      case "input":
        return "30%";
      case "preferences":
        return "60%";
      case "confirm":
        return "90%";
      default:
        return "0%";
    }
  };

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const selectTopic = (topic: string) => {
    setSelectedTopics([...selectedTopics, topic]);
  };

  const unSelectTopic = (topic: string) => {
    setSelectedTopics(selectedTopics.filter((topicItem) => topicItem != topic));
  };

  const availableTopics = topics.filter(
    (topic) => !selectedTopics.includes(topic),
  );

  return (
    <>
      <div className="flex flex-col items-center gap-y-5 -mt-12">
        <div className="flex items-center gap-x-2">
          <img src="/assets/images/sedikitnulis.png" alt="" className="w-5.5" />
          <p className="text-primary font-bold">SedikitNulis</p>
        </div>

        <div className="bg-white mx-auto rounded-xl px-10 py-14 border border-card-border shadow-login w-120 relative overflow-hidden h-fit">
          <div
            className="h-1 absolute top-0 left-0 bg-gradient-primary-90 duration-1000"
            style={{ width: getStepIndicatorWidth(step) }}
          />

          {step == "input" && (
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col items-center gap-y-2">
                <p className="text-paragraph text-sm uppercase font-bold">
                  Langkah 1 Dari 3
                </p>
                <h1 className="text-heading-black font-bold text-3xl">
                  Buat Akunmu
                </h1>
                <h2 className="text-paragraph text-sm text-center">
                  Mulai simpan dan bagikan hal-hal yang kamu <br /> pelajari.
                </h2>
              </div>

              {/* <MailOutlined className="text-paragraph" /> */}
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                  <AuthInput
                    label="Email"
                    icon={<MailOutlined className="text-paragraph" />}
                    placeholder="nama@email.com"
                    type="email"
                  />
                  <AuthInput
                    label="Kata Sandi"
                    icon={<LockOutlined className="text-paragraph" />}
                    placeholder="Minimal 8 karakter"
                    type="password"
                  />
                  <AuthInput
                    label="Konfirmasi Kata Sandi"
                    icon={<LockResetOutlined className="text-paragraph" />}
                    placeholder="Ulangi kata sandi"
                    type="password"
                  />
                </div>

                <div className="flex flex-col gap-y-7">
                  <button
                    type="button"
                    onClick={() => setStep("preferences")}
                    className="bg-gradient-primary w-full text-white flex justify-center gap-x-1 items-center px-4 py-2.5 rounded-md cursor-pointer shadow-primary-hover duration-300"
                  >
                    <p className="text-sm font-semibold">Lanjutkan</p>{" "}
                    <ArrowForward className="text-white" fontSize="inherit" />
                  </button>

                  <p className="text-center text-sm text-paragraph">
                    Sudah punya akun?{" "}
                    <Link href="/login" className="text-primary">
                      Masuk
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          {step == "preferences" && (
            <>
              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-y-10">
                  <div className="flex flex-col items-center gap-y-2">
                    <p className="text-paragraph text-sm uppercase font-bold">
                      Langkah 2 Dari 3
                    </p>
                    <h1 className="text-heading-black font-bold text-3xl text-center">
                      Topik apa yang akan kamu pelajari?
                    </h1>
                    <h2 className="text-paragraph text-sm text-center">
                      Pilih beberapa topik agar kami bisa menampilkan catatan
                      yang relevan untukmu.
                    </h2>
                  </div>

                  <AuthInput
                    type="text"
                    label=""
                    placeholder="Cari topik..."
                    icon={<SearchOutlined />}
                  />
                </div>

                {selectedTopics && selectedTopics.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-sm text-paragraph font-medium flex items-center gap-x-2">
                      <CheckCircleOutlineOutlined
                        className="text-green-700"
                        fontSize="small"
                      />{" "}
                      Topik pilihanmu
                    </h3>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selectedTopics.map((topic, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => unSelectTopic(topic)}
                            className="bg-primary px-4 py-1.5 rounded-2xl text-paragraph text-sm flex items-center gap-x-2 cursor-pointer"
                          >
                            {topic}
                            <CloseOutlined fontSize="inherit" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {availableTopics && availableTopics.length > 0 && (
                  <>
                    <div className="mt-10 duration-300">
                      <h3 className="text-sm text-paragraph font-medium flex items-center gap-x-2">
                        <TrendingUpOutlined
                          className="text-green-700"
                          fontSize="small"
                        />
                        Topik populer
                      </h3>

                      <ul className="mt-3 flex flex-wrap gap-2">
                        {availableTopics.map((topic, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              onClick={() => selectTopic(topic)}
                              className="bg-primary/15 border border-primary/20 px-4 py-1.5 rounded-2xl text-paragraph text-sm flex items-center gap-x-2 cursor-pointer"
                            >
                              {topic}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <div className="mt-10">
                  <button
                    type="button"
                    onClick={() => setStep("confirm")}
                    className="bg-gradient-primary w-fit ml-auto text-white flex justify-center gap-x-1 items-center px-4 py-2.5 rounded-md cursor-pointer shadow-primary-hover duration-300"
                  >
                    <p className="text-sm font-semibold">Lanjutkan</p>{" "}
                    <ArrowForward className="text-white" fontSize="inherit" />
                  </button>
                </div>
              </div>
            </>
          )}

          {step == "confirm" && (
            <>
              <div className="flex flex-col items-center gap-y-2">
                <p className="text-paragraph text-sm uppercase font-bold">
                  Langkah 3 Dari 3
                </p>
                <h1 className="text-heading-black font-bold text-3xl">
                  Siap untuk mulai tumbuh?
                </h1>
                <h2 className="text-paragraph text-sm text-center">
                  Tinggal satu langkah lagi untuk memulai perjalanan belajarmu.
                </h2>
              </div>

              <div className="mt-10 flex flex-col gap-y-10 h-full">
                <ul className="flex flex-col gap-y-3">
                  <li className="w-full border flex gap-x-5 p-3 rounded-md border-card-border">
                    <div className="bg-primary/15 w-9 aspect-square h-fit flex items-center justify-center rounded-full">
                      <MailOutlined
                        className="text-green-700"
                        fontSize="small"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-paragraph">
                        Email
                      </p>
                      <p className="text-sm text-paragraph">user@example.com</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep("input")}
                      className="ml-auto text-green-700 text-xs font-medium px-3 mb-auto cursor-pointer hover:underline"
                    >
                      Ubah
                    </button>
                  </li>

                  <li className="w-full border flex gap-x-5 p-3 rounded-md border-card-border">
                    <div className="bg-primary/15 w-9 aspect-square h-fit flex items-center justify-center rounded-full">
                      <MailOutlined
                        className="text-green-700"
                        fontSize="small"
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-sm font-medium text-paragraph">
                        Topik Pilihan
                      </p>
                      {selectedTopics && selectedTopics.length > 0 && (
                        <ul>
                          {selectedTopics.map((topic, index) => (
                            <div className="bg-primary/15 w-fit rounded-xl text-xs px-2 py-1">
                              {topic}
                            </div>
                          ))}
                        </ul>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep("preferences")}
                      className="ml-auto text-green-700 text-xs font-medium px-3 mb-auto cursor-pointer hover:underline"
                    >
                      Ubah
                    </button>
                  </li>
                </ul>

                <p className="text-center text=no text-xs">
                  Dengan menekan tombol di bawah, kamu menyetujui{" "}
                  <a href="#" className="text-green-700 underline">
                    ketentuan layanan kami
                  </a>
                  .
                </p>

                <button
                  type="button"
                  onClick={() => setStep("input")}
                  className="bg-gradient-primary w-fit ml-auto text-white flex justify-center gap-x-1 items-center px-4 py-2.5 rounded-md cursor-pointer shadow-primary-hover duration-300"
                >
                  <p className="text-sm font-semibold">Lanjutkan</p>{" "}
                  <ArrowForward className="text-white" fontSize="inherit" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
