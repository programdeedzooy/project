import React from 'react'
import "../App.css"
import "../Appq"
import Navbar from './Home/Navbar'
import Body from './Home/Body'
import Leftarrow from './Home/Leftarrow'
import Rightarrow from './Home/Rightarrow'
import Stylebox from './Home/Stylbox'
import Bubble from './Home/Bubble'
import Shome from "../components/sales/Shome"
import Purchase from './purchase/Purchase'
import Works from './works/Works'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
 function App() {
  return (  
      <Router>
    <div>
      <div className="center">
        <div className="container">
           <Navbar/>
           <Switch>
             <Route exact path='/'>
               <Body/>
               <Stylebox/>
               <Leftarrow/>
               <Rightarrow/>
            </Route>

            <Route exact path="/sales">
                <Shome/>
            </Route>

            <Router exact path="/purchase" >
               <Purchase/>
            </Router >
            
            <Router>
               <Works/>
            </Router> 

            </Switch>
           
        </div>
    </div>
    {/* <Stylebox/> */}
    <Bubble/>
    </div>
    </Router>
  )
}

export default App