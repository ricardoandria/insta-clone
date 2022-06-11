import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./accountMenu.scss";
import {
  faBookmark,
  faGem,
  faUser,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <img
            src="/images/dog1.jpg"
            alt=""
            style={{
              width: "20px",
              height: "20px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 15,
              height: 15,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 7,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={{ fontSize: "10px" }}>
          <Link
            to="/profil/:id"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FontAwesomeIcon icon={faUser} className="icon" /> Profile
          </Link>
        </MenuItem>
        <MenuItem style={{ fontSize: "10px" }}>
          <FontAwesomeIcon icon={faBookmark} className="icon" /> Enregistre
        </MenuItem>

        <MenuItem style={{ fontSize: "10px" }}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faGem} className="icon3" />
          </ListItemIcon>
          Parametre
        </MenuItem>
        <MenuItem style={{ fontSize: "10px" }}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </ListItemIcon>
          Changer de compte
        </MenuItem>
        <Divider />
        <MenuItem style={{ fontSize: "10px" }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            to="/login"
          >
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
