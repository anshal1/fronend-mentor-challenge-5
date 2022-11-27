import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import menu from "../../images/icon-menu.svg";
import close from "../../images/icon-close-menu.svg";
import todo from "../../images/icon-todo.svg";
import cl from "../../images/icon-calendar.svg";
import planning from "../../images/icon-planning.svg";
import reminders from "../../images/icon-reminders.svg";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState("phone_menu");
  return (
    <div className="main-nav-container">
      <div className="nav_left_container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar_links">
          <p>
            Features{" "}
            <span className="icons">
              <img src={arrowDown} alt="" />
            </span>{" "}
            <span className="dropdown">
              <li>
                <img src={todo} alt="" /> Todo List
              </li>
              <li>
                <img src={cl} alt="" /> Calandar
              </li>
              <li>
                <img src={reminders} alt="" /> Reminders
              </li>
              <li>
                <img src={planning} alt="" /> Planning
              </li>
            </span>
          </p>
          <p>
            Company{" "}
            <span className="icons">
              <img src={arrowDown} alt="" />
            </span>
            <span className="dropdown2">
              <li>
                 History
              </li>
              <li>
                 Our Team
              </li>
              <li>
                Blog
              </li>
            </span>
          </p>
          <p>Careers</p>
          <p>About</p>
        </div>
      </div>
      <div className="right_nav_container">
        <div className="nav_btns">
          <button>Login</button>
          <button>Register</button>
        </div>
        <div className="menu_bnt">
          <img
            src={menu}
            onClick={() => {
              if (showMenu === "phone_menu") {
                setshowMenu("phone_menu_show");
              } else {
                setshowMenu("phone_menu");
              }
            }}
            id="menu_icon"
            alt=""
          />
          <div className={showMenu}>
            <div className="close_btn">
              <img
                src={close}
                alt=""
                onClick={() => {
                  setshowMenu("phone_menu");
                }}
              />
            </div>
            <p>
              Features{" "}
              <span className="icons">
                <img src={arrowDown} alt="" />
              </span>{" "}
              <span className="dropdown">
              <li>
                <img src={todo} alt="" /> Todo List
              </li>
              <li>
                <img src={cl} alt="" /> Calandar
              </li>
              <li>
                <img src={reminders} alt="" /> Reminders
              </li>
              <li>
                <img src={planning} alt="" /> Planning
              </li>
            </span>
            </p>
            <p>
              Company{" "}
              <span className="icons">
                <img src={arrowDown} alt="" />
              </span>
              <span className="dropdown2">
              <li>
                 History
              </li>
              <li>
                 Our Team
              </li>
              <li>
                Blog
              </li>
            </span>
            </p>
            <p>Careers</p>
            <p>About</p>
            <div className="nav_btns_phone">
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
