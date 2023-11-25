import { twMerge } from "tailwind-merge";

interface IAvatarProps {
  src: string;
  className?: string;
}

export default function Avatar({ src, className }: IAvatarProps) {
  return (
    <img
      className={twMerge("rounded-full w-48 h-w-48", className)}
      alt="profile-image"
      src={src}
    />
  );
}
