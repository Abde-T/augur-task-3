import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import {  useNavigate } from "react-router-dom";
import "./HomePage.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import PersonIcon from "@mui/icons-material/Person";
import SortIcon from "@mui/icons-material/Sort";

const SideBar = () => {

  return (
    <div className="SideBar__container">
      <SideNav
        defaultselected="home"
        className="SideBar__nav"
        style={{
          backgroundColor: "#e6e6e7",
          padding: "20px 0",
          textAlign: "center",
          color: "#242424",
          boxShadow: "2px 102px 0 1.5px #242424",
        }}
      >
        <SideNav.Toggle
          style={{
            filter: "invert()",
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem
            eventKey="home"
            style={{
              margin: "16px 0",
            }}
          >
            <NavIcon>

                <SidebarLink Icon={HomeIcon} />
            </NavIcon>
            <NavText
              style={{
                fontFamily: "Glitch Goblin",
                color: "#242424",
              }}
            >
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="sort" >
            <NavIcon
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SidebarLink Icon={SortIcon} />
            </NavIcon>
           
          </NavItem>
          <NavItem eventKey="info">
            <NavIcon
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            >
              <SidebarLink Icon={PersonIcon} />
            </NavIcon>
            <NavText
              style={{
                fontFamily: "Glitch Goblin",
                color: "#242424",
              }}
            >
              Profile
            </NavText>
            <NavItem eventKey="info/profile">
              <NavText
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               
                  <div className="user__name"> name</div>
              </NavText>
            </NavItem>
            <NavItem eventKey="info/Logout">
              <NavText
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="div__button side__button" >
                  Logout
                </div>
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

function SidebarLink({ text, Icon }) {
  return (
    <li className="icon__list">
      <Icon className="icon" />
      <span className="icon__text">{text}</span>
    </li>
  );
}
export default SideBar;
