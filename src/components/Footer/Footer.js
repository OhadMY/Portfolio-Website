import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
  Support,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+972-503-882-169">+972-503-882-169</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href="mailto:Ohad.Mor.Yosef@gmail.com">
            Ohad.Mor.Yosef@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Support>
            For all enquiries, please contant me using the info above or the
            social media
          </Support>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://www.linkedin.com/in/ohadmy/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://github.com/OhadMY" target="_blank">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
