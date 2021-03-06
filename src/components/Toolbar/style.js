import styled from "styled-components";

export const ToolbarContainer = styled.div`
  min-height: 25px;
  margin-top: 40px;
  margin-bottom: 30px;

  display: flex;

  form {
    width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .text {
      margin-top: 15px;
      border: 0.8px solid #ebeaed;
      background-color: #f5f4f6;
      border-radius: 2px;
      height: 25px;
      color: #b1adb9;
      width: 200px;
      margin-right: 20px;

      display: flex;
      align-items: center;

      input {
        margin-left: 5px;
        background-color: #f5f4f6;
        border: none;
        font-size: 11px;
        font-family: "Source Sans Pro", serif;
        flex-grow: 1;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  flex-grow: 1;
  text-align: right;
  margin-top: 15px;

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

    &:hover {
      background-color: #2f55cc;
    }

    &:active {
      background-color: #244aa8;
    }
  }
`;
