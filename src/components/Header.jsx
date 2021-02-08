import React from "react";

const Header = () => {
  <header>
    <div className="header-container">
      <div className="left-icons">
        <a href="#">
          <img src="../assets/icons/icon_search.svg" alt="search" />
        </a>
        <a href="#">
          <img src="../assets/icons/icon_user.svg" alt="user" />
        </a>
      </div>
      <a href="#">
        <img src="../assets/logo/logo.svg" alt="logo" />
      </a>
      <div className="right-icons">
        <a href="#">
          <img src="../assets/icons/icon_cart.svg" alt="car" />
        </a>
      </div>
    </div>
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <a href="">Tops</a>
            <ul>
              <li>
                <span>
                  <a href="#">Categories</a>
                </span>
              </li>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Blouses</a>
              </li>
              <li>
                <a href="#">Sweaters</a>
              </li>
              <li>
                <a href="#">Tanks</a>
              </li>
              <li>
                <a href="#">Tees</a>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <a href="#">Dress Code</a>
                </span>
              </li>
              <li>
                <a href="#">Work from home</a>
              </li>
              <li>
                <a href="#">Business casual</a>
              </li>
              <li>
                <a href="#">Business formal</a>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <a href="#">Fabrics</a>
                </span>
              </li>
              <li>
                <a href="#">Vegan silk</a>
              </li>
              <li>
                <a href="#">Knit jersey</a>
              </li>
              <li>
                <a href="#">Ponte knit</a>
              </li>
              <img src="../assets/images/shop-all-hours.jpg " alt="" />
              <img src="../assets/images/shop-unstainable.jpg" alt="" />
            </ul>
          </li>
          <li>
            <a href="">Bottoms</a>
          </li>
          <li>
            <a href="">Jackets</a>
          </li>
          <li>
            <a href="">Dresses</a>
          </li>
          <li>
            <a href="">Subscribe & Save</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Header;
