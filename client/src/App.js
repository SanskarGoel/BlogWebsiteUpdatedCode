import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user}=useContext(Context);//will tell whether user logged in or not
  return ( 
    <Router>
      <TopBar/>
      <Switch> 
      {/* The Switch component ensures that only one route is rendered at a time. Once a match is found, it stops iterating through its 
      children and renders the matched route. This prevents multiple routes from being rendered simultaneously. */}
        <Route exact path="/">{/*mentioned exact because if for eg we go to /register page then also it opens home*/}
          <Home/>
        </Route>
        <Route path="/register">{user?<Home/>: <Register/>}</Route>{/* if there is a usser logged then he will go to home page and not to register page */}
        <Route path="/login">{user?<Home/>: <Login/>}</Route>
        <Route path="/write">{user?<Write/>: <Register/>}</Route>
        <Route path="/settings">{user?<Settings/>: <Register/>}</Route>
        <Route path="/settings"> <Settings/> </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
