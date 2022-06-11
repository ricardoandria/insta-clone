import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import AccountMenu from "../accountMenu/AccountMenu";
import { Link } from "react-router-dom";
import * as React from "react";

import Modal from "@mui/material/Modal";
import PostUpload from "../PostUpload/PostUpload";
import Search from "../SearchBar/Search";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="navbar">
      <div className="nContainer">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="instagram" className="ImgLogo" />
          </Link>
        </div>
        <div className="nSearch">
          <Search />
        </div>
        <div className="navigation">
          <div className="navigationIcon">
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ width: "20px" }}
                className="iconNav"
              />
            </Link>
          </div>
          <div className="navigationIcon">
            <RiMessengerLine style={{ fontSize: "18px" }} className="iconNav" />
          </div>
          <div className="navigationIcon">
            <CgAddR
              onClick={handleOpen}
              style={{ fontSize: "18px" }}
              className="iconNav"
            />
          </div>
          <div className="navigationIcon">
            <AiOutlineCompass
              style={{ fontSize: "18px" }}
              className="iconNav"
            />
          </div>
          <div className="navigationIcon">
            <AiOutlineHeart style={{ fontSize: "18px" }} className="iconNav" />
          </div>
          <AccountMenu />
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalContainer">
            <PostUpload />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
