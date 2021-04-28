import React from "react";
import "../App.css";
import "../Appq";
import Navbar from "./Home/Navbar";
import Body from "./Home/Body";
import Leftarrow from "./Home/Leftarrow";
import Rightarrow from "./Home/Rightarrow";
import Stylebox from "./Home/Stylbox";
import Bubble from "./Extra/Bubble";
import Shome from "../components/sales/Shome";
import Purchase from "./purchase/Purchase";
import Works from "./works/Works";
import Contact from "./Contact_us/Contact";
import About from "./About/About";
import Salesintro from "./sales/Salesintro/Salesintro";
import Purchaseintro from "./purchase/Purchaseintro/Purchaseintro";
import Postitems from "./purchase/Postitems/Postitems";
import Salesitems from "./sales/Salesitems/Salesitems";
import Workitem from "./works/workitem/Workitem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workintro from "./works/Workintro/Workintro";
import { Provider } from "./Context";
import Login from "./Extra/login";

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <div className="center">
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Body />
                  <Stylebox />
                  <Leftarrow />
                  <Rightarrow />
                  <Bubble />
                </Route>

                <Route exact path="/sales">
                  <Shome />
                  <Bubble />
                </Route>

                <Route exact path="/purchase">
                  <Purchase />
                  <Bubble />
                </Route>

                <Route exact path="/works">
                  <Works />
                  <Bubble />
                </Route>

                <Route exact path="/contact">
                  <Contact />
                  <Bubble />
                </Route>

                <Route exact path="/about">
                  <About />
                  <Bubble />
                </Route>

                <Route exact path="/Salesintro">
                  <Salesintro />
                </Route>

                <Route exact path="/Purchaseintro">
                  <Purchaseintro />
                </Route>

                <Route exact path="/Purchaseintro/:id" component={Postitems} />

                <Route exact path="/Salesintro/:id" component={Salesitems} />

                <Route exact path="/Workintro">
                  <Workintro />
                </Route>

                <Route exact path="/Workintro/:id" component={Workitem} />

                <Route exact path="/123" component={Login} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
