import React from 'react'
import { Route } from "react-router-dom"
// protected for only authenticated or logged in users 
import NavDashboard from "../components/Navigation/dashboard-nav"
import Profile from "../components/Profile/profile"
function Dashboard() {
    const getTweets = () => {

    }
    return (
        <div>
            <NavDashboard />
            <h1>asd</h1>
            <Route exact path="/profile" component={Profile} />

        </div>
    )
}

export default Dashboard
