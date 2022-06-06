import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Style from "../styles/bottomBar.module.css";

export const BottomBar = () => {
  let oldScroll = 0;
  const [isVisible, setIsVisible] = useState(true);

  const ControlScroll = () => {
    if (window.scrollY > oldScroll) {
      setIsVisible(false);
    } else {
      setIsVisible(false);
    }
    oldScroll = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", ControlScroll);
    return () => {
      window.removeEventListener("scroll", ControlScroll);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [isVisible]);

  return (
    <div>
      {isVisible && (
        <div className={Style.BottomBarDiv}>
          <BottomNavigation showLabels className={Style.bottomNavigation}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </div>
      )}
    </div>
  );
};
