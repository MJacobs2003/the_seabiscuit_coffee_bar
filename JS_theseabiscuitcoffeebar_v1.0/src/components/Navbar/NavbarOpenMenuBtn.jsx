import React from "react";

export default function NavbarOpenMenuBtn() {
    function MenuOpen() {
        document.getElementById("Menu").style.width = "35vw";
        document.getElementById("Menu_shade").style.display = "block";
    }
    
    return(
        <button className="NavbarOpenMenuBtn" id="NavbarOpenMenuBtn" type="button" onClick={MenuOpen}></button>
    )
}