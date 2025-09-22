import VariableDisplay from "@/components/VariableDisplay";
import SegmentsList from "@/components/SegmentsList";
import type { PageSearchParams } from "@/types/next";

type ThuongMaiPageProps = {
  params: {
    slug: string;
    slug1: string;
  };
  searchParams: PageSearchParams;
};

export default function ThuongMaiRewritePage({ params, searchParams }: ThuongMaiPageProps) {
  const variables = {
    slug: params.slug,
    slug1: params.slug1,
  };

  const segments = [params.slug, params.slug1];

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Thương mại rewrite handler</h1>
        <p className="text-gray-600">Source pattern: /:slug/:slug1</p>
      </div>

      <VariableDisplay variables={variables} searchParams={searchParams} />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Captured segments</h2>
        <SegmentsList segments={segments} />
      </div>
    </div>
  );
}
