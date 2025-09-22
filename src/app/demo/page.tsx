export default function DemoPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">URL Rewrites Demo</h1>
      <p className="mb-6">This page demonstrates all the URL rewrite rules configured in next.config.ts</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Category Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/nha-dat" className="text-blue-600 hover:underline">/nha-dat</a> → /vv/nha-dat</li>
            <li><a href="/oto" className="text-blue-600 hover:underline">/oto</a> → /vv/oto</li>
            <li><a href="/thoi-trang" className="text-blue-600 hover:underline">/thoi-trang</a> → /vv/thoi-trang</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Province Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/tinh-Hanoi" className="text-blue-600 hover:underline">/tinh-Hanoi</a> → /vv/tinh/Hanoi</li>
            <li><a href="/tp-HCM" className="text-blue-600 hover:underline">/tp-HCM</a> → /vv/tp/HCM</li>
            <li><a href="/thanh-pho-DaNang" className="text-blue-600 hover:underline">/thanh-pho-DaNang</a> → /vv/thanh-pho/DaNang</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">District Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/quan-BaDinh" className="text-blue-600 hover:underline">/quan-BaDinh</a> → /vv/quan/BaDinh</li>
            <li><a href="/huyen-HoaiDuc" className="text-blue-600 hover:underline">/huyen-HoaiDuc</a> → /vv/huyen/HoaiDuc</li>
            <li><a href="/thi-xa-SonTay" className="text-blue-600 hover:underline">/thi-xa-SonTay</a> → /vv/thi-xa/SonTay</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Category + Province Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/nha-dat-tinh-Hanoi" className="text-blue-600 hover:underline">/nha-dat-tinh-Hanoi</a> → /vv/nha-dat/tinh/Hanoi</li>
            <li><a href="/oto-tp-HCM" className="text-blue-600 hover:underline">/oto-tp-HCM</a> → /vv/oto/tp/HCM</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Category + District Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/nha-dat-quan-BaDinh" className="text-blue-600 hover:underline">/nha-dat-quan-BaDinh</a> → /vv/nha-dat/quan/BaDinh</li>
            <li><a href="/oto-huyen-HoaiDuc" className="text-blue-600 hover:underline">/oto-huyen-HoaiDuc</a> → /vv/oto/huyen/HoaiDuc</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Complex Location Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/nha-dat-quan-BaDinh-tinh-Hanoi" className="text-blue-600 hover:underline">/nha-dat-quan-BaDinh-tinh-Hanoi</a> → /vv/nha-dat/quan/BaDinh/tinh/Hanoi</li>
            <li><a href="/oto-huyen-HoaiDuc-tinh-Hanoi" className="text-blue-600 hover:underline">/oto-huyen-HoaiDuc-tinh-Hanoi</a> → /vv/oto/huyen/HoaiDuc/tinh/Hanoi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transportation Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/van-chuyen" className="text-blue-600 hover:underline">/van-chuyen</a> → /vv/van-chuyen</li>
            <li><a href="/van-chuyen-tu-Hanoi" className="text-blue-600 hover:underline">/van-chuyen-tu-Hanoi</a> → /vv/van-chuyen/tu/Hanoi</li>
            <li><a href="/van-chuyen-di-HCM" className="text-blue-600 hover:underline">/van-chuyen-di-HCM</a> → /vv/van-chuyen/di/HCM</li>
            <li><a href="/van-chuyen-tu-Hanoi-di-HCM" className="text-blue-600 hover:underline">/van-chuyen-tu-Hanoi-di-HCM</a> → /vv/van-chuyen/tu/Hanoi/di/HCM</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sitemap Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/sitemap/tinh-thanh/hanoi.xml" className="text-blue-600 hover:underline">/sitemap/tinh-thanh/hanoi.xml</a> → /sitemap/tinh-thanh/hanoi</li>
            <li><a href="/sitemap/quan-huyen/badinh.xml" className="text-blue-600 hover:underline">/sitemap/quan-huyen/badinh.xml</a> → /sitemap/quan-huyen/badinh</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="/rss" className="text-blue-600 hover:underline">/rss</a> → /api/rss</li>
            <li><a href="/thuong-mai/slug1/slug2" className="text-blue-600 hover:underline">/slug1/slug2</a> → /thuong-mai/slug1/slug2</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
