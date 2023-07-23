import React from "react";
import "./footer.scss";
import { Link } from "react-scroll";
import DarkLogo from "../../../assets/svg-images/whitedhara.svg";

const SocialLinks = ({ DarkMode }) => {
  return (
    <div className="flex md:gap-7 gap-3 social-icn">
      <a
        href="https://www.linkedin.com/in/dhara-kachhadia-8b0971228/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${DarkMode && "dark"
          }`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8818 21.6C16.6193 21.6 16.4055 21.387 16.4055 21.1245V13.8975C16.4055 11.2845 15.0645 11.2845 14.559 11.2845C13.1505 11.2845 12.4373 12.1635 12.4373 13.8975V21.1252C12.4373 21.3877 12.2243 21.6007 11.9618 21.6007H7.87501C7.61251 21.6007 7.39951 21.3877 7.39951 21.1252V7.35749C7.39951 7.09499 7.61251 6.88199 7.87501 6.88199H11.9625C12.225 6.88199 12.438 7.09499 12.438 7.35749V7.87049L12.684 7.66724C13.6515 6.86699 14.8058 6.46124 16.1145 6.46124C17.7323 6.46124 19.0943 6.97799 20.0528 7.95674C21.0653 8.99024 21.6 10.5292 21.6 12.4065V21.1252C21.6 21.3877 21.3863 21.6007 21.1238 21.6007H16.8818V21.6ZM14.5598 10.332C15.6053 10.332 17.3588 10.7955 17.3588 13.8975V20.649H20.6475V12.4065C20.6475 9.23324 18.9953 7.41374 16.1145 7.41374C13.542 7.41374 12.4275 9.35624 12.381 9.43874C12.297 9.59099 12.138 9.68549 11.9648 9.68549C11.9258 9.68549 11.886 9.67949 11.8455 9.66974C11.634 9.61649 11.4863 9.42824 11.4863 9.21224V7.83449H8.35126V20.6497H11.4863V13.8975C11.4863 11.6647 12.6353 10.332 14.5598 10.332Z"
            fill="#fff"
          />
          <path
            d="M0.885003 21.6C0.622503 21.6 0.408752 21.387 0.408752 21.1245V7.35749C0.408752 7.09499 0.622503 6.88199 0.885003 6.88199H5.14875C5.41125 6.88199 5.62425 7.09499 5.62425 7.35749V21.1245C5.62425 21.387 5.41125 21.6 5.14875 21.6H0.885003ZM1.36125 20.649H4.6725V7.83374H1.36125V20.649Z"
            fill="#fff"
          />
          <path
            d="M2.99775 6.02925C1.34475 6.02925 0 4.677 0 3.015C0 1.35225 1.34475 0 2.99775 0C4.6485 0 5.9925 1.353 5.9925 3.01575C5.9925 4.677 4.6485 6.02925 2.99775 6.02925ZM2.99775 0.9495C1.86975 0.9495 0.9525 1.87575 0.9525 3.015C0.9525 4.1535 1.86975 5.07825 2.99775 5.07825C4.125 5.07825 5.0415 4.1535 5.0415 3.015C5.04075 1.8765 4.125 0.9495 2.99775 0.9495Z"
            fill="#fff"
          />
        </svg>
      </a>
      <a
        href="https://github.com/DharaKachhadia"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${DarkMode && "dark"
          }`}
      >
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.00256e-06C10.9042 -0.0116755 7.90592 1.0818 5.5445 3.08368C3.18308 5.08557 1.61358 7.86446 1.11836 10.9204C0.623146 13.9763 1.23473 17.1086 2.84309 19.7538C4.45144 22.399 6.95098 24.3834 9.89199 25.35C10.542 25.454 10.75 25.051 10.75 24.7V22.503C7.14899 23.283 6.38199 20.8 6.38199 20.8C6.13921 19.9926 5.61291 19.3001 4.89999 18.85C3.71699 18.044 4.99099 18.07 4.99099 18.07C5.39906 18.1228 5.78992 18.2671 6.13435 18.4923C6.47877 18.7174 6.76786 19.0174 6.97999 19.37C7.3411 20.0121 7.94111 20.4857 8.64952 20.6877C9.35794 20.8898 10.1175 20.804 10.763 20.449C10.8222 19.79 11.1123 19.173 11.582 18.707C8.79999 18.421 5.70599 17.303 5.70599 12.35C5.66839 11.0519 6.1342 9.78954 7.00599 8.827C6.61019 7.70827 6.65669 6.48059 7.13599 5.395C7.13599 5.395 8.22799 5.044 10.711 6.695C12.8399 6.12271 15.0821 6.12271 17.211 6.695C19.694 5.018 20.786 5.395 20.786 5.395C21.2653 6.48059 21.3118 7.70827 20.916 8.827C21.7878 9.78954 22.2536 11.0519 22.216 12.35C22.216 17.316 19.174 18.408 16.275 18.733C16.5872 19.0468 16.8288 19.4238 16.9835 19.8385C17.1382 20.2533 17.2024 20.6964 17.172 21.138V24.7C17.172 25.051 17.38 25.467 18.043 25.35C20.9786 24.3851 23.4746 22.406 25.0833 19.7677C26.692 17.1293 27.3082 14.0041 26.8215 10.9525C26.3348 7.90095 24.777 5.12253 22.4274 3.11544C20.0779 1.10835 17.0901 0.00385606 14 1.00256e-06Z"
            fill="#fff"
          />
        </svg>
      </a>

      <a
        href="https://www.youtube.com/channel/UCbj3mZulxG_EVhLECUUPjtA"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${DarkMode && "dark"
          }`}
      >
        <svg fill="#fff" width="24"
          height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49 49">
          <g>
            <g>
              <path d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512
			c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744
			C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"/>
              <path d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
			c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
			c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"/>
            </g>
          </g>
        </svg>
      </a>
      {/* <a
        href="https://www.instagram.com/rutvikghaskata_18/"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${DarkMode && "dark"
          }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9062 4.875C17.1562 4.875 16.5938 5.4375 16.5938 6.1875C16.5938 6.9375 17.1562 7.5 17.9062 7.5C18.6562 7.5 19.2188 6.9375 19.2188 6.1875C19.2188 5.4375 18.6562 4.875 17.9062 4.875Z"
            fill="#fff"
          />
          <path
            d="M12 6.5625C8.90625 6.5625 6.46875 9.09375 6.46875 12.0938C6.46875 15.0938 9 17.625 12 17.625C15 17.625 17.5312 15.0938 17.5312 12.0938C17.5312 9.09375 15.0938 6.5625 12 6.5625ZM12 15.6562C10.0312 15.6562 8.4375 14.0625 8.4375 12.0938C8.4375 10.125 10.0312 8.53125 12 8.53125C13.9687 8.53125 15.5625 10.125 15.5625 12.0938C15.5625 14.0625 13.9687 15.6562 12 15.6562Z"
            fill="#fff"
          />
          <path
            d="M16.5 0.75H7.59375C3.75 0.75 0.75 3.75 0.75 7.5V16.4063C0.75 20.1562 3.75 23.1562 7.5 23.1562H16.4063C20.1562 23.1562 23.1562 20.1562 23.1562 16.4063V7.5C23.25 3.75 20.25 0.75 16.5 0.75ZM21.0938 16.5C21.0938 19.0312 19.0312 21.1875 16.4063 21.1875H7.5C4.96875 21.1875 2.8125 19.125 2.8125 16.5V7.59375C2.8125 5.0625 4.875 2.90625 7.5 2.90625H16.4063C18.9375 2.90625 21.0938 4.96875 21.0938 7.59375V16.5Z"
            fill="#fff"
          />
        </svg>
      </a> */}
      <a
        href="https://twitter.com/KachhadiaD4830"
        target="_blank"
        rel="noreferrer"
        className={`flex icon justify-center items-center md:h-12 md:w-12 h-10 w-10 cursor-pointer rounded-full ${DarkMode && "dark"
          }`}
      >
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8912 1.65249C22.127 1.65446 22.3578 1.72088 22.5585 1.84458C22.7593 1.96828 22.9223 2.14453 23.0301 2.35425C23.1378 2.56398 23.1862 2.79918 23.1699 3.0344C23.1535 3.26963 23.0732 3.4959 22.9375 3.68874L21.635 5.53999C21.555 11.8975 19.4288 16.2137 15.315 18.37C13.3547 19.3442 11.1887 19.8325 9 19.7937C6.29358 19.856 3.61916 19.1986 1.25 17.8887C1.09063 17.7816 0.96745 17.6287 0.896713 17.4502C0.825975 17.2717 0.810996 17.0759 0.85375 16.8887C0.893776 16.6988 0.990465 16.5254 1.13106 16.3915C1.27165 16.2576 1.44954 16.1695 1.64125 16.1387C3.23281 15.9165 4.80006 15.5457 6.3225 15.0312C-0.5 11.875 0.9875 4.77999 1.6375 2.60124C1.70087 2.38493 1.82002 2.1891 1.98299 2.03339C2.14596 1.87769 2.34702 1.76759 2.56598 1.71414C2.78495 1.6607 3.01413 1.66579 3.23051 1.72891C3.44688 1.79203 3.64286 1.91095 3.79875 2.07374C5.7958 4.13152 8.44366 5.43447 11.2925 5.76124C11.2419 4.99566 11.3603 4.22833 11.6392 3.51356C11.918 2.79879 12.3506 2.15405 12.9063 1.62499C13.8689 0.711446 15.1467 0.204238 16.4738 0.208894C17.8009 0.213551 19.0751 0.729714 20.0312 1.64999L21.8912 1.65249ZM2.65125 17.2425C4.97875 18.3325 10.4338 19.5162 14.735 17.2625C18.4287 15.3262 20.33 11.3475 20.3862 5.43624C20.3888 5.24077 20.4507 5.0507 20.5637 4.89124L21.915 2.96874L21.8638 2.90249C21.2162 2.89374 20.5775 2.88499 19.9263 2.90249C19.6723 2.89667 19.4292 2.79845 19.2425 2.62624C18.5229 1.89685 17.546 1.47883 16.5215 1.462C15.4971 1.44517 14.5069 1.83088 13.7638 2.53624C13.2864 2.99019 12.9297 3.55585 12.7256 4.18216C12.5216 4.80848 12.4767 5.47574 12.595 6.12374C12.6168 6.24445 12.6107 6.36854 12.5774 6.48658C12.544 6.60462 12.4842 6.71351 12.4025 6.80499C12.3242 6.89726 12.2244 6.96889 12.112 7.01357C11.9995 7.05825 11.8778 7.07462 11.7575 7.06124C8.39902 6.82687 5.2455 5.36006 2.9025 2.94249C2.065 5.53999 1.0025 11.81 7.73875 14.2737C7.88051 14.3246 8.00479 14.4149 8.09692 14.5341C8.18905 14.6532 8.2452 14.7962 8.25875 14.9462C8.27399 15.094 8.24681 15.243 8.1804 15.3758C8.11398 15.5086 8.01108 15.6198 7.88375 15.6962C6.23766 16.4989 4.46924 17.0215 2.65125 17.2425Z"
            fill="#fff"
          />
        </svg>
      </a>

    </div>
  );
};

const Footer = ({ mode }) => {
  const DarkMode = mode === "dark" ? true : false;
  return (
    <div
      id="footer"
      className={`w-full  h-[170px] relative ${!DarkMode ? "bg-[#323bac]" : "bg-[transparent] dark"
        } mt-10`}
    >
      <div className="container flex flex-col justify-center gap-5 sm:flex-row sm:justify-between items-center h-full px-5">
        <Link to={"home"} spy={true} smooth={true}>
          <img src={DarkLogo} alt="" className="logo cursor-pointer" />
          <p className={`font-light text-[white] ml-3 `}>
            dharakachhadia@gmail.com
          </p>
        </Link>
        <SocialLinks DarkMode={DarkMode} />
      </div>
      {/* <p className="font-light text-[white] absolute bottom-0 left-[50%]">
        © 2022 RUTVIK All rights reserved.
      </p> */}
    </div>
  );
};

export default Footer;
