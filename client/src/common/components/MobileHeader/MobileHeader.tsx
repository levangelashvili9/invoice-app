import {
  Container,
  User,
  ThemeChangerButtom,
  Div,
} from "./MobileHeader.styled";

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import useWindowSize from "../../hooks/useWindowSize";

import LogoSVG from "../../../assets/svg/logo.svg";
import LogoDesktopSVG from "../../../assets/svg/logo-desktop.svg";
import UserSVG from "../../../assets/svg/user.svg";
import MoonSVG from "../../../assets/svg/moon.svg";
import SunSVG from "../../../assets/svg/sun.svg";

export const MobileHeader = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  const themeChangeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <Link to="/">
        <img src={width > 1080 ? LogoDesktopSVG : LogoSVG} alt="" />
      </Link>
      <Div>
        {isDarkMode ? (
          <ThemeChangerButtom
            src={SunSVG}
            alt=""
            onClick={themeChangeHandler}
          />
        ) : (
          <ThemeChangerButtom
            src={MoonSVG}
            alt=""
            onClick={themeChangeHandler}
          />
        )}
        <User>
          <img src={UserSVG} alt="" />
        </User>
      </Div>
    </Container>
  );
};
