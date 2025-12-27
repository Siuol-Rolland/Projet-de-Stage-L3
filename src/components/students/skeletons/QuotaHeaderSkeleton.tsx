"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function QuotaHeaderSkeleton() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="space-y-2">
        <Skeleton className="h-5 w-40 bg-gray-200" />
        <Skeleton className="h-4 w-56 bg-gray-200" />
      </div>
      <Skeleton className="h-6 w-20 bg-gray-200" />
    </header>
  );
}
