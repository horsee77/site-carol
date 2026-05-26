export const instagramProfileUrl =
  "https://www.instagram.com/_caroolmonteiro.nail/";

type InstagramApiMedia = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
};

type InstagramApiResponse = {
  data?: InstagramApiMedia[];
};

export type InstagramPost = {
  id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
};

export async function getLatestInstagramPosts(): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return [];
  }

  const userId = process.env.INSTAGRAM_USER_ID || "me";
  const apiVersion = process.env.INSTAGRAM_API_VERSION || "v23.0";
  const endpoint = new URL(
    `https://graph.instagram.com/${apiVersion}/${encodeURIComponent(userId)}/media`,
  );

  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink",
  );
  endpoint.searchParams.set("limit", "6");

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 3600,
        tags: ["instagram-feed"],
      },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as InstagramApiResponse;

    return (payload.data || []).flatMap((media) => {
      const imageUrl =
        media.media_type === "VIDEO" || media.media_type === "REELS"
          ? media.thumbnail_url
          : media.media_url;

      if (!imageUrl || !media.permalink) {
        return [];
      }

      return [
        {
          id: media.id,
          caption: media.caption?.trim() || "Trabalho publicado no Instagram",
          imageUrl,
          permalink: media.permalink,
        },
      ];
    });
  } catch {
    return [];
  }
}
