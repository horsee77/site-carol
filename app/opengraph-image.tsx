/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/seo";

export const runtime = "nodejs";

export const alt = `${siteConfig.name} - nail designer em São Paulo`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const heroImage = await readFile(
    join(process.cwd(), "public/assets/photos/img-hero.png"),
    "base64",
  );
  const heroSrc = `data:image/png;base64,${heroImage}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: siteConfig.backgroundColor,
          color: "#2c211d",
        }}
      >
        <img
          src={heroSrc}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(251,245,238,0.98) 0%, rgba(251,245,238,0.9) 45%, rgba(251,245,238,0.18) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 730,
            height: "100%",
            padding: "72px 78px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 27,
              fontWeight: 700,
              color: "#8b5b47",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 0.96,
            }}
          >
            Unhas elegantes para realçar sua beleza
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.32,
              color: "#514139",
            }}
          >
            Alongamento, banho de gel, esmaltação em gel e cursos profissionais
            em São Paulo.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 38,
              fontSize: 24,
              fontWeight: 700,
              color: "#8b5b47",
            }}
          >
            {siteConfig.instagramHandle} | {siteConfig.displayPhone}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
