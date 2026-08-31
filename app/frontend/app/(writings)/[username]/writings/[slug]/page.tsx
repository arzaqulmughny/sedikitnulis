import TopicBadge from "@/src/components/ui/TopicBadge";
import MarkdownRenderer from "@/src/components/ui/MarkdownRenderer";
import { PersonOutlined } from "@mui/icons-material";
import ActionCard from "@/src/features/writings/components/ActionsCard";
import WritterInformation from "@/src/features/writings/components/WritterInformation";
import CommentSection from "@/src/features/writings/components/CommentSection";
import RelatedWritings from "@/src/features/writings/components/RelatedWritings";
import Footer from "@/src/features/writings/components/Footer";

const sampleMarkdown = `
## Apa itu React?

React adalah library JavaScript untuk membangun user interface. Dikembangkan oleh Facebook (Meta), React memungkinkan developer untuk membangun aplikasi web yang **interaktif** dan **cepat**.

### Instalasi

Untuk memulai project React baru, jalankan perintah berikut:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

### Komponen Pertama

Komponen adalah blok dasar dari aplikasi React. Berikut contoh komponen sederhana:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Halo, {name}!</h1>;
}

export default Welcome;
\`\`\`

### Hooks

React Hooks memungkinkan kita menggunakan state dan lifecycle dalam functional component:

\`\`\`jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Klik: {count}
    </button>
  );
}
\`\`\`

> **Tips:** Selalu gunakan hooks di level teratas dari component, jangan di dalam conditional atau loop.

### Perbandingan

| Fitur | React | Vue | Angular |
|-------|-------|-----|---------|
| Virtual DOM | ✅ | ✅ | ❌ |
| JSX | ✅ | ❌ | ❌ |
| TypeScript | ✅ | ✅ | ✅ |

Dengan memahami konsep dasar di atas, kamu sudah siap untuk mulai membangun aplikasi React!
`;

const Page = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-x-3">
          <TopicBadge size="small" variant="primary-muted">
            React
          </TopicBadge>

          <span className="w-1 h-1 inline-block bg-primary rounded-full overflow-hidden" />

          <p className="text-paragraph text-xs font-semibold">5 mnt baca</p>
        </div>

        <div className="mt-8">
          <h1 className="text-paragraph font-bold text-lg lg:text-2xl lg:font-extrabold">
            Belajar React untuk Pemula: Konsep Dasar
          </h1>

          <div className="mt-8 flex gap-x-3">
            <div className="bg-primary-muted w-12 h-12 flex items-center justify-center rounded-full">
              <PersonOutlined className="text-green-700" />
            </div>

            <div className="flex flex-col gap-y-1">
              <p className="text-xs lg:text-sm font-semibold text-paragraph">
                Lorem Ipsum
              </p>
              <p className="text-xs text-paragraph/60">2 jam yang lalu</p>
            </div>
          </div>

          <div className="mt-8 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://placehold.co/1600x900"
              alt=""
            />
          </div>

          <div className="mt-8">
            <MarkdownRenderer content={sampleMarkdown} />
          </div>

          <div className="mt-8 lg:hidden">
            <ActionCard />
          </div>

          <div className="mt-8 lg:hidden">
            <WritterInformation />
          </div>

          <div className="mt-10">
            <CommentSection />
          </div>

          <hr className="mt-12 border-paragraph/10" />

          <div className="mt-10">
            <RelatedWritings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
