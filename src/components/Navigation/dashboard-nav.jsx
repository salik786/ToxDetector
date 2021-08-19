import React from 'react'
import { Link, Route } from "react-router-dom"
import "./navbar-style.css"
function NavDashboard() {
    return (
        <>

            <div className="nav-dash-left">
                <div className="logo">
                    {/* <img src="https://i.ibb.co/yPxbkV7/logo.png" height="50" alt="logo" border="0"></img> */}

                    <h1><b className="text-format">Tox</b><i>D</i>etector</h1>

                </div>
                <ul className="">
                    <li className="nav-link nav-link-dash"><Link to="/profile"> Profile</Link></li>
                    <li className="nav-link nav-link-dash"><Link to="/block" />
                        List User
                    </li>
                    <li className="nav-link nav-link-dash">Search Tweet</li>
                    <li className="nav-link nav-link-dash">Check Stat</li>
                    <li className="nav-link nav-link-dash"> Search By Cities</li>
                </ul>

            </div>


        </>
    )
}

export default NavDashboard
