import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  a{
      text-decoration:none;
      color:inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    outline: 0;
    border: 0;
  }

  *{
      box-sizing:border-box;
  }
  body {
    background-color: #fafafa;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
`;

export default GlobalStyles;
