import React from "react"
import data_menu from "../../data/data_menu"
import MenuBtnLink from "./MenuBtnLink"

export default function MenuContent() {
    const menuProps = data_menu.map(item => {
        return (
            <MenuBtnLink 
                key={item.id}
                title={item.title}
                link={item.link}            
            />
        )
    })
    
    return (
        <div className="Menu-content">
            <h1>Menu</h1>
            {menuProps}
        </div>
    )
}