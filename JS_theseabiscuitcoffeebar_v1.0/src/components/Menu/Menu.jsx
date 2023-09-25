import React from 'react';
import MenuContent from './MenuContent';
import MenuBtnClose from './MenuBtnClose';
import MenuLoginBtn from "./MenuLoginBtn";

export default function Menu() {    
    return (
        <div className="Menu_shade" id='Menu_shade'>
            <div className='Menu' id='Menu'>
                <div className='Menu-head'>
                    <MenuBtnClose />
                </div>
                <MenuContent />
                <div className='Menu-btn-login'>
                    <MenuLoginBtn />
                </div>
            </div>
        </div>
        
    )
}