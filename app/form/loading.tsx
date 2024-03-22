import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      Loading Posts ...
      <ul>
        {Array.from(Array(20).keys()).map((i) => (
          <li key={i}>
            <Skeleton className={`w-[200] h-[200]`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
