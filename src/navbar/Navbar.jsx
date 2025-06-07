import React from "react";
import { NavLink } from "react-router";
import style from "./Navbar.module.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function Nv() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className={style.bgNavbar}>
        <Container>
          <Navbar.Brand className="logo fw-bold fs-2 text-white">
            Start Framework
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <ul className=" d-flex flex-row m-0 p-0 justify-content-center align-items-center ">
              <li className={style.listStyle}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${style.anchorStyle} ${isActive ? style.active : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className={style.listStyle}>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `${style.anchorStyle} ${isActive ? style.active : ""}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className={style.listStyle}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${style.anchorStyle} ${isActive ? style.active : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className={style.listStyle}>
                <NavLink
                  to="/recipes"
                  className={({ isActive }) =>
                    `${style.anchorStyle} ${isActive ? style.active : ""}`
                  }
                >
                  Recipres
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
// <div className={style.bgNavbar}>
//   <div className="logo fw-bold fs-2">Start Framework</div>
//   <ul className=" d-flex flex-row m-0 p-0 justify-content-center align-items-center ">
//     <li className={style.listStyle}>
//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           `${style.anchorStyle} ${isActive ? style.active : ""}`
//         }
//       >
//         About
//       </NavLink>
//     </li>
//     <li className={style.listStyle}>
//       <NavLink
//         to="/portfolio"
//         className={({ isActive }) =>
//           `${style.anchorStyle} ${isActive ? style.active : ""}`
//         }
//       >
//         Portfolio
//       </NavLink>
//     </li>
//     <li className={style.listStyle}>
//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           `${style.anchorStyle} ${isActive ? style.active : ""}`
//         }
//       >
//         Contact
//       </NavLink>
//     </li>
//     <li className={style.listStyle}>
//       <NavLink
//         to="/recipes"
//         className={({ isActive }) =>
//           `${style.anchorStyle} ${isActive ? style.active : ""}`
//         }
//       >
//         Recipres
//       </NavLink>
//     </li>
//   </ul>
// </div>
