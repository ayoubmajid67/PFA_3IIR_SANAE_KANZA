"use client"
import React, { useState } from "react";
import "./HeaderOutlet.css";
const logo = "/assets/logo.png";
import ThemeToggle from "../themeToggle/ToggleTheme";
import HeaderProfile from "../headerProfile/HeaderProfile";

// External imports:
import Link from "next/link";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import OtherLinksBox from "./otherLinksBox/OtherLinksBox";

import {
	People as PeopleIcon,
	Business as BusinessIcon,
	Event as EventIcon,
	Person as PersonIcon,
	Storage as StorageIcon,
	ManageAccounts as ManageAccountsIcon,
	Hotel as HotelIcon,
	Group as GroupIcon,
  } from "@mui/icons-material";

  import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
  import LineAxisIcon from '@mui/icons-material/LineAxis';
export default function HeaderOutlet({ customClass, profileImg = false }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginStat, setLoginStat] = useState(true);
  const [otherLinksShowStat, setOtherLinksShow] = useState(false    );

  function logOut() {
    setLoginStat(false);
  }

  const toggleDrawer = () => {
      if(!drawerOpen)  handleMouseLeaveOtherLinksBox();
    setDrawerOpen(!drawerOpen);

  };



  // Handle mouse enter event for "Other Links"
  const handleMouseEnterOtherLinks = () => {
    setOtherLinksShow(true);

    if(drawerOpen) setDrawerOpen(false);
  };

  // Handle mouse leave event for OtherLinksBox
  const handleMouseLeaveOtherLinksBox = () => {
    setOtherLinksShow(false);
  };



  const links = [
	[
	  { to: "/", icon: <AddHomeWorkIcon />, text: "Home" },
	  { to: "/registerTeacher", icon: <BusinessIcon />, text: "teacher registration" },
	],
	[
	  { to: "/teachersDemands", icon: <EventIcon />, text: "Teachers demands" },
	  { to: "/DashboardAdmin", icon: <LineAxisIcon />, text: "Dashboard Admin" },
	],
	[
	  { to: "/profile", icon: <PersonIcon />, text: "Profile" },
    { to: "/usersManagement", icon: <ManageAccountsIcon />, text: "Users Management" },
	],
	[


	],
  ];
  return (
    <>
      <header className="HeaderOutletComponentClass">
        <div className="logoContainer">
          <Link href="/">
            <img src={logo} loading="lazy" alt="Logo" />
          </Link>
        </div>

        {/* Navigation for Desktop */}
        <nav className="desktopNav">
          <ul className="pagesList">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About us</Link>
            </li>
            <li onMouseEnter={handleMouseEnterOtherLinks}>
              <Link href="">Other Links</Link>
            </li>
          </ul>
          <div className="controlButtons">
            {!loginStat && (
              <>
                <Link href="/signUp">
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </>
            )}
            {loginStat && (
              <>
                <Button variant="contained" onClick={logOut} color="primary">
                  SignOut
                </Button>
                <HeaderProfile profileImg={profileImg} />
              </>
            )}
            <ThemeToggle />
          </div>
        </nav>

        {/* Burger Menu for Mobile */}
        <div className="mobileMenu">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon className="menuIcon" />
          </IconButton>
        </div>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <div className="drawerBox" sx={{ width: 250, padding: 2 }}>
            <div className="drawerHeader">
              <IconButton onClick={toggleDrawer}>
                <CloseIcon className="closeIcon" />
              </IconButton>
            </div>
            <ThemeToggle />
            <ul className="pagesList">
              <li>
                <Link href="/" onClick={toggleDrawer}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" onClick={toggleDrawer}>
                  About us
                </Link>
              </li>
              <li>
                <li    onClick={handleMouseEnterOtherLinks}>
                  Other Links
                </li>
              </li>
            </ul>
            <div className="controlButtons">
              {!loginStat && (
                <>
                  <Link href="/signUp">
                    <Button variant="contained" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                  </Link>
                </>
              )}
              {loginStat && (
                <>
                  <Button variant="contained" onClick={logOut} color="primary">
                    SignOut
                  </Button>
                  <HeaderProfile profileImg={profileImg} />
                </>
              )}
            </div>
          </div>
        </Drawer>

        {/* OtherLinksBox with mouse leave event */}
        <OtherLinksBox
          customClass={otherLinksShowStat ? "activeOtherLinksBoxComponentClass" : ""}
          onMouseLeave={handleMouseLeaveOtherLinksBox}
          
		  links={links}
        />
      </header>


    </>
  );
}