import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { allBlogs } from "./BlogData";
import ScrollReveal from "../common/ScrollReveal";
import "./blog.css";

const Blog = () => {
  const blogs = allBlogs;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <section id="blog">
      <ScrollReveal direction="none">
        <p className="section-eyebrow">Recent Blogs</p>
        <h2>Blog</h2>
        <p className="section-subtitle">Insights, tutorials, and updates from our development team.</p>
      </ScrollReveal>

      <div className="container blog__container">
        {blogs
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3)
          .map(({ id, image, title, desc, author, date, tag, readTime }, index) => {
            const truncatedDesc =
              desc && desc.length > 120 ? desc.slice(0, 120) + "..." : (desc || "");
            return (
              <ScrollReveal key={id} delay={index * 0.08} direction="left">
                <article className="blog__item">
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

                    <div
                      className="blog__desc"
                      dangerouslySetInnerHTML={{ __html: truncatedDesc }}
                    />

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
              </ScrollReveal>
            );
          })}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="seeMore__btn">
          <Link href="/blogs" className="btn" rel="noreferrer" target="_blank" aria-label="See more blog posts">
            See More
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Blog;