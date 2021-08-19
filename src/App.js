import './App.css';
import { useState } from 'react';
import Register from "../src/components/User_Manage/register"
import { Route } from "react-router-dom"
import Login from './components/User_Manage/login';
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard"
function App() {
  const [token, settoken] = useState(sessionStorage.getItem('token'))

  console.log(token);
  if (!token) {
    return <Login />

  }


  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
