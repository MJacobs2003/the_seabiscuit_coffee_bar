import React from "react";

export default function MenuLoginBtn() {
    function OpenAdminPanel() {
        document.getElementById("Ap-login-shade").style.display = "flex";
    }
    
    return (
        <button className="Menu-login-btn" onClick={OpenAdminPanel}>Admin</button>
    )
}
