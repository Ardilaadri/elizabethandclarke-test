import React from "react";
import Logo from "../assets/logo/logo.svg";
import Search from "../assets/icons/icon_search.svg";
import User from "../assets/icons/icon_user.svg";
import Car from "../assets/icons/icon_cart.svg";
import Hours from "../assets/images/shop-all-hours.jpg";
import Shop from "../assets/images/shop-unstainable.jpg";
import "../assets/styles/components/Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-icons">
          <a href="https://shop.elizabethandclarke.com/">
            <img src={Search} alt="search" />
          </a>
          <a href="https://shop.elizabethandclarke.com/">
            <img src={User} alt="user" />
          </a>
        </div>
        <a href="https://shop.elizabethandclarke.com/">
          <img src={Logo} alt="logo" />
        </a>
        <div className="right-icons">
          <a href="https://shop.elizabethandclarke.com/">
            <img src={Car} alt="car" />
          </a>
        </div>
      </div>
      <nav>
        <div className="nav-container">
          <ul>
            <li>
              <a href="https://shop.elizabethandclarke.com/">Tops</a>
              <ul>
                <li>
                  <span>
                    <a href="https://shop.elizabethandclarke.com/">
                      Categories
                    </a>
                  </span>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">All</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Blouses</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Sweaters</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Tanks</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Tees</a>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <a href="https://shop.elizabethandclarke.com/">
                      Dress Code
                    </a>
                  </span>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">
                    Work from home
                  </a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">
                    Business casual
                  </a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">
                    Business formal
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <a href="https://shop.elizabethandclarke.com/">Fabrics</a>
                  </span>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Vegan silk</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Knit jersey</a>
                </li>
                <li>
                  <a href="https://shop.elizabethandclarke.com/">Ponte knit</a>
                </li>
                <img src={Hours} alt="" />
                <img src={Shop} alt="" />
              </ul>
            </li>
            <li>
              <a href="https://shop.elizabethandclarke.com/">Bottoms</a>
            </li>
            <li>
              <a href="https://shop.elizabethandclarke.com/">Jackets</a>
            </li>
            <li>
              <a href="https://shop.elizabethandclarke.com/">Dresses</a>
            </li>
            <li>
              <a href="https://shop.elizabethandclarke.com/">
                Subscribe & Save
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
