import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            sapiente minima perspiciatis quibusdam! Minus sapiente quo debitis
            aliquam, illum a labore blanditiis sed nostrum suscipit.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, ab
            explicabo quidem ex delectus, dolore similique eveniet obcaecati
            illum, minus quod maiores recusandae. Dolor, voluptate.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">JhapaliStore</span>
          <span className="copyright">&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img  src="/img/stripe.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
