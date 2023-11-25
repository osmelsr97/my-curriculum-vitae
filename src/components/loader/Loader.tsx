import { twMerge } from "tailwind-merge";

interface ILoaderProps {
  className?: string;
}

export default function Loader({ className }: ILoaderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-56 h-w-56", className, "m-auto block ")}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="0" fill="none" stroke="#608c9a">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1.075268817204301s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          calcMode="spline"
          dur="1.075268817204301s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#a44767">
        <animate
          attributeName="r"
          begin="-0.5376344086021505s"
          calcMode="spline"
          dur="1.075268817204301s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.5376344086021505s"
          calcMode="spline"
          dur="1.075268817204301s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}
