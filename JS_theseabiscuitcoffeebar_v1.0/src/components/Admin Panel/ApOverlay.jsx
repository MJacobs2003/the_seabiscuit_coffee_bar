import React from "react";

export default function ApOverlay() {
    function ApLoginClose() {
        document.getElementById("Ap-login-shade").style.display = "none";
    }
    
    return (
        <div className="ApOverlay">
            <button className="ApLoginCloseBtn" type="button" onClick={ApLoginClose}>Close</button>
        </div>
    )
}