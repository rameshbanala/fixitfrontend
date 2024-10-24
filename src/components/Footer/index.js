import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #2b2d42;
  padding: 40px 0;
  color: #fff;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 20px;
`;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ef233c;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;

  a {
    color: #edf2f4;
    margin: 0 15px;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #ef233c;
    }
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: #edf2f4;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ef233c;
    }
  }
`;

const FooterBottomText = styled.div`
  font-size: 0.9rem;
  margin-top: 20px;
  color: #8d99ae;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>FixIt</FooterLogo>

      <FooterLinks>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </FooterLinks>

      <FooterSocialIcons>
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </FooterSocialIcons>

      <FooterBottomText>
        © {new Date().getFullYear()} FixIt. All Rights Reserved.
      </FooterBottomText>
    </FooterContainer>
  );
}

export default Footer;
