import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .section-main {
    height: 100vh;
  }
  .section-main .main-page-container {
    width: 90%;
    margin-left: 10%;
    margin-top: 150px;
    display: flex;
    font-family: "Nunito", sans-serif;
  }
  @media only screen and (max-width: 1300px) {
    .section-main .main-page-container {
      flex-direction: column;
      width: 100%;
      margin-top: 100px;
    }
  }
  .section-main .main-page-container .left-container {
    width: 55%;
  }
  @media only screen and (max-width: 1300px) {
    .section-main .main-page-container .left-container {
      width: 100%;
    }
  }
  .section-main .main-page-container .left-container .title {
    font-size: 4em;
    font-weight: bold;
    color: #28363d;
  }
  @media only screen and (max-width: 1000px) {
    .section-main .main-page-container .left-container .title {
      font-size: 3em;
    }
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .title {
      font-size: 2.4em;
    }
  }
  @media only screen and (max-width: 600px) {
    .section-main .main-page-container .left-container .title {
      font-size: 2em;
    }
  }
  .section-main .main-page-container .left-container .hello-ico {
    width: 70px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .hello-ico {
      width: 30px;
    }
  }
  .section-main .main-page-container .left-container .localization-ico {
    width: 50px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .localization-ico {
      width: 20px;
    }
  }
  .section-main .main-page-container .left-container .description {
    font-size: 2em;
    margin-top: 60px;
    color: #28363d;
  }
  @media only screen and (max-width: 1300px) {
    .section-main .main-page-container .left-container .description {
      width: 80%;
    }
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .description {
      font-size: 1.6em;
    }
  }
  .section-main .main-page-container .left-container .social-ico {
    width: 50px;
    margin: 40px 10px 20px 0px;
    cursor: pointer;
    z-index: -1;
    filter: grayscale(100%);
    transition: 0.3s ease-in-out;
  }
  .section-main .main-page-container .left-container .social-ico:hover, .section-main .main-page-container .left-container .social-ico:focus {
    filter: grayscale(0);
  }
  .section-main .main-page-container .left-container .tech-stack-box {
    display: flex;
    flex-wrap: wrap;
  }
  .section-main .main-page-container .left-container .tech-stack-box .tech-stack-single-box {
    margin-top: 30px;
    width: 100px;
    height: 100px;
    background-color: #658b6f;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    margin-right: 40px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1110px) {
    .section-main .main-page-container .left-container .tech-stack-box .tech-stack-single-box {
      width: 60px;
      height: 60px;
    }
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .tech-stack-box .tech-stack-single-box {
      margin-top: 10px;
    }
  }
  .section-main .main-page-container .left-container .tech-stack-box .tech-ico1 {
    width: 55px;
    margin-top: 5px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .tech-stack-box .tech-ico1 {
      width: 40px;
    }
  }
  .section-main .main-page-container .left-container .tech-stack-box .tech-ico2 {
    width: 65px;
    margin-top: 0px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .tech-stack-box .tech-ico2 {
      width: 50px;
    }
  }
  .section-main .main-page-container .left-container .tech-stack-box .tech-ico3 {
    width: 70px;
    margin-top: 0px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    .section-main .main-page-container .left-container .tech-stack-box .tech-ico3 {
      width: 55px;
    }
  }
  .section-main .main-page-container .left-container .tech-stack-box span {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 5px;
  }
  .section-main .right-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 45%;
  }
  @media only screen and (max-width: 1300px) {
    .section-main .right-container {
      display: none;
    }
  }
  .section-main .right-container .avatar {
    width: 20em;
    height: 20em;
    border-radius: 50%;
    border: 1px solid #28363d;
    position: absolute;
  }/*# sourceMappingURL=hero.css.map */

  /*======================================
    Hero Area CSS
  ========================================*/

  .hero-area {
    position: relative;
    // background-color: #24126a;
    padding: 0 0 0 50px;
    z-index: 0;
  }

  .hero-area .hero-shape {
    position: absolute;
    left: 0;
    bottom: -1px;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-area {
      padding: 130px 0 150px 0;
    }
  }

  @media (max-width: 767px) {
    .hero-area {
      padding: 110px 0 100px 0;
    }
  }

  .hero-area .hero-content {
    border-radius: 0;
    position: relative;
    z-index: 1;
    text-align: left;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-area .hero-content {
      padding: 0px 140px;
    }
  }

  .hero-area .hero-content h4 {
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .hero-area .hero-content h1 {
    font-weight: 700;
    font-size: 38px;
    line-height: 60px;
    color: #fff;
    text-transform: capitalize;
  }

  .hero-area .hero-content h1 span {
    position: relative;
    z-index: 0;
  }

  .hero-area .hero-content h1 span .text-shape {
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    z-index: -1;
  }

  .hero-area .hero-content p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-top: 20px;
  }

  .hero-area .hero-content .button {
    margin-top: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-area .hero-content .button {
      margin-top: 30px !important;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .hero-area .hero-content .button {
      margin-top: 30px;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .hero-area .hero-content .button .btn {
      width: 100%;
    }
  }

  .hero-area .hero-content .button .btn:hover {
    color: #24126a;
    background-color: #fff;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .hero-area .hero-content h1 {
      font-size: 40px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-area .hero-content {
      text-align: center;
    }
    .hero-area .hero-content h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 38px;
    }
    .hero-area .hero-content p {
      font-size: 15px;
    }
  }

  @media (max-width: 767px) {
    .hero-area .hero-content {
      padding: 0 10px;
      text-align: center;
    }
    .hero-area .hero-content h1 {
      font-size: 24px;
      line-height: 32px;
    }
    .hero-area .hero-content p {
      margin-top: 15px;
      font-size: 15px;
      line-height: 26px;
    }
    .hero-area .hero-content .button .btn {
      width: 60%;
      margin: 0;
      margin-bottom: 7px;
    }
    .hero-area .hero-content .button .btn:last-child {
      margin: 0;
    }
  }

  .hero-area .hero-image {
    text-align: center;
    position: relative;
    z-index: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .hero-area .hero-image {
      display: none;
    }
  }

  .hero-area .hero-image .main-image {
    z-index: 0;
  }

  .hero-area .hero-image .h2-move-1 {
    position: absolute;
    left: 42%;
    -webkit-animation: bounce 3s linear infinite;
    animation: bounce 3s linear infinite;
  }

  .hero-area .hero-image .h2-move-2 {
    position: absolute;
    left: 45%;
    top: 68%;
    -webkit-animation: bounce 3s linear infinite;
    animation: bounce 3s linear infinite;
  }

  .hero-area .hero-image .h2-move-3 {
    position: absolute;
    left: 47%;
    top: 26%;
    z-index: -1;
    -webkit-animation: bounce 4s linear infinite;
    animation: bounce 4s linear infinite;
  }

  .hero-area .hero-image .dot-dot {
    position: absolute;
    left: -10%;
    top: -14%;
    height: 113%;
    -webkit-animation: rotate2d 30s linear infinite;
    animation: rotate2d 30s linear infinite;
    width: 100%;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(0, -40px, 0);
      transform: translate3d(0, -40px, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(0, -40px, 0);
      transform: translate3d(0, -40px, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(0, 40px, 0);
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(0, 40px, 0);
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }

  @-webkit-keyframes fadeInLeft {
    from {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @-webkit-keyframes fadeInRight {
    from {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(50%, 0, 0);
      transform: translate3d(50%, 0, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: translate3d(50%, 0, 0);
      transform: translate3d(50%, 0, 0);
    }
    to {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spin {
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-40px);
      transform: translateY(-40px);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-40px);
      transform: translateY(-40px);
    }
  }

  .bounce {
    -webkit-animation: bounce 2s linear infinite;
    animation: bounce 1s linear infinite;
  }

  @-webkit-keyframes rotate2d {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate2d {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .rotate2d {
    -webkit-animation: rotate2d 2s linear infinite;
    animation: rotate2d 1s linear infinite;
  }

  @-webkit-keyframes rotate-2d {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes rotate-2d {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  .rotate-2d {
    -webkit-animation: rotate-2d 2s linear infinite;
    animation: rotate-2d 1s linear infinite;
  }

  @-webkit-keyframes rotate3d {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }

  @keyframes rotate3d {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  `;

export default GlobalStyles;
