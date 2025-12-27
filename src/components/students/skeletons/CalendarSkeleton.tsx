"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function CalendarSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex justify-between mb-4">
        <Skeleton className="h-5 w-32 bg-gray-200" />
        <Skeleton className="h-5 w-16 bg-gray-200" />
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full bg-gray-200" />
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-md bg-gray-200" />
        ))}
      </div>
    </div>
  );
}
