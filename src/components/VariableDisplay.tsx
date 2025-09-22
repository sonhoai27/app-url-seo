import React from 'react';

type VariableDisplayProps = {
  variables: { [key: string]: string } | null;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
};

async function ResolvedVariableDisplay({ variables, searchParams }: VariableDisplayProps) {
  // Unwrap the searchParams promise if it is one
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;

  return (
    <div className="space-y-6">
      {/* Route Variables Section */}
      {variables && Object.keys(variables).length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Route Variables:</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            {Object.entries(variables).map(([key, value]) => (
              <p key={`route-${key}`} className="text-sm font-mono">
                <span className="font-bold text-indigo-600">{key}:</span> {value}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Query Parameters Section */}
      {resolvedSearchParams && Object.keys(resolvedSearchParams).length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Query Parameters:</h2>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            {Object.entries(resolvedSearchParams).map(([key, value]) => (
              <p key={`query-${key}`} className="text-sm font-mono">
                <span className="font-bold text-blue-600">{key}:</span> {Array.isArray(value) ? value.join(', ') : value}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* No Variables Found */}
      {(!variables || Object.keys(variables).length === 0) && (!resolvedSearchParams || Object.keys(resolvedSearchParams).length === 0) && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-sm text-yellow-700">
            No route variables or query parameters found.
          </p>
        </div>
      )}
    </div>
  );
}

export default function VariableDisplay(props: VariableDisplayProps) {
  // In Next.js 15, searchParams can be a promise in Server Components.
  // We handle this by having an inner async component that awaits it.
  // The outer component remains synchronous.
  return <ResolvedVariableDisplay {...props} />;
}
