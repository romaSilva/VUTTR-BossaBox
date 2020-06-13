import styled from "styled-components";

export const StyledHeader = styled.header`
  color: #170c3a;
  margin: 10px 0 0 10px;

  display: flex;
  align-items: center;
`;

export const StyledMain = styled.div`
  margin: 0 17px 10px;

  p {
    font-size: 14px;
    margin-top: 20px;
    color: #8f8a9b;
  }

  div {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    button {
      height: 25px;
      width: 85px;
      background-color: #365df0;
      color: #fff;
      font-size: 10px;
      font-weight: 600;
      border-radius: 2px;
      border: none;
      cursor: pointer;
      margin-top: 10px;
      align-self: flex-end;
      margin-left: 30px;

      &:hover {
        background-color: #2f55cc;
      }

      &:active {
        background-color: #244aa8;
      }

      &:last-child {
        background-color: #f95e5a;

        &:hover {
          background-color: #cc4c4c;
        }

        &:active {
          background-color: #a53f3f;
        }
      }
    }
  }
`;
