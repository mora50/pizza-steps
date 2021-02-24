import styled from "styled-components";

export const ConfirmWrapper = styled.div`
  background: #fff;
  max-width: fit-content;
  margin: 0 auto;
  border-radius: 7px;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.21);
  padding: 15px;
  text-align: center;

  button {
    font-size: 23px;
  }

  img {
    margin: 0 auto;
  }

  ul {
    padding-left: 0;
    list-style: none;
    font-size: 20px;
    margin-top: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
