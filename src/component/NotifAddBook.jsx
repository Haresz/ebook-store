import React from "react";
import ButtonFill from "./ButtonFill";

function NotifAddBokk({ hide, handleClickYes, handleClickNo }) {
  return (
    <div className={hide}>
      <div className="container-notif">
        <div className="notif-tambah-buku">
          <h2>ADD GREAT AT WORK ?</h2>
          <div className="container-button">
            <ButtonFill onClick={handleClickYes} name="Yes" />
            <ButtonFill onClick={handleClickNo} name="No" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifAddBokk;
