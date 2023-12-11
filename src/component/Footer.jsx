import React from "react";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="promo">
          <h3>Promo Spesial</h3>
          <p>Back To Schol</p>
          <p>12.12 in Desember</p>
          <p>Ramadhan</p>
          <p>Halowen</p>
          <p>Learning Day</p>
        </div>
        <div className="contact">
          <img src="public/footer/icon-footer.svg" alt="" />
          <h2>“ Alwasy For You ”</h2>
          <div className="container-icon">
            <img src="public/footer/instagram.svg" alt="instagram" />
            <img src="public/footer/YouTube.svg" alt="YouTube" />
            <img src="public/footer/Twiter.svg" alt="Twiter" />
            <img src="public/footer/LinkInd.svg" alt="LinkInd" />
            <img src="public/footer/Facebook.svg" alt="Facebook" />
          </div>
        </div>
        <div className="help">
          <h3>Help</h3>
          <p>Customer & Service</p>
          <p>Returns</p>
          <p>Bug</p>
          <p>Payment</p>
          <p>Policy</p>
        </div>
      </div>
      <hr />
      <h2>All existing books have a license from the author</h2>
    </footer>
  );
}

export default Footer;
