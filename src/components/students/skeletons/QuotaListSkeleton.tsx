"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function QuotaListSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-3 py-3 rounded-lg border"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200" />
            <Skeleton className="h-4 w-48 bg-gray-200" />
          </div>
          <Skeleton className="h-4 w-20 bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
