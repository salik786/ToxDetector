import './App.css';
import Register from "../src/components/User_Manage/register"
import { Route, Switch, Redirect } from "react-router-dom"
import Login from './components/User_Manage/login';
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard"
function App() {

  if (sessionStorage.getItem("token")) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />

        {/* <Redirect to="/dashboard" /> */}
      </Switch>
    )
  }
  else {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {/* <Redirect to="/login" /> */}
        </Switch>

      </>
    );
  }
}

export default App;
{/* 
      <PrivateRoute restricted={true} component={Dashboard} exact path="/dashboard" />
      <PublicRoute restricted={false} component={Home} exact path="/" />
      <PublicRoute restricted={false} component={Login} exact path="/login" />
      <PublicRoute restricted={false} component={Register} exact path="/register" /> */}
{/* Redirect will help if user type any url this will redirect to home page */ }
