import { ArrowUpRight } from "lucide-react";
import "./BlogCard.css";

export default function BlogCard({
  image,
  category = "Blog",
  title,
  excerpt,
  author = "Admin",
  date = "",
  readTime = "3 min read",
  featured = false,
  to,
}) {
  if (featured) {
    return (
      <article className="bc-card bc-featured">
        <div className="bc-featured-grid">
          <div className="bc-imgWrap bc-imgWrapTall">
            <img className="bc-img" src={image} alt={title} />
            <div className="bc-overlay" />
          </div>

          <div className="bc-featuredBody">
            <span className="bc-pill">{category}</span>

            <h2 className="bc-title bc-titleBig">{title}</h2>

            <p className="bc-excerpt bc-line3">{excerpt}</p>

            <div className="bc-footer">
              <div className="bc-author">
                <div className="bc-avatar">{author?.charAt(0) || "A"}</div>
                <div>
                  <p className="bc-authorName">{author}</p>
                  <p className="bc-meta">
                    {date ? `${date} · ` : ""}
                    {readTime}
                  </p>
                </div>
              </div>

              <a className="bc-iconBtn" href={to}>
                <ArrowUpRight className="bc-icon" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bc-card">
      <div className="bc-imgWrap">
        <img className="bc-img" src={image} alt={title} />
        <div className="bc-overlay" />
        <span className="bc-badge">{category}</span>
      </div>

      <div className="bc-body">
        <h3 className="bc-title">{title}</h3>
        <p className="bc-excerpt bc-line2">{excerpt}</p>

        <div className="bc-row">
          <div className="bc-authorMini">
            <div className="bc-avatarSm">{author?.charAt(0) || "A"}</div>
            <span className="bc-muted">{author}</span>
          </div>
          <span className="bc-muted">{readTime}</span>
        </div>

        <a className="bc-read" href={to}>
          Read <ArrowUpRight className="bc-readIcon" />
        </a>
      </div>
    </article>
  );
}
