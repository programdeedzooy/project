import React, { Component } from 'react'

 class Navbar extends Component {
     
    render() {
        return (
            <nav className="nav">
            <span className="ti-name">G&k</span>
            <ul>
                <li> <a href="/" className="active">Home</a> </li>
                <li> <a href="#"> About</a> </li>
                <li> <a href="sales">Sales</a> </li>
                <li> <a href="purchase">Purchase</a> </li>
                <li> <a href="works">Works</a> </li>
                <li> <a href="#">contact us</a> </li>
            </ul>    
        </nav>
        )
    }
}

export default Navbar
