import { AsideSectionItem, Avatar, Loader } from "@/components";
import { ICvData } from "@/vite-env";
import { useEffect, useState } from "react";

const Languages = {
  es: "Español",
  en: "English",
  pr: "Português",
};

export default function Home() {
  const [cvData, setCvData] = useState<ICvData>();
  const [language, setLanguage] = useState<keyof typeof Languages>("en");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("./cv-data.json");

        if (!response.ok) {
          throw new Error(`Request Error: ${response.status}`);
        }

        const data = await response.json();
        setCvData(data[language]);
      } catch (error) {
        throw new Error("Error fetching CV data");
      }
    })();
  }, [language]);

  if (!cvData) {
    return <Loader />;
  }

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      <header className="absolute top-0 w-full flex items-center justify-end pr-40 bg-hoki-300 h-64 rounded-tl-[100px] rounded-br-[100px]">
        <section>
          <h1 className="text-white text-5xl font-bold">
            {cvData.name} {cvData.lastName}
          </h1>
          <h3 className="text-white text-3xl">{cvData?.profession}</h3>
        </section>
      </header>
      <aside className="absolute z-10 left-24 top-0 h-full w-72 bg-hoki-500 mr-20">
        <section className="h-64 flex flex-col items-center justify-center">
          <Avatar src={cvData.profileImage} />
        </section>
        <section className="h-full flex flex-col gap-4 mt-4 relative">
          {!!cvData.sections.length &&
            cvData.sections.map((section) => (
              <AsideSectionItem key={section.id} {...section} />
            ))}
        </section>
      </aside>
      <section className="h-full pt-64 rounded-tl-[100px] bg-hoki-50/80 overflow-auto"></section>
    </div>
  );
}
