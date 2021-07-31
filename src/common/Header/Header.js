// import {logo} from "./logo.svg";
import "./Header.css"
import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" 
                className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Header;