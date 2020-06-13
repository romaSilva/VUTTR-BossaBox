import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0px 30px 20px;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 0.8px solid #ebeaed;
    border-radius: 2px;
    margin-bottom: 15px;
    height: 30px;
    font-size: 11px;
    padding: 5px;
    font-family: inherit;

    &:focus {
      background-color: #ebeaed;
      border-color: #dedce1;
    }
  }

  textarea {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 0.8px solid #ebeaed;
    border-radius: 2px;
    margin-bottom: 15px;
    resize: none;
    height: 120px;
    font-size: 11px;
    font-family: inherit;
    padding: 5px;

    &:focus {
      background-color: #ebeaed;
      border-color: #dedce1;
    }
  }

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

    &:hover {
      background-color: #2f55cc;
    }

    &:active {
      background-color: #244aa8;
    }
  }
`;
