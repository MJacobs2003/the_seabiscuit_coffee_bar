import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from "./components/Menu/Menu"
import ApLogin from "./components/Admin Panel/ApLogin"

export default function App() {
    return (
        <div>
            <Navbar />
            <Menu />
            <ApLogin />
        </div>
    )
}