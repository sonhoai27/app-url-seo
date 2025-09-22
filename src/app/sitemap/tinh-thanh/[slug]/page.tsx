export default function TinhThanhSitemapPage({ params }: { params: { slug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tỉnh Thành Sitemap Demo</h1>
      <p>Slug: {params.slug}</p>
      <p>This route demonstrates the rewrite:</p>
      <p className="font-mono bg-gray-100 p-2 rounded">
        /sitemap/tinh-thanh/hanoi.xml → /sitemap/tinh-thanh/hanoi
      </p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Sample XML content would be generated here:</h2>
        <pre className="bg-gray-100 p-4 rounded mt-2 text-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/tinh-${params.slug}</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`}
        </pre>
      </div>
    </div>
  );
}
