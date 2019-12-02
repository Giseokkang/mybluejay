import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BACKGROUND_COLOR } from "./colors";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        color:black;
        background-color:${BACKGROUND_COLOR}
    }
    *{
        box-sizing:border-box;
    }
`;

export default GlobalStyles;
