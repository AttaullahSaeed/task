import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footer() {
  return (
    <footer className="site-footer ">
      <h4 className="text-center text-white my-3">Logo</h4>
      <div className="row m-0 px-5 ">
        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
          <ul className="footer-links">
            <li>
              <a href="">Tidigare forestallningar</a>
            </li>
            <li>
              <a href="">Presentkort</a>
            </li>
            <li>
              <a href="">jobba med oss</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
          <ul className="footer-links">
            <li>
              <a href="">Hjalpcenter</a>
            </li>
            <li>
              <a href="">Anvandarvillor</a>
            </li>
            <li>
              <a href="">Integritespolicy</a>
            </li>
            <li>
              <a href="">Bjud in vanner</a>
            </li>
            <li>
              <a href="">Vanliga fragor</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <ul className="footer-links">
            <div className="contact___icones">
              <FacebookIcon className="fb__icon___cs" />
              <TwitterIcon className="fb__icon___cs" />
              <InstagramIcon className="fb__icon___cs" />
            </div>
            <li>
              <a href="">2020 Abundo</a>
            </li>
            <li>
              <a href="">supprt@abundolive</a>
            </li>
            <li>
              <a href="">0222-28110</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
