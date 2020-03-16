import React from "react";
import "./Stylesheets/Footer.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer>
      <div className="QuickLinks-Footer">
        <ul>
          <li>
            <h3>Quick Links</h3>
          </li>
          <Link to="/bookshome">
            <li>Home</li>
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
          <Link to="/addbook">
            <li>Add Books</li>
          </Link>
        </ul>
      </div>
      <div className="AboutUs-Footer">
        <h2>About Us</h2>
        <div className="social-Footer">
          <ul>
            <li>
              <a
                href="https://web.facebook.com/fakharabbas.jappa"
                target="_blank"
              >
                <i className="fa fa-2x fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCXDOOch06kq6vGZjzbBCF9w?view_as=subscriber"
                target="_blank"
              >
                <i className="fa fa-2x fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://z-p3.www.instagram.com/fakhar.abbas_5/"
                target="_blank"
              >
                <i className="fa fa-2x fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="copyright">
          <div className="cr">
            <p>Copyright © 2020 Shop Station. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 30vh;
  width: 100%;
  background: var(--theme);
  position: absolute;
  margin-top: 15px;

  h3 {
    color: var(--mainWhite);
  }
  a {
    color: white;
    text-decoration: none;
  }
  .QuickLinks-Footer {
    border-right: 1px solid var(--mainWhite);
    background-color: white;
    font-family: "Overlock", cursive;
    color: #f3f3f3;
    ul {
      float: left;
      color: #f3f3f3;
      margin-left: 5%;
      font-family: "Overlock", cursive;
    }
    li {
      list-style: none;
    }
  }
  .AboutUs-Footer {
    color: white;
    text-align: center;
    font-family: "Overlock", cursive;
    // background: lightgray;

    .social-Footer {
      display: flex;
      justify-content: center;
    }

    ul {
    }
    li {
      list-style: none;
      float: left;
      margin-right: 30px;
    }
    a:hover {
      color: #2a6675;
      cursor: pointer;
    }
    .copyright {
      //   margin-top: px;
      display: flex;
      justify-content: center;
      font-family: "Overlock", cursive;
      background: #f4f4f4;
      color: var(--theme);
      .cr {
        margin-left: 150px;
      }
    }
  }
`;

export default Footer;
