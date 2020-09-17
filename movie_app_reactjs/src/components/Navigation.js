import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className = 'nav'>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Navigation

// a태그, href 사용시 페이지를 새로고침 : 그럼 react가 죽음 => link를 사용!