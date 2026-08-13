import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sahedstar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImLinkedin />
      </a>
      <a
        href="https://www.github.com/sahedalways"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.facebook.com/sahedstar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
