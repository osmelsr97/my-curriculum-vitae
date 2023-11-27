import { useEffect, useState } from "react";
import { ICvData } from "@/vite-env";

import { CV_DATA, Languages } from "@/utils/data";
import { AsideSectionItem, Avatar, BodySections, Loader } from "@/components";

export default function Home() {
  const [cvData, setCvData] = useState<ICvData>();
  const [language, setLanguage] = useState<keyof typeof Languages>("en");

  useEffect(() => {
    setCvData(CV_DATA[language]);
  }, [language]);

  if (!cvData) {
    return <Loader />;
  }

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setLanguage(e.target.value as keyof typeof Languages);

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-hoki-50/80">
      <select
        className="absolute z-10 right-4 top-4 ml-4 bg-white rounded-md p-2"
        value={language}
        onChange={onChangeLanguage}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pr">Portugues</option>
      </select>
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
      <section className="flex flex-col gap-4 h-full pt-72 pr-4 ml-[400px] overflow-auto">
        {!!cvData.contentSections.length &&
          cvData.contentSections.map((section) => (
            <BodySections key={section.id} {...section} />
          ))}
      </section>
    </div>
  );
}
