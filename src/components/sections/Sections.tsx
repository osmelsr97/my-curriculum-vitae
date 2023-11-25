import { ISection } from "@/vite-env";

export function AsideSectionItem({ title, items }: ISection) {
  return (
    <div className="relative">
      <span className="flex text-white text-2xl items-center justify-center p-2 rounded-tr-full rounded-br-full w-full absolute -left-6 bg-hoki-100">
        {title}
      </span>
      <ul className="mt-16 px-6">
        {!!items.length &&
          items.map(({ id, title }) => (
            <li key={id}>
              <span className="text-white">{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
