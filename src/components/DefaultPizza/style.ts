import { device } from "@styles/global";
import styled from "styled-components";

export const Separator = styled.div`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  margin: 1rem 0;
`;

export const DefaultPizzaWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  border: 1px dashed #fff;
  color: #fff;

  div {
    text-align: center;
  }

  h2 {
    margin: 5px;
  }

  img {
    width: 150px;
  }

  ul {
    margin: 5px 0;
  }

  span {
    font-size: 25px;
    font-weight: bold;
  }

  @media ${device.tablet} {
    margin-top: -8rem;
  }
`;
