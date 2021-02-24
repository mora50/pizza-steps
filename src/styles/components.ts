import styled, { css } from "styled-components";
import { device } from "./global";

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media ${device.tablet} {
    max-width: 750px;
  }
  @media ${device.laptop} {
    max-width: 970px;
  }
  @media ${device.laptopL} {
    max-width: 1170px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  padding: 8px;
  color: #fff;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  div {
    margin-top: 1rem;
  }
`;

export const Points = styled.div`
  color: #fff;

  div {
    display: grid;
    place-items: center;
    position: relative;
  }

  span {
    color: #000;
    z-index: 2;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
  }

  svg {
    width: 70px;
  }
`;

export const Cards = styled.div`
  grid-column: span 6 / span 6;
  padding: 15px;
  position: relative;
  cursor: pointer;
  border: 0;
  text-align: left;
  transition: 0.5s;

  &:hover {
    background: red;
  }

  ul {
    padding-left: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 14px;
    }
  }

  img {
    width: 100%;
    max-height: 300px;
    border-radius: 50%;
  }

  @media ${device.laptop} {
    ul {
      list-style: none;
      text-align: center;
    }
    grid-column: span 3 / span 3;
  }
`;

export const Button = styled.button<{ bgColor: string; disabled?: boolean }>`
  padding: 5px 8px;
  color: #fff;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  ${({ bgColor }) =>
    bgColor &&
    css`
      background: var(--${bgColor});
    `}
`;

export const Logo = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  margin-top: 1rem;

  h1 {
    font-size: 35px;
    position: absolute;
    transform: rotate(50deg);
    top: -1px;
    left: 2.9rem;
    color: var(--primary);
  }

  img {
    width: 100px;
    transform: rotate(110deg);
    margin: 1rem;
  }
`;

export const TitleStep = styled.div`
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 24px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 0;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  ${Cards} {
    border-bottom: 1px dashed #ccc;

    &:nth-child(odd) {
      border-right: 1px dashed #ccc;
    }
    @media ${device.tablet} {
      &:nth-child(-n + 3) {
        border-right: 1px dashed #ccc;
      }
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: #bf0d01;
`;
