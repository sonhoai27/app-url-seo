import VariableDisplay from "@/components/VariableDisplay";
import SegmentsList from "@/components/SegmentsList";
import type { PageSearchParams } from "@/types/next";

type VanChuyenSlugPageProps = {
  params: {
    slug: string;
  };
  searchParams: PageSearchParams;
};

export default function VanChuyenSlugPage({ params, searchParams }: VanChuyenSlugPageProps) {
  const variables = {
    slug: params.slug,
  };

  const segments = [params.slug];

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Vận chuyển rewrite handler</h1>
        <p className="text-gray-600">Source pattern: /van-chuyen/:slug</p>
      </div>

      <VariableDisplay variables={variables} searchParams={searchParams} />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Captured segments</h2>
        <SegmentsList segments={segments} />
      </div>
    </div>
  );
}
