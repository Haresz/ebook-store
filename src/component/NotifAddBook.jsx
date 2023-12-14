import React from "react";
import ButtonFill from "./ButtonFill";

function NotifAddBokk() {
  return (
    <div className="container-notif">
      <div className="notif-tambah-buku">
        <h2>ADD GREAT AT WORK ?</h2>
        <div className="container-button">
          <ButtonFill name="Yes" />
          <ButtonFill name="No" />
        </div>
      </div>
    </div>
  );
}

export default NotifAddBokk;
