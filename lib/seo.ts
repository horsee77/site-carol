import { scheduleWhatsappUrl, whatsappUrl } from "@/lib/contact";

const defaultSiteUrl = "https://carolmonteironails.com.br";

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;

  return siteUrl.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Carol Monteiro Nails",
  url: getSiteUrl(),
  language: "pt-BR",
  locale: "pt_BR",
  title: "Carol Monteiro Nails | Nails em Atibaia",
  description:
    "Nail designer em Atibaia especializada em alongamento de unhas, banho de gel, esmaltação em gel, manicure, pedicure, plástica dos pés, reconstrução de unha e cursos profissionais.",
  shortDescription:
    "Alongamento, banho de gel, esmaltação em gel, manicure, pedicure e cursos profissionais em Atibaia.",
  phone: "+5511998583928",
  displayPhone: "+55 11 99858-3928",
  whatsappUrl,
  scheduleWhatsappUrl,
  instagramUrl: "https://www.instagram.com/_caroolmonteiro.nail",
  instagramHandle: "@_caroolmonteiro.nail",
  metaPixelId: "1341191337909574",
  city: "Atibaia",
  region: "SP",
  country: "BR",
  themeColor: "#eee2d4",
  backgroundColor: "#fbf5ee",
  socialImage: "/assets/opengraph-image.png",
  localImages: [
    "/assets/photos/img-hero.png",
    "/assets/photos/img-01.png",
    "/assets/photos/img-02.png",
  ],
  services: [
    {
      name: "Alongamento de unhas",
      description:
        "Alongamento com acabamento elegante, estrutura resistente e visual delicado.",
    },
    {
      name: "Banho de gel",
      description:
        "Banho de gel para fortalecer, nivelar e deixar as unhas com brilho duradouro.",
    },
    {
      name: "Esmaltação em gel",
      description:
        "Esmaltação em gel com acabamento uniforme, brilho intenso e maior durabilidade.",
    },
    {
      name: "Manicure e pedicure",
      description:
        "Cuidados completos para mãos e pés com higiene, técnica e acabamento caprichado.",
    },
    {
      name: "Plástica dos pés",
      description:
        "Tratamento estético para pés mais macios, bem cuidados e com aparência renovada.",
    },
    {
      name: "Reconstrução de unha",
      description:
        "Reconstrução para corrigir danos e recuperar a aparência natural das unhas.",
    },
    {
      name: "Curso profissional de unhas",
      description:
        "Formação para quem quer aprender técnica, atendimento e acabamento profissional.",
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.url}${normalizedPath}`;
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
