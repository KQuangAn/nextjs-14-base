import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      {" "}
      Loading Posts ...
      <Skeleton className={`w-[200] h-[200]`} />{" "}
    </div>
  );
}
