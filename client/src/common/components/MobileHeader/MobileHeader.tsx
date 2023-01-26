import {
  Container,
  User,
  ThemeChangerButtom,
  Div,
} from "./MobileHeader.styled";

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { toggleTheme } from "../../../redux/slices/themeSlice";

import LogoSVG from "../../../assets/svg/logo.svg";
import UserSVG from "../../../assets/svg/user.svg";
import MoonSVG from "../../../assets/svg/moon.svg";
import SunSVG from "../../../assets/svg/sun.svg";

export const MobileHeader = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const themeChangeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <Link to="/">
        <img src={LogoSVG} alt="" />
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
