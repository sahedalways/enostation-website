'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CgArrowLeft } from 'react-icons/cg';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';
import { allBlogs } from './BlogData';
import './blogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const item = allBlogs.find((item) => item.id === parseInt(id));
        window.scrollTo(0, 0);
        if (item) {
            setItem(item);
        }
    }, [id]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {item ? (
                <>
                    {loading ? (
                        <div className="blog__loading">
                            <HashLoader
                                color="#7EC834"
                                loading={loading}
                                className="override"
                                size={100}
                            />
                        </div>
                    ) : (
                        <>
                            <section id="blog__view">
                                <div className="container blog__container__details">
                                    <Link href="/blogs" className="blog__back-btn">
                                        <CgArrowLeft />
                                        <span>Back to Blogs</span>
                                    </Link>

                                    <div className="blog__hero">
                                        <div className="blog__hero__image">
                                            {item.image ? (
                                                <Image
                                                    data-aos="zoom-in-up"
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 600px) 100vw, 900px"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            ) : item.video ? (
                                                <div
                                                    data-aos="zoom-in-up"
                                                    dangerouslySetInnerHTML={{ __html: item.video }}
                                                    className="blog__hero__video"
                                                />
                                            ) : null}
                                            <div className="blog__hero__overlay" />
                                            {item.tag && (
                                                <span className="blog__hero__tag">
                                                    <FaTag />
                                                    {item.tag}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="blog__content">
                                        <h2 className="blog__details__title">{item.title}</h2>

                                        <div className="blog__meta">
                                            <div className="blog__meta__item">
                                                <div className="blog__meta__avatar">
                                                    <span>
                                                        {item.author
                                                            .split(" ")
                                                            .map((word) => word[0])
                                                            .slice(0, 2)
                                                            .join("")
                                                            .toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="blog__meta__info">
                                                    <small>Author</small>
                                                    <strong>{item.author}</strong>
                                                </div>
                                            </div>

                                            <div className="blog__meta__divider" />

                                            <div className="blog__meta__item">
                                                <div className="blog__meta__icon">
                                                    <FaCalendarAlt />
                                                </div>
                                                <div className="blog__meta__info">
                                                    <small>Publish Date</small>
                                                    <strong>{item.date}</strong>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="blog__article">
                                            <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </>
            ) : (
                <div className="blog__not-found">
                    <h1>Item not found!</h1>
                    <Link href="/blogs" className="blog__back-btn">
                        <CgArrowLeft />
                        <span>Back to Blogs</span>
                    </Link>
                </div>
            )}
        </>
    );
};
export default BlogDetails;