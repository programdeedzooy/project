// import React, { Component } from "react";
// import ReactDom from "react-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
// class Login extends Component {
//   render() {
//     return ReactDom.createPortal(
//       <MDBContainer>
//         <MDBRow>
//           <MDBCol md="6">
//             <form>
//               <p className="h5 text-center mb-4">Sign in</p>
//               <div className="grey-text">
//                 <MDBInput
//                   label="Type your email"
//                   icon="envelope"
//                   group
//                   type="email"
//                   validate
//                   error="wrong"
//                   success="right"
//                 />
//                 <MDBInput
//                   label="Type your password"
//                   icon="lock"
//                   group
//                   type="password"
//                   validate
//                 />
//               </div>
//               <div className="text-center">
//                 <MDBBtn>Login</MDBBtn>
//               </div>
//             </form>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>,
//       document.getElementById("log")
//     );
//   }
// }

// export default Login;

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("root");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  handleClick = () => {
    this.setState((currentState) => ({
      showModal: !currentState.showModal,
    }));
  };

  render() {
    const modal = this.state.showModal ? (
      <DialogByUsingPortals>
        <div className="overlay" />
        <div className="modal">
          hi all
          <button onClick={this.handleClick}>close</button>
        </div>
      </DialogByUsingPortals>
    ) : null;

    return (
      <Fragment>
        <button onClick={this.handleClick}>show modal</button>
        {modal}
      </Fragment>
    );
  }
}
export default Login;

class DialogByUsingPortals extends React.Component {
  constructor(props) {
    super(props);
    /*   Create a div that we'll render the modal into. Because each
              Modal component has its own element, we can render multiple
              modal components into the modal container.
        */
    this.el = document.createElement("div");
  }
  componentDidMount() {
    // Append the element into the DOM on mount. We'll render into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    //use a portal to render the children into the element, notice the parameters of createPortal api
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
