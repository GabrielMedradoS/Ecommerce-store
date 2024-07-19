import SkeletonBillboard from "@/components/skeleton-billboard";
import SkeletonCard from "@/components/skeleton-card";
import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <SkeletonBillboard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}
