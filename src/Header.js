import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
const user = useSelector(selectUser);
const dispatch = useDispatch()

const signOut = () => {
  auth.signOut().then(() => {
    dispatch(logout());
  });
}
  return (
    <div className="header">

      <div className="header__left">
        <IconButton>
          <MenuIcon className="headerMenu__icon" />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </div>
      <div className="header__center">
        <IconButton>
          <SearchIcon className="header__center__searchLogo" />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <ExpandMoreIcon
            className="header__center__moreLogo"
          />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpIcon className="header__right__helpLogo" />
        </IconButton>
        <IconButton>
          <SettingsIcon className="header__right__settingLogo"/>
        </IconButton>
        <IconButton>
          <AppsIcon className="header__right__appsLogo"/>
        </IconButton>
        <div className="header__right__avatar">
        <Avatar src={user?.photoUrl} onClick={signOut}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
