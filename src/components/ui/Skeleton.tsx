import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#0c1424]/80 rounded-sm border border-[#c5a059]/10 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-[#c5a059]/10 to-transparent" />
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="p-6 border border-[#c5a059]/20 bg-[#080d17] space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="w-10 h-10" />
        <Skeleton className="w-20 h-5" />
      </div>
      <Skeleton className="w-3/4 h-6" />
      <Skeleton className="w-full h-12" />
      <div className="space-y-2 pt-2 border-t border-[#c5a059]/10">
        <Skeleton className="w-5/6 h-4" />
        <Skeleton className="w-4/6 h-4" />
      </div>
      <Skeleton className="w-full h-10 mt-4" />
    </div>
  );
};

export const SkeletonSection: React.FC<{ cardsCount?: number }> = ({ cardsCount = 3 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 animate-pulse">
      <div className="space-y-3">
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-72 h-8" />
        <Skeleton className="w-96 h-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(cardsCount)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};
