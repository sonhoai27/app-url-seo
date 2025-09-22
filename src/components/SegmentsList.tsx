export type SegmentsListProps = {
  segments: string[];
  emptyLabel?: string;
};

export default function SegmentsList({
  segments,
  emptyLabel = "No dynamic segments were provided.",
}: SegmentsListProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      {segments.length > 0 ? (
        <ul className="list-decimal pl-5 space-y-1">
          {segments.map((segment, index) => (
            <li key={`${segment}-${index}`} className="text-sm font-mono">
              <span className="text-slate-600">[{index}]</span> {segment}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-600">{emptyLabel}</p>
      )}
    </div>
  );
}
