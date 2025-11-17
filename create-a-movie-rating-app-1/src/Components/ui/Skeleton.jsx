export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}

// Skeleton específico para Movie Card
export function MovieSkeleton() {
  return (
    <div className="movie-card">
      <Skeleton className="movie-poster-wrapper h-96" />
      
      <div className="movie-info">
        <Skeleton className="h-7 w-3/4 mb-3" />
        
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        
        <Skeleton className="h-5 w-1/2 mb-4" />
        
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
}