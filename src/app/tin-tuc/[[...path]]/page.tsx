import VariableDisplay from "@/components/VariableDisplay";
import SegmentsList from "@/components/SegmentsList";
import type { PageSearchParams } from "@/types/next";
import { buildCatchAllVariables } from "@/utils/rewriteHelpers";

type TinTucPageProps = {
  params: {
    path?: string[];
  };
  searchParams: PageSearchParams;
};

export default function TinTucRewritePage({ params, searchParams }: TinTucPageProps) {
  const segments = params.path ?? [];
  const variables = buildCatchAllVariables(segments, "path");

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tin tức rewrite handler</h1>
        <p className="text-gray-600">Source pattern: /tin-tuc/:path*</p>
      </div>

      <VariableDisplay variables={variables} searchParams={searchParams} />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Captured segments</h2>
        <SegmentsList
          segments={segments}
          emptyLabel="Visit a URL like /tin-tuc/cong-nghe/ai to see captured segments."
        />
      </div>
    </div>
  );
}
