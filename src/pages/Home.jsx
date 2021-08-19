import React from 'react'
import { useEffect } from 'react'

import Navbar from "../components/Navigation/navbar"
import Header from "../components/Header/header"
import Footer from "../components/footer/footer"
// public page
function Home() {

    useEffect(() => {
        // axios.get("http://localhost:6563/auth/google", () => {

        // }).then((data) => {
        //     console.log(data);
        // }).catch((err) => console.log(err))

    }, [])

    return < div >
        <Navbar />
        <Header />
        <Footer />

    </div >

}

export default Home
