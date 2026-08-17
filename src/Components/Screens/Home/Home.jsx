import JsonLd from "../../common/JsonLd";
import Header from "../../Header/Header";
import About from "../../About/About";
import Experience from "../../Experience/Experience";
import Services from "../../Services/Services";
import Portfolio from "../../Portfolio/Portfolio";
import Blog from "../../Blog/Blog";
import Testimonial from "../../Testimonial/Testimonial";
import Contact from "../../Contact/Contact";

const Home = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Enostation",
    description:
      "Web development agency specializing in modern web applications, mobile apps, and AI-powered solutions.",
    url: "https://enostation.netlify.app",
    email: "mailto:hello.enostation@gmail.com",
    telephone: "+8809638616438",
    sameAs: [
      "https://github.com/sahedalways",
      "https://www.linkedin.com/in/sahedstar/",
      "https://www.facebook.com/sahedstar",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Enostation - Web Development Agency",
    url: "https://enostation.netlify.app",
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />

      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
