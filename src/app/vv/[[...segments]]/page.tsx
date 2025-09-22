import VariableDisplay from "@/components/VariableDisplay";
import SegmentsList from "@/components/SegmentsList";
import type { PageSearchParams } from "@/types/next";

type VvPageProps = {
  params: {
    segments?: string[];
  };
  searchParams: PageSearchParams;
};

type CaseResult = {
  title: string;
  description: string;
  sourcePattern: string;
  variables: Record<string, string> | null;
};

const districtPrefixes = new Set(["quan", "huyen", "thi-xa", "thanh-pho", "tp"]);
const provincePrefixes = new Set(["tp", "tinh", "thanh-pho"]);

const hasDistrictPrefix = (value: string) => districtPrefixes.has(value);
const hasProvincePrefix = (value: string) => provincePrefixes.has(value);

const mapSegments = (segments: string[], startIndex = 0) =>
  segments.reduce<Record<string, string>>((acc, value, index) => {
    acc[`segment${startIndex + index}`] = value;
    return acc;
  }, {});

const parseTransportationSegments = (segments: string[]): CaseResult => {
  if (segments.length === 1) {
    return {
      title: "Transportation landing rewrite",
      description: "Matches the /van-chuyen source URL with no extra parameters.",
      sourcePattern: "/van-chuyen",
      variables: null,
    };
  }

  if (segments.length === 3) {
    const [, province1, province1Value] = segments;

    return {
      title: "Transportation single-endpoint rewrite",
      description: 'Handles sources such as "/van-chuyen-tu-Hanoi" or "/van-chuyen-di-HCM".',
      sourcePattern: "/van-chuyen-:province1(tu|di)-:province1Value",
      variables: {
        province1,
        province1Value,
      },
    };
  }

  if (segments.length === 5) {
    const [, province1, province1Value, province2, province2Value] = segments;

    return {
      title: "Transportation full-route rewrite",
      description: 'Handles sources such as "/van-chuyen-tu-Hanoi-di-HCM".',
      sourcePattern: "/van-chuyen-:province1(tu)-:province1Value-:province2(di)-:province2Value",
      variables: {
        province1,
        province1Value,
        province2,
        province2Value,
      },
    };
  }

  return {
    title: "Transportation rewrite (unrecognized pattern)",
    description:
      "The provided /vv/van-chuyen segments do not match any rewrite declared in next.config.ts.",
    sourcePattern:
      "/van-chuyen, /van-chuyen-:province1(tu|di)-:province1Value, or /van-chuyen-:province1(tu)-:province1Value-:province2(di)-:province2Value",
    variables: mapSegments(segments.slice(1), 1),
  };
};

const parseVvSegments = (segments: string[]): CaseResult => {
  if (segments.length === 0) {
    return {
      title: "Direct /vv access",
      description: "No rewrite matched because there are no segments after /vv.",
      sourcePattern: "Direct visit to /vv",
      variables: null,
    };
  }

  if (segments[0] === "van-chuyen") {
    return parseTransportationSegments(segments);
  }

  if (segments.length === 1) {
    const [category] = segments;

    return {
      title: "Category rewrite",
      description: 'Matches source paths like "/nha-dat" or "/oto".',
      sourcePattern: "/:category",
      variables: { category },
    };
  }

  if (segments.length === 2) {
    const [prefix, value] = segments;

    if (hasProvincePrefix(prefix)) {
      return {
        title: "Province rewrite",
        description: 'Matches source paths like "/tinh-Hanoi" or "/tp-HCM".',
        sourcePattern: "/:province(tp|tinh|thanh-pho)-:provinceValue",
        variables: {
          province: prefix,
          provinceValue: value,
        },
      };
    }

    if (hasDistrictPrefix(prefix)) {
      return {
        title: "District rewrite",
        description: 'Matches source paths like "/quan-BaDinh" or "/huyen-HoaiDuc".',
        sourcePattern: "/:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue",
        variables: {
          district: prefix,
          districtValue: value,
        },
      };
    }
  }

  if (segments.length === 3) {
    const [category, qualifier, qualifierValue] = segments;

    if (hasProvincePrefix(qualifier)) {
      return {
        title: "Category + province rewrite",
        description: 'Matches source paths like "/nha-dat-tinh-Hanoi" or "/oto-tp-HCM".',
        sourcePattern: "/:category-:province(tp|tinh|thanh-pho)-:provinceValue",
        variables: {
          category,
          province: qualifier,
          provinceValue: qualifierValue,
        },
      };
    }

    if (hasDistrictPrefix(qualifier)) {
      return {
        title: "Category + district rewrite",
        description: 'Matches source paths like "/nha-dat-quan-BaDinh".',
        sourcePattern: "/:category-:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue",
        variables: {
          category,
          district: qualifier,
          districtValue: qualifierValue,
        },
      };
    }
  }

  if (segments.length === 4) {
    const [district, districtValue, province, provinceValue] = segments;

    if (hasDistrictPrefix(district) && hasProvincePrefix(province)) {
      return {
        title: "District + province rewrite",
        description: 'Matches source paths like "/quan-BaDinh-tinh-Hanoi".',
        sourcePattern:
          "/:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue-:province(tp|tinh|thanh-pho)-:provinceValue",
        variables: {
          district,
          districtValue,
          province,
          provinceValue,
        },
      };
    }
  }

  if (segments.length === 5) {
    const [category, district, districtValue, province, provinceValue] = segments;

    if (hasDistrictPrefix(district) && hasProvincePrefix(province)) {
      return {
        title: "Category + district + province rewrite",
        description: 'Matches source paths like "/nha-dat-quan-BaDinh-tinh-Hanoi".',
        sourcePattern:
          "/:category-:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue-:province(tp|tinh|thanh-pho)-:provinceValue",
        variables: {
          category,
          district,
          districtValue,
          province,
          provinceValue,
        },
      };
    }
  }

  return {
    title: "Unrecognized /vv rewrite",
    description: "The segments do not correspond to any rewrite defined in next.config.ts.",
    sourcePattern: "No matching rewrite pattern",
    variables: mapSegments(segments),
  };
};

export default function VvRewritePage({ params, searchParams }: VvPageProps) {
  const segments = params.segments ?? [];
  const caseResult = parseVvSegments(segments);

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">/vv Rewrite Inspector</h1>
        <p className="text-gray-600">
          Visualises the values captured by the rewrite patterns declared in next.config.ts for /vv routes.
        </p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{caseResult.title}</h2>
        <p className="text-gray-600">{caseResult.description}</p>
        <p className="font-mono text-sm bg-gray-100 border border-gray-200 rounded px-3 py-2 inline-block">
          {caseResult.sourcePattern}
        </p>
      </div>

      <VariableDisplay variables={caseResult.variables} searchParams={searchParams} />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Segments after /vv</h2>
        <SegmentsList segments={segments} emptyLabel="No segments were provided after /vv." />
      </div>
    </div>
  );
}
