import React from "react";

export default function MenuBtnClose() {
    function MenuClose() {
        document.getElementById("Menu").style.width = "0";
        document.getElementById("Menu_shade").style.display = "none";
    }

    return (
        <button type="button" className="Menu-btn-close" onClick={MenuClose}></button>
    )
}