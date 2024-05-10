import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  /* ============COLOR============ */
  /* Violet Palette */
  --violetlight: #f1effd;
  --violet: #5534da;

  /* Purple Palette */
  --purple: #760dde;

  /* Pink Palette */
  --pink: #e876ea;

  /* Orange Palette */
  --orange: #ffa500;

  /* Blue Palette */
  --blue: #76a5ea;

  /* Green Palette */
  --green: #7ac555;

  /* Gray Palette */
  --gray100: #fafafa;
  --gray200: #eeeeee;
  --gray300: #d9d9d9;
  --gray400: #9fa6b2;
  --gray500: #787486;

  /* Black Palette */
  --black100: #4b4b4b;
  --black200: #333236;
  --black300: #171717;
  --black400: #000000;

  /* Others */
  --white: #ffffff;
  --red: #d6173a;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 10px;
  box-sizing: border-box;
  font-family: Pretendard, "Pretendard Variable", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}
input {
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
}

`;
