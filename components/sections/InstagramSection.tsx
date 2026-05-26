import Image from "next/image";
import {
  getLatestInstagramPosts,
  instagramProfileUrl,
} from "@/lib/instagram";

export async function InstagramSection() {
  const posts = await getLatestInstagramPosts();

  return (
    <section className="nails-instagram-block">
      <div className="nails-center-head nails-instagram-head">
        <span className="nails-section-kicker">Instagram</span>
        <h2>Últimos trabalhos da Carol</h2>
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nails-light-button nails-instagram-follow"
        >
          Seguir @_caroolmonteiro.nail
        </a>
      </div>

      {posts.length > 0 ? (
        <div className="nails-insta-grid">
          {posts.map((post) => (
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              className="nails-insta-link"
              aria-label={post.caption}
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                width={360}
                height={360}
                className="nails-insta-image"
              />
              <span className="nails-insta-overlay">Ver publicação</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="nails-insta-empty">
          <p>
            Acompanhe os novos designs, alongamentos e acabamentos diretamente
            no Instagram.
          </p>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nails-pill-button"
          >
            Ver Instagram
          </a>
        </div>
      )}
    </section>
  );
}
