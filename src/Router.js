import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import ManageCenter from "./Admin/ManageCenter/ManageCenter";
import ManagePharmacy from "./Admin/ManagePharmacy/ManagePharmacy";
import inscriptionPharmacie from "./inscriptionPharmacie/inscriptionPharmacie";
import updateInscri from "./updateInscri/updateInscri";
import reportRdv from "./reportRdv/reportRdv";
import Login from "./login";
import ManageVaccine from "./Admin/ManageVaccine/ManageVaccine";
import InscriptionInCenter from "./InscriptionInCenter/InscriptionInCenter";
import Chatbot from "./Chatbot"

export let history = createBrowserHistory({ basename: "" });
class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <Route path="/Home" component={Home}></Route>

          <Route path="/ManageCenter" component={ManageCenter}></Route>
          <Route path="/ManagePharmacy" component={ManagePharmacy}></Route>

          <Route
            path="/inscriptionInCenter"
            component={InscriptionInCenter}
          ></Route>
          <Route path="/ManageVaccines" component={ManageVaccine}></Route>

          <Route
            path="/inscriptionPharmacie"
            component={inscriptionPharmacie}
          ></Route>
          <Route path="/updateInscri" component={updateInscri}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/reportRdv" component={reportRdv}></Route>
       

          <Route path="/Admin" component={Admin}></Route>
          <Route path="/Chatbot" component={Chatbot}></Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
