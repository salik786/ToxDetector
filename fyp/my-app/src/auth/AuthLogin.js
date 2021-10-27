import { useState } from 'react'
function AuthLogin() {
    const [authToken, setAuthToken] = useState({})

    const getToken = () => {
        const token = sessionStorage.getItem('token')
        setAuthToken({ token });
        console.log(authToken);
        console.log(authToken);
        console.log(authToken);
    }

    return (

        getToken()
    )
}

export default AuthLogin
