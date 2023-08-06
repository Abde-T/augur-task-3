import React from "react";
import logo from "../assets/logo.png";
import { Avatar, Divider, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Nav = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [Open, setOpen] = React.useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  return (
    <nav className="nav__container">
        <img src={logo} className="SideBar__logo" alt="logo" />
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input
              placeholder="Search..."
              className="input_tags"
              variant="standard"
        
            />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>

      </div>
    
        <>
          <div className="user__wrapper">
            <button className="bell_button hide" onClick={HandleOpen}>
              <NotificationsActiveIcon />
            </button>
            
            <IconButton
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                className="user__icon"
            
                sx={{ width: 40, height: 40 }}
                style={{
                  backgroundColor: "#242424",
                  fontSize: "30px",
                }}
              >
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  boxShadow: "4px 4px #242424",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                  <div className="user__name">
                    {" "}
                    <PersonIcon /> Profile{" "}
                  </div>
              </MenuItem>
              <MenuItem>
                <div className="bell_button none" onClick={HandleOpen}>
                  <NotificationsActiveIcon/>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <div className="div__button button-confirm" >
                  Logout
                </div>
              </MenuItem>
            </Menu>
          </div>
        </>
    </nav>
  );
};

export default Nav;
