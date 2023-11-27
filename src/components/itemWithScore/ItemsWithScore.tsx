import { twMerge } from "tailwind-merge";

interface ItemWithScoreProps {
  title: string;
  score: number;
}

const MAX_SCORE = 5;

export default function ItemWithScore({ title, score }: ItemWithScoreProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white">{title}</span>
      <ul className="flex gap-2">
        {Array.from({ length: MAX_SCORE }).map((_, index) => (
          <li
            key={index}
            className={twMerge(
              "w-6 h-2 rounded-md",
              index < score && "bg-white"
            )}
          />
        ))}
      </ul>
    </div>
  );
}
