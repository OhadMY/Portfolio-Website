import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem 1rem 3rem 0;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 650px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 15px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }
  @media screen and (max-width: 876px) {
    width: 90%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  margin-top: 1.75rem;
  font-size: ${(props) => (props.bigtitle ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: white;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: self-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(320deg, #ff622e 50%, #B133FF 100%)"
      : "linear-gradient(320deg, #00DBD8 -10%, #B133FF 100%)"};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    font-weight: bold;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 40px 20px 40px;
    flex-wrap: wrap;
  }
`;

export const Tag = styled.li`
  color: #7570d2;
  font-size: 1.5rem;

  @media screen and (max-width: 470px) {
    margin: 0 10px 0 10px;
  }
`;
