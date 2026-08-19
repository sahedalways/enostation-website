import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { allBlogs } from "../../Blog/BlogData";
import "../../Blog/blog.css";
import "./seeMoreBlogs.css";

const SeeMoreBlogs = () => {
  const blogs = allBlogs;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  // Strip HTML tags so the preview is always valid text (truncating raw
  // HTML at a character boundary can split a tag and break hydration).
  const toPlainText = (html) => (html || "").replace(/<[^>]*>/g, "");

  return (
    <>
      <section id="blog">
        <h2>All Blogs</h2>

        <div className="container blog__container">
          {blogs
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ id, image, title, desc, author, date, tag, readTime }) => {
              const plainDesc = toPlainText(desc);
              const truncatedDesc =
                plainDesc.length > 120 ? plainDesc.slice(0, 120) + "..." : plainDesc;
              return (
                <article key={id} data-aos="slide-left" className="blog__item">
                  <div className="blog__item__image">
                    <div className="blog__img__wrapper">
                      {image && (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                      <div className="blog__img__overlay" />
                      {tag && <span className="blog__tag">{tag}</span>}
                      <span className="blog__date-badge">
                        <FiCalendar />
                        {date}
                      </span>
                    </div>
                  </div>

                  <div className="blog__item__content">
                    <h3 className="blog__title">{title}</h3>

                    <div className="blog__author-row">
                      <div className="blog__author-avatar">
                        <span>{getInitials(author)}</span>
                      </div>
                      <span className="blog__author">{author}</span>
                      <span className="blog__dot">·</span>
                      <span className="blog__read-time">
                        <FiClock />
                        {readTime}
                      </span>
                    </div>

                    <div className="blog__desc">{truncatedDesc}</div>

                    <div className="blog__footer">
                      <Link
                        href={`/blog-details/${id}`}
                        className="blog__read-more"
                        aria-label={`Read more about ${title}`}
                      >
                        Read More <FiArrowRight className="blog__arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default SeeMoreBlogs;