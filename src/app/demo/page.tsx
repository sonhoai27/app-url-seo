import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">URL Rewrites Demo</h1>
      <p className="mb-6">This page demonstrates all the URL rewrite rules configured in next.config.ts</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Category Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/nha-dat" className="text-blue-600 hover:underline">
                /nha-dat
              </Link>{" "}
              → /vv/nha-dat
            </li>
            <li>
              <Link href="/oto" className="text-blue-600 hover:underline">
                /oto
              </Link>{" "}
              → /vv/oto
            </li>
            <li>
              <Link href="/thoi-trang" className="text-blue-600 hover:underline">
                /thoi-trang
              </Link>{" "}
              → /vv/thoi-trang
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Province Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/tinh-Hanoi" className="text-blue-600 hover:underline">
                /tinh-Hanoi
              </Link>{" "}
              → /vv/tinh/Hanoi
            </li>
            <li>
              <Link href="/tp-HCM" className="text-blue-600 hover:underline">
                /tp-HCM
              </Link>{" "}
              → /vv/tp/HCM
            </li>
            <li>
              <Link href="/thanh-pho-DaNang" className="text-blue-600 hover:underline">
                /thanh-pho-DaNang
              </Link>{" "}
              → /vv/thanh-pho/DaNang
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">District Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/quan-BaDinh" className="text-blue-600 hover:underline">
                /quan-BaDinh
              </Link>{" "}
              → /vv/quan/BaDinh
            </li>
            <li>
              <Link href="/huyen-HoaiDuc" className="text-blue-600 hover:underline">
                /huyen-HoaiDuc
              </Link>{" "}
              → /vv/huyen/HoaiDuc
            </li>
            <li>
              <Link href="/thi-xa-SonTay" className="text-blue-600 hover:underline">
                /thi-xa-SonTay
              </Link>{" "}
              → /vv/thi-xa/SonTay
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Category + Province Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/nha-dat-tinh-Hanoi" className="text-blue-600 hover:underline">
                /nha-dat-tinh-Hanoi
              </Link>{" "}
              → /vv/nha-dat/tinh/Hanoi
            </li>
            <li>
              <Link href="/oto-tp-HCM" className="text-blue-600 hover:underline">
                /oto-tp-HCM
              </Link>{" "}
              → /vv/oto/tp/HCM
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Category + District Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/nha-dat-quan-BaDinh" className="text-blue-600 hover:underline">
                /nha-dat-quan-BaDinh
              </Link>{" "}
              → /vv/nha-dat/quan/BaDinh
            </li>
            <li>
              <Link href="/oto-huyen-HoaiDuc" className="text-blue-600 hover:underline">
                /oto-huyen-HoaiDuc
              </Link>{" "}
              → /vv/oto/huyen/HoaiDuc
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Complex Location Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/nha-dat-quan-BaDinh-tinh-Hanoi" className="text-blue-600 hover:underline">
                /nha-dat-quan-BaDinh-tinh-Hanoi
              </Link>{" "}
              → /vv/nha-dat/quan/BaDinh/tinh/Hanoi
            </li>
            <li>
              <Link href="/oto-huyen-HoaiDuc-tinh-Hanoi" className="text-blue-600 hover:underline">
                /oto-huyen-HoaiDuc-tinh-Hanoi
              </Link>{" "}
              → /vv/oto/huyen/HoaiDuc/tinh/Hanoi
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transportation Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/van-chuyen" className="text-blue-600 hover:underline">
                /van-chuyen
              </Link>{" "}
              → /vv/van-chuyen
            </li>
            <li>
              <Link href="/van-chuyen-tu-Hanoi" className="text-blue-600 hover:underline">
                /van-chuyen-tu-Hanoi
              </Link>{" "}
              → /vv/van-chuyen/tu/Hanoi
            </li>
            <li>
              <Link href="/van-chuyen-di-HCM" className="text-blue-600 hover:underline">
                /van-chuyen-di-HCM
              </Link>{" "}
              → /vv/van-chuyen/di/HCM
            </li>
            <li>
              <Link href="/van-chuyen-tu-Hanoi-di-HCM" className="text-blue-600 hover:underline">
                /van-chuyen-tu-Hanoi-di-HCM
              </Link>{" "}
              → /vv/van-chuyen/tu/Hanoi/di/HCM
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sitemap Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/sitemap/tinh-thanh/hanoi.xml" className="text-blue-600 hover:underline">
                /sitemap/tinh-thanh/hanoi.xml
              </Link>{" "}
              → /sitemap/tinh-thanh/hanoi
            </li>
            <li>
              <Link href="/sitemap/quan-huyen/badinh.xml" className="text-blue-600 hover:underline">
                /sitemap/quan-huyen/badinh.xml
              </Link>{" "}
              → /sitemap/quan-huyen/badinh
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Routes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/rss" className="text-blue-600 hover:underline">
                /rss
              </Link>{" "}
              → /api/rss
            </li>
            <li>
              <Link href="/thuong-mai/slug1/slug2" className="text-blue-600 hover:underline">
                /slug1/slug2
              </Link>{" "}
              → /thuong-mai/slug1/slug2
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
