import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="rounded-xl border p-3 space-y-4 dark:border-[hsl(var(--border))]">
      {/* Images */}
      <Skeleton className="aspect-square rounded-xl relative" />
      {/* Description */}
      <div>
        <Skeleton className="h-6 flex-grow" />
        <Skeleton className="h-4 w-1/2 mt-4" />
      </div>
      {/* Price */}
      <Skeleton className="h-6 w-1/2" />
    </div>
  );
}
