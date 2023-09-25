import React from "react";

export default function MenuBtnLinkLink(props) {
    return (
        <a className="Menu-btn" href={props.link}>{props.title}</a>
    )
}