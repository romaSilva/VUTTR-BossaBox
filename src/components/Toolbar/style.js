import styled from "styled-components";

export const ToolbarContainer = styled.div`
  height: 25px;
  margin-top: 40px;

  display: flex;

  form {
    display: flex;
    align-items: center;

    .text {
      border: 0.8px solid #ebeaed;
      background-color: #f5f4f6;
      border-radius: 2px;
      height: 100%;
      color: #b1adb9;
      width: 200px;
      margin-right: 20px;

      display: flex;
      align-items: center;

      input {
        margin-left: 10px;
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

  button {
    height: 100%;
    width: 85px;
    background-color: #2f55cc;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }
`;
