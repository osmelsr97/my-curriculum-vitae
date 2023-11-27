import { ISection } from "@/vite-env";
import { IconsByName } from "../icons";
import ItemWithScore from "../itemWithScore/ItemsWithScore";

export function AsideSectionItem({ title, items }: ISection) {
  return (
    <div className="relative">
      <span className="flex text-white text-2xl items-center justify-center p-2 rounded-tr-full rounded-br-full w-full absolute -left-6 bg-hoki-100">
        {title}
      </span>
      <ul className="mt-16 px-6">
        {!!items.length &&
          items.map(({ id, icon, title, value, link }) => (
            <li key={id} className="flex-1 gap-2 items-end p-1">
              {typeof value === "number" ? (
                <ItemWithScore title={title} score={value} />
              ) : (
                <div className="flex gap-2 items-center">
                  {IconsByName?.[icon as keyof typeof IconsByName] ?? null}
                  {link ? (
                    <a className="text-hoki-100 cursor-pointer" href={link}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-white">{value}</span>
                  )}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
