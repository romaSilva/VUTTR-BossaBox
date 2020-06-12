import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html, body, #root {
    height: 100%;
}
body {
    font-family: 'Source Sans Pro', serif;
    color: #170C3A;
    margin: 50px 25%;
    -webkit-font-smoothing: antialiased !important;
}
ul {
    list-style: none;
}
`;
