import React from "react";
import './Home.css'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import profileReducer from "../reducers/ProfileReducer";
import {logout} from "../../service/UserService";
import {CommonComponent} from "./CommonComponent";
import {Link} from "react-router-dom";




export default class Home extends React.Component{


    render() {
        return(
            <body style={{backgroundColor: "#e3f2fd"}}>

                <div className="home-page">
                    <h1>GamersHub</h1>
                    <button className="home-btn">
                        <Link to={`/search`}>
                            Welcome
                        </Link>
                    </button>
                </div>
            </body>

        )
    }
}
