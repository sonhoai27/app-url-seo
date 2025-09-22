import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/chat/:path*",
        destination: "/chat/:path*",
      },
      {
        source: "/user/:path*",
        destination: "/user/:path*",
      },
      {
        source: "/tin-tuc/:path*",
        destination: "/tin-tuc/:path*",
      },
      {
        source: "/rating/:path*",
        destination: "/rating/:path*",
      },
      {
        source: "/tin-he-thong/:path*",
        destination: "/tin-he-thong/:path*",
      },
      {
        source: "/van-chuyen/:slug",
        destination: "/van-chuyen/:slug",
      },
      {
        source: "/:slug/:slug1",
        destination: "/thuong-mai/:slug/:slug1",
      },
      {
        source:
          "/van-chuyen-:province1(tu)-:province1Value-:province2(di)-:province2Value",
        destination:
          "/vv/van-chuyen/:province1/:province1Value/:province2/:province2Value",
      },
      {
        source: "/van-chuyen-:province1(tu)-:province1Value",
        destination: "/vv/van-chuyen/:province1/:province1Value",
      },
      {
        source: "/van-chuyen-:province1(di)-:province1Value",
        destination: "/vv/van-chuyen/:province1/:province1Value",
      },
      {
        source: "/van-chuyen",
        destination: "/vv/van-chuyen",
      },
      {
        source: "/rss", // The path you want to rewrite from
        destination: "/api/rss", // The API route that you want to rewrite to
      },
      {
        source:
          "/:category-:district(quan|huyen|thi-xa|tp|thanh-pho)-:districtValue-:province(tp|tinh|thanh-pho)-:provinceValue",
        destination:
          "/vv/:category/:district/:districtValue/:province/:provinceValue",
      },
      {
        source:
          "/:district(quan|huyen|thi-xa|tp|thanh-pho)-:districtValue-:province(tp|tinh|thanh-pho)-:provinceValue",
        destination: "/vv/:district/:districtValue/:province/:provinceValue",
      },
      {
        source: "/:province(tp|tinh|thanh-pho)-:provinceValue",
        destination: "/vv/:province/:provinceValue",
      },
      {
        source: "/:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue",
        destination: "/vv/:district/:districtValue",
      },
      {
        source:
          "/:category-:district(quan|huyen|thi-xa|thanh-pho|tp)-:districtValue",
        destination: "/vv/:category/:district/:districtValue",
      },
      {
        source: "/:category-:province(tp|tinh|thanh-pho)-:provinceValue",
        destination: "/vv/:category/:province/:provinceValue",
      },
      {
        source: "/:category",
        destination: "/vv/:category",
      },
      {
        source: "/sitemap/tinh-thanh/:slug.xml",
        destination: "/sitemap/tinh-thanh/:slug",
      },
      {
        source: "/sitemap/quan-huyen/:slug.xml",
        destination: "/sitemap/quan-huyen/:slug",
      },
    ];
  },
};

export default nextConfig;
