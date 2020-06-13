import styled from "styled-components";

export const CardContainer = styled.div`
  border: 0.8px solid #ebeaed;
  margin: 20px 0;
  height: 130px;
  border-radius: 2px;
  box-shadow: 0px 5px 7px #0000000d;

  display: flex;
  flex-direction: column;

  header {
    margin-top: 10px;

    display: flex;
    align-items: center;

    a {
      margin-left: 10px;
      text-decoration: underline;
      color: #170c3a;
      font-weight: 600;
    }

    .close {
      flex-grow: 1;
      text-align: right;

      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  p {
    margin: 15px 10px;
    font-size: 14px;
    color: #8f8a9b;
  }
`;

export const TagsContainer = styled.div`
  align-items: center;
  margin: 0 10px;
  flex-grow: 1;

  display: flex;
  align-items: flex-end;
`;
