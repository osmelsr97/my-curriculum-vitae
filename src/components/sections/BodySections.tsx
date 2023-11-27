import { ContentSection } from "@/vite-env";

export default function BodySections({ items, title }: ContentSection) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      {items.map(({ id, date, title, description }) => (
        <div key={id}>
          {date && <h3 className="font-bold">{date}</h3>}
          {title && <h2 className="font-bold">{title}</h2>}
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
