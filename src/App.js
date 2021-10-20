
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Components/Pages/Shared/Header/NavBar';
import Services from './Components/Pages/services/Services';
import Doctors from './Components/Pages/Doctors/Doctors';
import Contact from './Components/Pages/Contact/Contact';
import NotFound from './Components/Pages/NotFound/Notfound';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Authprovider from './Components/AuthProvider/Authprovider';
import Privateroute from './Components/PrivateRoute/Privateroute';
import GetService from './Components/Pages/Get Service/GetService';
function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Privateroute path="/getservice">
              <GetService></GetService>
            </Privateroute>
            <Route exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
